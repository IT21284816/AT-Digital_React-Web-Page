import React from 'react';
import './App.css';
import './AppMobile.css'
import Navbar from './navbar';
import homepageImage from './images/Hero Image.png';
import newImage from './images/image 2.png';
import newImage1 from './images/image 1.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="card-container">
          <img src={homepageImage} alt="Homepage" style={{ width: '100%', height: 'auto' }} />
          <div className="card-overlay">
            {/* Your card content here */}
            <p>We crush your competitors, goals, and sales records - without the B.S.</p>
            <button className="button">Get free consultation</button>
          </div>
        </div>
      </header>
      <div className="image-description-container1">
          <img src={newImage} alt="New Image" />
          <div className="description1">
            <h3>Web & Mobile App Development</h3>
            <p>Description of the new image goes here.</p>
            {/* Additional description content */}
          </div>
        </div>
        <div className="image-description-container2">
        <div className="description2">
            <h3>Digital Strategy Consulting</h3>
            <p>Description of the new image goes here.</p>
            {/* Additional description content */}
          </div>
          <img src={newImage1} alt="New Image" />
          
        </div>
    </div>
  );
}

export default App;
