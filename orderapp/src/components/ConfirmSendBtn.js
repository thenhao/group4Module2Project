import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
<tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.quantity} 
                            </td>
                            <td>
                                {item.price}
                            </td>
                        </tr>
      {/* <input type="submit" value="Confirm Send" /> */}
    </form>
  );
};