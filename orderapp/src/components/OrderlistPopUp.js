import React from 'react'
//import ConfirmedOrder from './ConfirmSendBtn';
import CartItems from './CartItems';
import Invoice from './Invoice.js'
import './OrderlistPopUp.css';

function OrderlistPopUp(props) {
    // Used for Popup function only. Content to be in OrderListSendBtn.
    // Trigger with props and question mark to check if its true

    // Use this variable to show the message after sending message:
    //Copy this portion from https://www.emailjs.com/docs/examples/reactjs/
    return (
    <>
        {/* Insert item list table here */}

        <h1 className="popupTitle">- ORDER BILL -</h1>
        <Invoice className="invoice" />
        <div className="table">
            <table className="orderbill-table">
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </table>
        </div>

        <div className='button-container'>
        </div>
    </>);

}

export default OrderlistPopUp