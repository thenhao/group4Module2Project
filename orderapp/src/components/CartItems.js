import React from 'react';
import './CartItems.css';

function CartItems(props) {

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

  return(
    <div>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      {selectedItemList.map(obj => {
        return(
          <tr>
            <td>{obj.name}</td>
            <td>
              <button className="addMinusItem" onClick={() => handleChangeQuantity(obj.name, '-')}>-</button>
              <input className="quantityDisplay" type='text' inputMode='numeric' value={obj.quantity}/>
              <button className="addMinusItem" onClick={() => handleChangeQuantity(obj.name, '+')}>+</button>
            </td>
            <td>
              {(obj.price*obj.quantity).toFixed(2)}
            </td>
          </tr>
        );
      })}
    </div>
  )
}

export default CartItems;