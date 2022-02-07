import React from 'react'
import { useState } from 'react';

import Invoice from './Invoice.js'
import './OrderlistPopUp.css';

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

                {/* Insert item list table here */}

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
                                {item.price}
                            </td>
                        </tr>
                    )
                }) : null
            }
        </tbody>
    </table>
            </div>
                    
            </div>
    </div>

    ) : "";

}

export default OrderlistPopUp
