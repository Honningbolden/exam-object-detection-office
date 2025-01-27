import * as tf from '@tensorflow/tfjs';
import labels from './labels.json';

export interface DetectionResult {
  label: string;
  confidence: number;
}

export interface YOLOModel {
  net: tf.GraphModel;
  inputShape: number[];
}

const numClass = labels.length;

const preprocess = (source: HTMLVideoElement, modelWidth: number, modelHeight: number): tf.Tensor4D => {
  const input = tf.tidy(() => {
    const img = tf.browser.fromPixels(source) as tf.Tensor3D;
    const [h, w] = img.shape.slice(0, 2);
    const maxSize = Math.max(w, h);
    const imgPadded = img.pad([
      [0, maxSize - h],
      [0, maxSize - w],
      [0, 0],
    ]) as tf.Tensor3D;

    return tf.image.resizeBilinear(imgPadded, [modelWidth, modelHeight]).div(255.0).expandDims(0);
  });

  return input as tf.Tensor4D;
};

/**
 * Function to detect objects in webcam stream
 * @param videoSource webcam video source
 * @param model loaded YOLOv8 tensorflow.js model
 * @param onResults callback to receive detection results
 */
export const detectVideo = (videoSource: HTMLVideoElement, model: YOLOModel, onResults: (results: DetectionResult[]) => void): void => {
  const detectFrame = async (): Promise<void> => {
    if (videoSource.videoWidth === 0 && videoSource.srcObject === null) {
      return;
    }

    const [modelWidth, modelHeight] = model.inputShape.slice(1, 3);

    tf.engine().startScope();
    const input = preprocess(videoSource, modelWidth, modelHeight);

    const res = model.net.execute(input) as tf.Tensor;
    const transRes = res.transpose([0, 2, 1]);

    // Process raw model output
    const [scores, classes] = tf.tidy((): [tf.Tensor1D, tf.Tensor1D] => {
      const rawScores = transRes.slice([0, 0, 4], [-1, -1, numClass]).squeeze([0]);
      return [rawScores.max(1), rawScores.argMax(1)];
    });

    // Post process with Non-Max Suppression
    const scores1D = scores as tf.Tensor1D;
    const boxes2D = tf.zeros([scores1D.shape[0], 4]) as tf.Tensor2D; // Shape array
    const nms = await tf.image.nonMaxSuppressionAsync(boxes2D, scores1D, 500, 0.45, 0.2);

    // Convert tensor data to Javascript arrays
    const scores_data = scores.gather(nms, 0).dataSync();
    const classes_data = classes.gather(nms, 0).dataSync();

    // Format results into DetectionResult objects
    const results: DetectionResult[] = Array.from(classes_data).map((classId, i) => ({
      label: labels[classId],
      confidence: scores_data[i],
    }));

    onResults(results);
    tf.dispose([res, transRes, scores, classes, nms]);
    tf.engine().endScope();

    requestAnimationFrame(detectFrame);
  };

  detectFrame();
};
