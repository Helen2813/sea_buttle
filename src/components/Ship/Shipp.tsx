import './Ship.css';
import cn from 'classnames';
import { useMemo, CSSProperties } from "react";

interface ShipProps {
  x: number;
  y: number;
  length: 1 | 2 | 3 | 4;
  direction: 'row' | 'column';
  killed?: boolean;
}

const CELL_SIZE = 5;

const Ship = ({ x, y, length, direction, killed }: ShipProps) => {
  const styles: CSSProperties = useMemo(() => {
    const style = {
      top: '',
      left: '',
      width: '',
      height: '',
    };

    if (direction === 'row') {
      style.top = `${x * CELL_SIZE - 0.1}rem`;
      style.left = `${y * CELL_SIZE}rem`;
      style.width = `${length * CELL_SIZE}rem`;
      style.height = `${CELL_SIZE}rem`;
    } else {
      style.top = `${x * CELL_SIZE - 0.1}rem`;
      style.left = `${y * CELL_SIZE}rem`;
      style.width = `${CELL_SIZE - 0.1}rem`;
      style.height = `${length * CELL_SIZE}rem`;
    }

    return style as CSSProperties;
  }, [x, y, length]);

  return (
    <div
      className={cn('ship', {
        killed: killed,
    })}
      style={styles}
    />
  )
};

export { Ship };