import './Battlefield.css';
import { ReactNode } from 'react';
import { uniqueId } from "lodash";

interface BattlefieldProps {
  children?: ReactNode;
}

const Battlefield = ({ children }: BattlefieldProps) => {
  return (
    <div key={uniqueId()} className='cell'>{children}</div>
  )
};

export { Battlefield };