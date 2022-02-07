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

  function updateQuantityHandler() {
    let totalQuantity = 0;
    for (let i = 0; i < props.selectedItemList.length; i++){
      totalQuantity += props.selectedItemList[i].quantity;
      console.log(totalQuantity);
    }
    return totalQuantity;
  }

  return(
    <>
      <img src={AddToCartImg} 
        alt="cart icon" 
        style={{height: 35, width: 35}}
        onClick={togglePopup}/>

      <div className="quantityUpdater">{updateQuantityHandler()}</div>
        
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