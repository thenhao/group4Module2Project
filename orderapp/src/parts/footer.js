import React from 'react';
import './footer.css';
import FacebookImg from '../assets/facebook.png';
import InstagramImg from '../assets/instagram.png';
import TwitterImg from '../assets/twitter.png';
import TelegramImg from '../assets/telegram.png';

function Footer() {
  return (
    <div className="footer-container">
        <hr/>
        <img id="fb-img" src={FacebookImg} alt="facebook logo"/>
        <img id="instagram-img"src={InstagramImg}  alt="instagram logo"/>
        <img id="twitter-img"src={TwitterImg}  alt="twitter logo"/>
        <img id="telegram-img"src={TelegramImg}  alt="telegram logo"/>
        <p className="copyright">&#169; 2022 GroupFour Inc.<br/>Ambrosial was created using React</p>
      </div>
  );
}
  
  export default Footer;