import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LocationDisplay from './LocationDisplay';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <main>
          <LocationDisplay />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
