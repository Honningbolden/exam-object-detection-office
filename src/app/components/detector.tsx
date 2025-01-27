'use client';

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { detectVideo } from '../utils/detect';
import searchLabels from '../utils/search-labels.json';
import { Icon } from 'lucide-react';
import { findIcon } from '../utils/findIcon';
import { useDetections } from '../contexts/DetectionContext';

export default function ObjectDetector() {
  const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
  const [model, setModel] = useState(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [isModelReady, setIsModelReady] = useState(false);
  const { detections, setDetections } = useDetections();

  // references
  const webcamRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        await tf.setBackend('webgl');
        await tf.ready();

        const yolo = await tf.loadGraphModel(`/yolo11n-260epoch_web_model/model.json`, {
          onProgress: (fractions) => {
            setLoading({ loading: true, progress: fractions });
          },
        });

        // Warm up the model
        const dummyInput = tf.ones(yolo.inputs[0].shape);
        const warmupResults = yolo.execute(dummyInput);

        setLoading({ loading: false, progress: 1 });
        setModel({
          net: yolo,
          inputShape: yolo.inputs[0].shape,
        });
        setIsModelReady(true);
        setLoading({ loading: false, progress: 1 });

        tf.dispose([warmupResults, dummyInput]); // cleanup memory
      } catch (error) {
        console.error('Error loading moel:', error);
        setLoading({ loading: false, progress: 0 });
      }
    };

    loadModel();

    return () => {
      if (model?.net) {
        model.net.dispose();
      }
      tf.engine().disposeVariables();
    };
  }, []);

  const handleWebcam = () => {
    setIsWebcamOn(!isWebcamOn);
  };

  const onWebcamLoad = () => {
    if (isModelReady && webcamRef.current?.video) {
      detectVideo(webcamRef.current.video, model, handlePredictions);
    }
  };

  const handlePredictions = (results) => {
    const relevantResults = results.filter((result) => searchLabels.includes(result.label));

    setDetections((prevDetections) => {
      const newDetections = [...prevDetections];

      relevantResults.forEach((newDetection) => {
        const existingIndex = newDetections.findIndex((det) => det.label === newDetection.label);

        if (existingIndex === -1) {
          newDetections.push(newDetection);
        } else if (newDetection.confidence > newDetections[existingIndex].confidence) {
          newDetections[existingIndex] = newDetection;
        }
      });
      return newDetections;
    });
  };

  return (
    <div className='flex flex-col gap-2 h-full'>
      <div className='relative h-full w-full overflow-hidden bg-gray-100 rounded-sm'>
        {loading.loading && <div className='absolute top-4 left-4 z-10 bg-black/50 text-white p-2'>Loading model... {(loading.progress * 100).toFixed(2)}%</div>}

        {/* {detections.length > 0 && (
          <div className='absolute bottom-10 w-full py-1 px-2.5'>
            <div className='flex justify-center items-center px-6 py-2 gap-2 rounded-full background ui-itemshelf'>
              {detections.map((det, i) => (
                <div key={`detection-icon_${i}`}>{findIcon(det.label)}</div>
              ))}
            </div>
          </div>
        )} */}

        {isWebcamOn && (
          <div className='h-full w-full object-cover'>
            <Webcam
              ref={webcamRef}
              className='h-full w-full object-cover'
              videoConstraints={{
                facingMode: 'environment',
                width: 932,
                height: 430,
              }}
              onLoadedMetadata={onWebcamLoad}
            />
          </div>
        )}

        {/* {detections && (
        <div className='absolute top-8 left-8 max-h-96 min-w-24 bg-black/20'>
          <ul>
            {detections.map((det, i) => (
              <li key={i}>
                {det.label}: {(det.confidence * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      )} */}
      </div>
      {!isWebcamOn && (
        <div className='px-2.5 pt-2.5'>
          <button onClick={handleWebcam} className='btn-secondary btn-secondary-default text-button-primary font-klavika'>
            {isWebcamOn ? 'Stop Webcam' : 'Start Webcam'}
          </button>
        </div>
      )}
    </div>
  );
}
