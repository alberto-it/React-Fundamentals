import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import ImageOne from './ImageOne';
import ImageTwo from './ImageTwo';
import ImageThree from './ImageThree';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
      <hr />Images...<br />
      <ImageThree />
      <ImageOne />
      <ImageTwo />
    </div>
  );
}

export default App;