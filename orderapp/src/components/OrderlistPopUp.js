import React from 'react'
import { useState } from 'react';

import Invoice from './Invoice.js'
import './OrderlistPopUp.css';


function OrderlistPopUp(props) {
    console.log('Inside Order List Popup, id for invoice:', props.id)
    console.log('Inside Order List Popup:', props.selectedItemList);
    return (props.trigger) ?  (

        <div className="orderlist-popup">
            <div className="popup-page">
                {props.children}

    <button className="close" onClick={() => props.setTrigger(false)}>X</button>
    <h1 className="popupTitle">Your Order Has Been Sent!</h1>
    <Invoice className="invoice" id={props.id}/>
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
            <tbody>{
                props.selectedItemList ? props.selectedItemList.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{(item.quantity * item.price).toFixed(2)}</td>
                        </tr>
                    )
                }) : null
            }
            </tbody>
        <tr>
            <th colSpan="3">
                <h3>Total Bill (inclusive of 7% GST): ${props.TotalBilling}</h3>
            </th>
        </tr>
    </table>
            </div>
        </div>
    </div>

    ) : "";


}

export default OrderlistPopUp;