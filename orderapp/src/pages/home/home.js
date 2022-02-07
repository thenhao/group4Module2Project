import React from 'react';
import './home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../components/carousel/Carousel.css"


export default function Home() {

 
  
  
  return (  
      <Carousel className="carouselcontainer" autoPlay infiniteLoop showArrows="true" showThumbs="false" thumbWidth={0}>
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
        </div>

        <div>
          <h1 className="promotion-header">&#129385; LUNCH HOUR PROMOTION! &#129385;</h1>
          <p className="promotion">Steak and fries 30% OFF !</p>
          <p className="promotion">Available only from 11am to 1pm !</p>
          
          <div className="image-banner">
            <div className='image-banner'>
              <img id='steak-banner'src="https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Steak_Frites_V10-700x461.jpg"
              alt="promotion"
              height="450"/>
            </div>
          </div> 
        </div>

        <div>
          <h1 className="promotion-header">&#127851; DESSERT PROMOTION! &#127851;</h1>
          <p className="promotion">Chocolate Brownie free with orders above $50 !</p>
          <p className="promotion">While stocks last !</p>
          
          <div className="image-banner">
            <div className='image-banner'>
              <img id='brownie-banner'src="https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg"
              alt="promotion"
              height="450"/>
            </div>
          </div> 
        </div>
      </Carousel>
  );
}