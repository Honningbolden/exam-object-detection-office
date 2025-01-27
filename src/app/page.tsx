import ObjectDetector from './components/detector';
import { X } from 'lucide-react';
import { DetectionProvider } from './contexts/DetectionContext';
import { DetectionButton, DetectionMultiplier, DetectionStatus } from './components/DetectionConsumer';

export default function Home() {
  return (
    <DetectionProvider>
      <main className='px-2.5 flex gap-2.5 flex-col h-dvh'>
        <aside className='p-2.5 w-full flex flex-row gap-3 items-center'>
          <X size={32} className='stroke-gray-700' />
          <div className='bg-progressbar shadow-progressbar overflow-hidden h-6 w-full rounded-full'>
            <div className='bg-progressbar-progress shadow-progressbar-progress overflow-hidden h-full w-1/3 rounded-full'></div>
          </div>
          <DetectionMultiplier />
        </aside>
        <div className='relative h-full overflow-hidden flex flex-col'>
          <div className='px-2.5 pb-2.5 pt-1'>
            <DetectionStatus />
          </div>
          <ObjectDetector />
        </div>
        <DetectionButton />
      </main>
    </DetectionProvider>
  );
}
