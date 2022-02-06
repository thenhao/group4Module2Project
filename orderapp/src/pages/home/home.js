import React from 'react';
import './home.css';
// import imagedata from './imagedata';
// import ImageSlider from './imageslider';

export default function Home() {

  
  return (
    <div>
      <h1 className="promotion-header">&#129346; HAPPY HOUR PROMOTION! &#129346;</h1>
      <p className="promotion">Mojito @ $8</p>
      <p className="promotion">5.30pm to 9.30pm on Fridays!</p>
      
      <div className="image-banner">
        <div className='image-banner'>
          <img id='mojito-banner'src="https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="promotion"
          height="450"/>
        </div>
      </div>
      {/* <ImageSlider slides={imagedata}/> */}
      
    </div>
  );
}