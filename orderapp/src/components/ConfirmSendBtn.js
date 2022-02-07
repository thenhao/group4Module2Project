import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ConfirmSendBtn.css';

export default function ConfirmedOrder() {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fi5x0b7', 'template_54i6s6w', e.target, 'user_ZPUjQNampuN5LvHgZar8N')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      {/* <label>Item</label>
      <input type="text" name="user_name" />
      <label>Quantity</label>
      <label>Price</label> */}
      <input className="confirm-send-btn" type="submit" value="Confirm Send" />
    </form>
  );
};