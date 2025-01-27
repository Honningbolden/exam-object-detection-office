'use client';

import React, { createContext, useContext, useState } from 'react';

type DetectionContextType = {
  detections: any[];
  setDetections: React.Dispatch<React.SetStateAction<any[]>>;
  multiplier: number;
};

const DetectionContext = createContext<DetectionContextType | undefined>(undefined);

export function DetectionProvider({ children }: { children: React.ReactNode }) {
  const [detections, setDetections] = useState<any[]>([]);
  const multiplier = detections.length * 2;

  return <DetectionContext.Provider value={{ detections, setDetections, multiplier }}>{children}</DetectionContext.Provider>;
}

export function useDetections() {
  const context = useContext(DetectionContext);
  if (undefined === context) {
    throw new Error('useDetections must be used within a DetectionProvider');
  }
  return context;
}
