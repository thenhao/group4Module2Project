import React, {useState} from 'react';
import AddToCartImg from '../assets/addtocart.png';

import Popup from '../components/popup/popup';
import CartItems from '../components/CartItems';
import TotalBillCalculator from '../components/TotalBillCalculator';
import OrderlistSendBtn from '../components/OrderlistSendBtn';

import './orderlist.css';

function OrderList(props) {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <img src="https://i.ibb.co/tYKtTN0/image.jpg"
        alt="cart icon" 
        style={{height: 45, width: 45}}
        onClick={togglePopup} />
        
      {isOpen && <Popup 
      popupType='orderlist-popup' 
      handleClose={togglePopup}
      content={
        <>
          <CartItems selectedItemList={props.selectedItemList} setSelectedItemList={props.setSelectedItemList}/>
          <TotalBillCalculator selectedItemList={props.selectedItemList} />              
          <OrderlistSendBtn selectedItemList={props.selectedItemList}/>
        </>
      }/>}
    </>);
}

export default OrderList;