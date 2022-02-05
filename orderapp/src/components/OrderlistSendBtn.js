import OrderlistPopUp from './OrderlistPopUp' ;
import { useState } from 'react';
import './OrderlistSendBtn.css';
import AddToCartItems from './OrderlistContainer'

//Create a function for Send Button
//OnClick Send Button, a Popup will appear using modal


function OrderlistSendBtn (props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    if(props.selectedItemList.length === 0) {
      return null;
    }
    else {
      return (
        <>
          <div className="sendbtn-container">
            <button id='sendorderbtn' onClick={() => setButtonPopup(true)}>Send Order</button>
          </div>
  
          {/* Create a trigger={} to allow a function that trigger useState */}
          <OrderlistPopUp trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </>
      )
    }  
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