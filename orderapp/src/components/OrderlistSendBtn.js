import { useState } from 'react';
import './OrderlistSendBtn.css';
import AddToCartItems from './OrderlistContainer'

//Create a function for Send Button
//OnClick Send Button, a Popup will appear using modal


function OrderlistSendBtn (props) {
    //state handler to close orderlist and open bill
    function sendButtonOnClick() {
      props.setIsOpen(false);
      props.setSendOrderPopup(true);
    }

    //if-else statement to show button when cart is filled and disappear when cart is empty
    if(props.selectedItemList.length === 0) {
      return null;
    }
    else {
      return (
        <div className="sendbtn-container">
            <button id='sendorderbtn' onClick={sendButtonOnClick}>Send Order</button>
        </div>
      )
    }  
}

export default OrderlistSendBtn;