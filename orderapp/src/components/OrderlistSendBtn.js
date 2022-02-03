import OrderlistPopUp from './OrderlistPopUp' ;
import { useState } from 'react';
import './OrderlistSendBtn.css';
import AddToCartItems from './OrderlistContainer'

//Create a function for Send Button
//OnClick Send Button, a Popup will appear using modal


function OrderlistSendBtn () {
    const [buttonPopup, setButtonPopup] = useState(false);



    return (
        <div className="sendbtn">
            <main>
                <button onClick={() => setButtonPopup(true)}>Send Order List</button>
                
            </main>
{/* Create a trigger={} to allow a function that trigger useState */}
            <OrderlistPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
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