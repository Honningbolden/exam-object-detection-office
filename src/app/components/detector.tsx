'use client';

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { detectVideo } from '../utils/detect';
import searchLabels from '../utils/search-labels.json';

export default function ObjectDetector() {
  const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
  const [model, setModel] = useState(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [isModelReady, setIsModelReady] = useState(false);
  const [detections, setDetections] = useState([]);

  // references
  const webcamRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
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
    <div className='relative h-screen w-screen overflow-hidden'>
      {loading.loading && <div className='absolute top-4 left-4 z-10 bg-black/50 text-white p-2 rounded'>Loading model... {(loading.progress * 100).toFixed(2)}%</div>}

      <button onClick={handleWebcam} className='absolute bottom-4 mx-auto bg-blue-500 text-white px-4 rounded'>
        {isWebcamOn ? 'Stop Webcam' : 'Start Webcam'}
      </button>

      {isWebcamOn && (
        <div className='relative h-full w-full'>
          <Webcam
            ref={webcamRef}
            className='absolute top-0 left-0 h-full w-full object-cover'
            videoConstraints={{
              facingMode: 'environment',
              width: 640,
              height: 640,
            }}
            onLoadedMetadata={onWebcamLoad}
          />
        </div>
      )}

      {detections && (
        <div className='absolute top-8 left-8 max-h-96 min-w-24 bg-black/20'>
          <ul>
            {detections.map((det, i) => (
              <li key={i}>
                {det.label}: {(det.confidence * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
