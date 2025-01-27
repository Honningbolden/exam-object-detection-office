'use client';

import { useDetections } from '../contexts/DetectionContext';
import { findIcon } from '../utils/findIcon';

export function DetectionMultiplier() {
  const { detections, multiplier } = useDetections();

  if (multiplier === 0) {
    return (
      <>
        <span className='text-gamification-multiplier text-gray-600 font-klavika'>×0</span>
      </>
    );
  }

  return (
    <>
      <span className='text-gamification-multiplier text-gamification-multiplier-active font-klavika'>×{multiplier}</span>
    </>
  );
}

export function DetectionButton() {
  const { detections, multiplier } = useDetections();

  if (multiplier === 0) {
    return (
      <>
        <div className='z-50 p-2.5 h-auto w-full'>
          <button className='btn-primary btn-primary-disabled text-button-primary font-klavika'>Fortsæt</button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='z-50 p-2.5 h-auto w-full'>
        <button className='btn-primary btn-primary-default text-button-primary font-klavika'>Fortsæt</button>
      </div>
    </>
  );
}

export function DetectionStatus() {
  const { detections, multiplier } = useDetections();

  if (multiplier === 0) {
    return (
      <>
        <h1 className='text-title-large font-klavika text-content-primary'>Scan dit rum</h1>
        <h1 className='text-body font-lato text-content-tertiary'>Hvis dele af din opsætning kan optimeres viser ikonerne sig</h1>
      </>
    );
  }

  return (
    <>
      {detections.length > 0 && (
        <div className='w-full flex justify-center px-2.5'>
          <div className='flex justify-center items-center px-6 py-2 gap-2 rounded-full ui-itemshelf w-min'>
            {detections.map((det, i) => (
              <div key={`detection-icon_${i}`}>{findIcon(det.label)}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
