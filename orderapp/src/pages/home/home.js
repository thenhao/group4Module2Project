import React from 'react';
import './home.css';

export default function Home() {

  return (
    <div>
      <h1 className="promotion">&#129346; HAPPY HOUR PROMOTION! &#129346;</h1>
      <h1 className="promotion">MOJITO FOR $8 ON FRIDAYS!</h1>
      <div className='image-banner'>
        <img id='mojito-banner'src="https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="promotion"
        height="450"
      />
      </div>
    </div>
  );
}