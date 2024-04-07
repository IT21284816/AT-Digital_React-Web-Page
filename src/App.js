import React, { useEffect } from 'react';
import './App.css';
import './AppMobile.css';
import Navbar from './navbar';
import Footer from './Footer';
import homepageImage from './images/Hero Image.png';
import newImage from './images/image 2.png';
import newImage1 from './images/image 1.png';

function App() {
  useEffect(() => {
    const coll = document.getElementsByClassName("collapsible");
    const toggleCollapsible = function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", toggleCollapsible);
    }
    return () => {
      for (let i = 0; i < coll.length; i++) {
        coll[i].removeEventListener("click", toggleCollapsible);
      }
    };
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <div className="card-container">
            <img src={homepageImage} alt="Homepage" style={{ width: '100%', height: 'auto' }} />
            <div className="card-overlay">
              
              <p>We crush your competitors, goals, and sales records - without the B.S.</p>
              <button className="button">Get free consultation</button>
            </div>
          </div>
        </header>
        <div className="image-description-container1">
          <img src={newImage} alt="New Image" />
          <div className="description1">
            <h3>Web & Mobile App Development</h3>
            <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
            <div className='btn'><button className="custom-btn">LEARN MORE</button></div>

          </div>
        </div>
        <br></br><br></br>
        <div className="image-description-container2">
          <div className="description2">
            <h3>Digital Strategy Consulting</h3>
            <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
            <div className='btn'><button className="custom-btn">LEARN MORE</button></div>

          </div>
          <img src={newImage1} alt="New Image" />
        </div>
      </div>
      <center><div>
      <br></br>
        <h4 className="faq-heading">Frequently asked questions</h4>
        <button className="collapsible">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</button>
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
        </div>

        <button className="collapsible">Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</button>
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
        </div>

        <button className="collapsible">Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</button>
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
        </div>
      </div></center>
      <br></br><br></br><br></br><br></br><br></br>
      <Footer/>
    </>
  );
}

export default App;
