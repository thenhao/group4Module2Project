import React, { useState } from "react";
import AddToCartImg from "../assets/addtocart.png";

import Popup from "../components/popup/popup";
import CartItems from "../components/CartItems";
import TotalBillCalculator from "../components/TotalBillCalculator";
import OrderlistSendBtn from "../components/OrderlistSendBtn";

import "./orderlist.css";

function OrderList(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [TotalBilling, setTotalBilling] = useState(0);

  return (
    <>
      <img src={AddToCartImg} alt="cart icon" style={{ height: 35, width: 35 }} onClick={togglePopup}/>

      {isOpen && <Popup 
       popupType="orderlist-popup" 
       handleClose={togglePopup} 
       content={
            <>
              <CartItems selectedItemList={props.selectedItemList} setSelectedItemList={props.setSelectedItemList}/>
              <TotalBillCalculator selectedItemList={props.selectedItemList} TotalBilling={setTotalBilling}/>
              <OrderlistSendBtn selectedItemList={props.selectedItemList} />
            </>
          }
        />
      )}
    </>
  );
}

export default OrderList;
