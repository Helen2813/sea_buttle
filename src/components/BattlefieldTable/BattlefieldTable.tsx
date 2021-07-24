import { uniqueId } from 'lodash';
import './BattlefieldTable.css';
import { Battlefield } from '../Battlefield/Battlefield';

const TITLE_LETTERS = 'АБВГДЕЖЗИK';

const BattlefieldTable = () => {
  return (
    <div className='battlefield-bg'>
      {Array(10).fill(<></>)
        .map((_, rowIndex) =>
          <div key={uniqueId()} className='row'>
            <span className='battlefield-title-row'>{rowIndex !== 0 && rowIndex}</span>
            {Array(10).fill(<></>).map((_, index) => {
              return (
                <>
                  {(rowIndex === 0)
                    ? <span className='battlefield-title'>{TITLE_LETTERS[index]}</span>
                    : <Battlefield />
                  }
                </>
                )
            }
                // {(index === 0) && <span className='battlefield-title'>{rowIndex}</span>}

              // )
            )}
          </div>)
      }
    </div>
  );
};

export { BattlefieldTable };