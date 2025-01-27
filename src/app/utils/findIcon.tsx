import { AirVent, BedDoubleIcon, Grid2X2, Keyboard, LampIcon, Laptop, Monitor, MonitorPlay, Mouse, Printer, RockingChair, Sofa, TvMinimalPlay } from 'lucide-react';

export const findIcon = (label: string): JSX.Element | null => {
  if (label == 'Desk' || label == 'Table') return <Monitor size={20} color='var(--color-content-inverse)' />;
  if (label == 'Chair' || label == 'Desk chair') return <RockingChair size={20} color='var(--color-content-inverse)' />;
  if (label == 'Window' || label == 'Window blind') return <Grid2X2 size={20} color='var(--color-content-inverse)' />;
  if (label == 'Tablet computer' || label == 'Laptop') return <Laptop size={20} color='var(--color-content-inverse)' />;
  if (label == 'Mechanical fan' || label == 'Ceiling fan') return <AirVent size={20} color='var(--color-content-inverse)' />;
  if (label == 'Lamp' || label == 'Light bulb') return <LampIcon size={20} color='var(--color-content-inverse)' />;
  if (label == 'Computer monitor') return <MonitorPlay size={20} color='var(--color-content-inverse)' />;
  if (label == 'Computer mouse') return <Mouse size={20} color='var(--color-content-inverse)' />;
  if (label == 'Computer keyboard') return <Keyboard size={20} color='var(--color-content-inverse)' />;
  if (label == 'Television') return <TvMinimalPlay size={20} color='var(--color-content-inverse)' />;
  if (label == 'Bed') return <BedDoubleIcon size={20} color='var(--color-content-inverse)' />;
  if (label == 'Couch' || label == 'Studio couch') return <Sofa size={20} color='var(--color-content-inverse)' />;
  if (label == 'Printer' || label == 'Office supplies') return <Printer size={20} color='var(--color-content-inverse)' />;
  return null;
};
