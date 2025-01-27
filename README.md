# Office Object Detection

This project is an exam submission for the 3rd semester of Coded Design and Visual Communication at The Danish School of Media & Journalism. It uses a custom-trained YOLOv8n model to detect objects in an office environment, implemented with Next.js and TensorFlow.js.

## Features

- Real-time object detection using a custom-trained YOLOv8n model
- Browser-based inference using TensorFlow.js
- Responsive web interface built with Next.js

## Setup

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Technical Details

- Framework: Next.js 14
- ML Model: Custom-trained YOLO11n
- Inference: TensorFlow.js with WebGL backend
- UI: React components with Tailwind CSS

## Project Context

This project was developed as part of an exam focusing on implementing machine learning models in web applications. The model has been specifically trained to detect office-related objects.

## License

This project is built upon MIT-licensed code. See the original repository for more details.

## Credits

This project builds upon the work of [Hyuto's yolov8-tfjs](https://github.com/Hyuto/yolov8-tfjs) repository. The core logic for loading and processing YOLOv8 models in TensorFlow.js has been adapted from their implementation. Many thanks to Hyuto for making their code publicly available.
