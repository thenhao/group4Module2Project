import React from 'react';
import './home.css';
// import imagedata from './imagedata';
// import ImageSlider from './imageslider';

export default function Home() {

  
  return (
    <div>
      <h1 className="promotion">HAPPY HOUR PROMOTION</h1>
      <p className="promotion">From 2pm - 5pm daily!</p>
      <h2 className="promotion">MOJITO FOR $8</h2>
      <img src="https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="promotion"
      height="550"
      />
      {/* <ImageSlider slides={imagedata}/> */}
    </div>
  );
}