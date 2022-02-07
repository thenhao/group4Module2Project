import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './CartItems.css';

function CartItems(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mbsyj9p', 'template_65mg3x8', form.current, 'user_QJAMnGLGMj3Gb8rV1nMXO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <tr>
        <td className='table-content'>{obj.name}</td>
        <td className='table-content'>
          <button className="addMinusItem" onClick={() => handleChangeQuantity(obj.name, '-')}>-</button>
          <input className="quantityDisplay" type='text' inputMode='numeric' value={obj.quantity}/>
          <button className="addMinusItem" onClick={() => handleChangeQuantity(obj.name, '+')}>+</button>
        </td>
        <td className='table-content'>
          ${(obj.price*obj.quantity).toFixed(2)}
        </td>
      </tr>
    </form>
  );
}





/*function CartItems(props) {

  let selectedItemList = props.selectedItemList;
  let setSelectedItemList = props.setSelectedItemList;

  function handleChangeQuantity(itemName, symbol) {

    let newSelectedItemList = [...selectedItemList];
    let targetItem = newSelectedItemList.find(obj => {
      if(obj.name === itemName) {
        return true;
      }
      else {
        return false;
      }
    })
      
    if(symbol === '-') {
      targetItem.quantity -= 1;
    }
    else {
      targetItem.quantity += 1;
    }
    
    if(targetItem.quantity <= 0) {
      let targetIndex = newSelectedItemList.findIndex(obj => {
        if(targetItem.name === obj.name) {
          return true;
        }
        else {
          return false;
        }
      });

      newSelectedItemList.splice(targetIndex, 1);
    }

    setSelectedItemList(newSelectedItemList);
  }
  
  if(selectedItemList.length === 0) {
    return(
      <div>
        <h2>- ORDERS - </h2>
        <p className="empty-list">Nothing has been ordered.</p>
      </div>
    );
  }
  else {
    return(
      <div>
        <h2>- ORDERS -</h2>
        <tr>
          <th className='table-header'>Item</th>
          <th className='table-header'>Quantity</th>
          <th className='table-header'>Price</th>
        </tr>
        {selectedItemList.map(obj => {
          return(
            <>
              <tr>
                <td className='table-content'>{obj.name}</td>
                <td className='table-content'>
                  <button className="addMinusItem" onClick={() => handleChangeQuantity(obj.name, '-')}>-</button>
                  <input className="quantityDisplay" type='text' inputMode='numeric' value={obj.quantity}/>
                  <button className="addMinusItem" onClick={() => handleChangeQuantity(obj.name, '+')}>+</button>
                </td>
                <td className='table-content'>
                  ${(obj.price*obj.quantity).toFixed(2)}
                </td>
              </tr>
              <hr/>
            </>
            
          );
        })}
      </div>
    );
  }
  
}

export default CartItems;*/