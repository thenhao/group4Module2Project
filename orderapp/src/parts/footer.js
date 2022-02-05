import React from 'react';
import './footer.css';
import FacebookImg from '../assets/facebook.png';
import InstagramImg from '../assets/instagram.png';
import TwitterImg from '../assets/twitter.png';

function Footer() {
  return (
    <>
      <div className="footer-container">
        <img className="fb-img" src={FacebookImg} alt="facebook logo"/>
        <img className="instagram-img"src={InstagramImg}  alt="instagram logo"/>
        <img className="twitter-img"src={TwitterImg}  alt="twitter logo"/>
        <p className="copyright">&#169; 2022 GroupFour Inc.</p>
      </div>
      
    </>
  );
}
  
  export default Footer;