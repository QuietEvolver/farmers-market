import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LocationController from './LocationController';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <main>
          <LocationController />
          
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
