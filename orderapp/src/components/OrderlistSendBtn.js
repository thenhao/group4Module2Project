import OrderlistPopUp from './OrderlistPopUp' ;
import { useState } from 'react';
import './OrderlistSendBtn.css';
import AddToCartItems from './OrderlistContainer'
import emailjs from '@emailjs/browser';

//Create a function for Send Button
//OnClick Send Button, a Popup will appear using modal

function OrderlistSendBtn (props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    
    function onSendOrderButtonClick(e) {
      // 1. Send Email with confirmed props.

      console.log('I need to send email here');

      // 2. setButtonPopup to true
      setButtonPopup(true)
    }
    //if-else statement to show button when cart is filled and disappear when cart is empty
    if(props.selectedItemList.length === 0) {
      return null;
    }
    else {
      console.log('Inside Send Button:', props.selectedItemList);
      return (
        <>
          <div className="sendbtn-container">
            <button id='sendorderbtn' onClick={() => onSendOrderButtonClick()}>Send Order</button>
          </div>
        

          {/* Create a trigger={} to allow a function that trigger useState */}
          <OrderlistPopUp trigger={buttonPopup} setTrigger={setButtonPopup} selectedItemList={props.selectedItemList}/>
        </>
      )
    }  
}

export default OrderlistSendBtn;