import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LocationDisplay from './LocationDisplay';

import figmaScreenshot from "./../img/fm.png"


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <main>
          <LocationDisplay selectedDay="Monday" />

          <img src={figmaScreenshot} />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
