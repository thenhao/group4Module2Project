import React, {useState} from 'react';
import AddToCartImg from '../assets/addtocart.png';

import Popup from '../components/popup/popup';
import CartItems from '../components/CartItems';
import TotalBillCalculator from '../components/TotalBillCalculator';
import OrderlistSendBtn from '../components/OrderlistSendBtn';

import './orderlist.css';
import Trialemail from '../components/trialemail';

function OrderList(props) {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <img src={AddToCartImg} 
        alt="cart icon" 
        style={{height: 35, width: 35}}
        onClick={togglePopup} />
        
      {isOpen && <Popup 
      popupType='orderlist-popup' 
      handleClose={togglePopup}
      content={
        <>
          <CartItems selectedItemList={props.selectedItemList} setSelectedItemList={props.setSelectedItemList}/>
          <TotalBillCalculator selectedItemList={props.selectedItemList} />              
          <OrderlistSendBtn selectedItemList={props.selectedItemList}/>
          <Trialemail selectedItemList={props.selectedItemList}/>
        </>
      }/>}
    </>);
}

export default OrderList;