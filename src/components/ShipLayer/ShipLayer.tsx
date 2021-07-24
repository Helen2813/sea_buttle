import { ReactNode } from "react";
import './ShipLayer.css';

interface ShipLayerProps {
  children: ReactNode;
}

const ShipLayer = ({ children }: ShipLayerProps) => {
  return (
    <div className='ship-layer'>{children}</div>
  )
};

export { ShipLayer };