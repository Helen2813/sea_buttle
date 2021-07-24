import { Fragment } from "react";
import { uniqueId } from 'lodash';
import './BattlefieldTable.css';
import { Battlefield } from '../Battlefield/Battlefield';
import cn from 'classnames';

const TITLE_LETTERS = 'АБВГДЕЖЗИK'.split('');
const TITLE_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface BattlefieldTableProps {
  columnsNumber: number;
  rowsNumber: number;
  signed?: boolean;
  axiosX?: number[] | string[];
  axiosY?: number[] | string[];
}

const BattlefieldTable = ({
  columnsNumber,
  rowsNumber,
  signed = false,
  axiosX = TITLE_NUMBERS,
  axiosY = TITLE_LETTERS,
  }: BattlefieldTableProps) => {
  return (
    <div className={cn('battlefield-bg', {
      signed: signed,
    })}>
      {Array(columnsNumber + 1).fill(<></>)
        .map((_, rowIndex) =>
          <div key={uniqueId()} className='row'>
            <span className='battlefield-title-row'>{rowIndex !== 0 && axiosX[rowIndex]}</span>
            {Array(rowsNumber).fill(<></>).map((_, index) => {
              return (
                <Fragment key={uniqueId()}>
                  {(rowIndex === 0)
                    ? <span className='battlefield-title'>{axiosY[index]}</span>
                    : <Battlefield />
                  }
                </Fragment>
                )
            })}
          </div>)
      }
    </div>
  );
};

export { BattlefieldTable };