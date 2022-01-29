import OrderlistPopUp from './OrderlistPopUp' ;
import { useState } from 'react';


//Create a function for Send Button
function OrderlistSendBtn () {
    const [buttonPopup, setButtonPopup] = useState(false);



    return (
        <div className="sendbtn">
            <main>
                <button onClick={() => setButtonPopup(true)}>Send Order List</button>
                
            </main>
{/* Create a trigger={} to allow a function that trigger useState */}
            <OrderlistPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h1>Confirm Order List</h1>
            {/* //This is where the items will be shown */}
            <h3>Item# | Item Name | Qty | Price</h3>
        <ul>Item001 | Breakfast Set | 1 | $10.00</ul>
        <ul>Item002 | Afternoon Set | 1 | $10.00</ul>
        <ul>Item003 | Dinner Set | 1 | $10.00</ul>

        <h3>Total: (Amount)</h3>
        <h5>inclusive of GST (gst Amount)</h5>
        </OrderlistPopUp>

        </div>


    )



}

export default OrderlistSendBtn;

// function OrderlistSendBtn () {
    
//     return (
//         <div>
//             <button >Send Order</button>
//         </div>


//     )



// }

// export default OrderlistSendBtn;