import React from 'react'
import './OrderlistPopUp.css'

function OrderlistPopUp(props) {
    //Used for Popuop function only. Content to be in OrderListSendBtn.
    //Trigger with props and question mark to check if its true
    return (props.trigger) ?  (
        //A pop-up button after clicking Send Order button
        <div className="orderlist-popup">
            
                <div className="popup-page">
                {props.children}

                {/* Insert item list table here */}

                {/* Two inner button within the pop-up to 1.Amend (close the page) 2.Send the Order through */}
                
                    <button className="amend-btn" onClick={() => props.setTrigger(false)}>Amend Order</button>
                    <button className="confirm-send-btn">Confirm Send</button>
                    
                </div>
        </div>

    ) : "";

}

export default OrderlistPopUp