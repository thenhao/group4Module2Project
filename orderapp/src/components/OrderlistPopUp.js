import React from 'react'
import { useState } from 'react';
import Invoice from './Invoice.js'
import './OrderlistPopUp.css';
import TotalBillCalculator from './TotalBillCalculator'

function OrderlistPopUp(props) {
    // Used for Popup function only. Content to be in OrderListSendBtn.
    // Trigger with props and question mark to check if its true
    // Use this variable to show the message after sending message:
    //Copy this portion from https://www.emailjs.com/docs/examples/reactjs/

    console.log('Inside Order List Popup:', props.selectedItemList);
    return (props.trigger) ?  (

        <div className="orderlist-popup">
            <div className="popup-page">
                {props.children}

    <button className="close" onClick={() => props.setTrigger(false)}>X</button>
    <h1 className="popupTitle">Your Order Has Been Sent!</h1>
    <Invoice className="invoice" />
    <div className="table">
    <table>
        <thead>
            <tr>
                <th colSpan="3"><h1>Confirm Order Items</h1></th>
            </tr>

            <tr>
                <th> Item Name</th>
                <th> Quantity</th>
                <th> Price</th>
            </tr>
       
        </thead>
        <tbody>
            {
                props.selectedItemList ? props.selectedItemList.map((item) => {
                    return (
                        <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.quantity} 
                            </td>
                            <td>
                                {(item.quantity * item.price).toFixed(2)} 
                            </td>
                        </tr>
                    )
                }) : null
            }
        </tbody>
        <tr>
            <th colSpan="3">
                {/* <h3>Total Bill (inclusive of 7% GST): ${props.finalBill}</h3> */}
            <h3><TotalBillCalculator selectedItemList={props.selectedItemList} setTotalBilling={props.setTotalBilling}  /> </h3>
            </th>
        </tr>
        
    </table>
            </div>
            </div>
    </div>

    ) : "";

}

export default OrderlistPopUp;