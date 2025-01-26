'use client';

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import { useEffect, useRef, useState } from 'react';
import { detectVideo } from '../utils/detect';
import { Webcam } from '../utils/webcam';

export default function ObjectDetector() {
  const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
  const [model, setModel] = useState({
    net: null,
    inputShape: [1, 0, 0, 3],
  }); // init model & input shape

  const [isWebcamOn, setIsWebcamOn] = useState(false);

  // references
  const imageRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const webcam = new Webcam();

  // model configs
  const modelName = 'yolo11n-260epoch';

  useEffect(() => {
    tf.ready().then(async () => {
      const yolo = await tf.loadGraphModel(`${window.location.href}${modelName}_web_model/model.json`, {
        onProgress: (fractions) => {
          setLoading({ loading: true, progress: fractions }); // set loading fractions
        },
      }); // load model

      // warming up model
      const dummyInput = tf.ones(yolo.inputs[0].shape);
      const warmupResults = yolo.execute(dummyInput);

      setLoading({ loading: false, progress: 1 });
      setModel({
        net: yolo,
        inputShape: yolo.inputs[0].shape,
      }); // set model & input shape

      tf.dispose([warmupResults, dummyInput]); // cleanup memory
    });
  }, []);

  const handleWebcam = () => {
    if (isWebcamOn) {
      webcam.close(cameraRef.current);
      setIsWebcamOn(false);
    } else {
      webcam.open(cameraRef.current);
      setIsWebcamOn(true);
    }
  };

  return (
    <div className='App'>
      {loading.loading && <div>Loading model... {(loading.progress * 100).toFixed(2)}%</div>}
      <button onClick={handleWebcam} style={{ margin: '10px', padding: '10px' }}>
        {isWebcamOn ? 'Stop Webcam' : 'Start Webcam'}
      </button>{' '}
      <div className='relative min-w-96'>
        <video className='absolute top-0 left-0' autoPlay muted playsInline ref={cameraRef} onPlay={() => detectVideo(cameraRef.current, model, canvasRef.current)} />
        <canvas className='absolute top-0 left-0 h-full w-full' width={model.inputShape[1]} height={model.inputShape[2]} ref={canvasRef} />
      </div>
    </div>
  );
}
