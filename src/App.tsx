import React from 'react';
import './App.css';
import { BattlefieldTable, Ship, ShipLayer } from './components';

function App() {
  return (
    <div className="app">
      <BattlefieldTable columnsNumber={10} rowsNumber={10} />
      <ShipLayer>
        <Ship x={9} y={1} length={4} direction='row' />
        <Ship x={2} y={5} length={2} direction='column' killed={true}/>
      </ShipLayer>
    </div>
  );
}

export default App;
