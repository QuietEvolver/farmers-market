import React from 'react';
import Header from './Header';
import LocationController from './LocationController';
import ProduceController from './ProduceController';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <main>
          <div className="index-list"><LocationController /></div>
          <div className="index-list"><ProduceController /></div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
