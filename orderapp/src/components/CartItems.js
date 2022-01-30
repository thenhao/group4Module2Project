import React from 'react';

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
        {selectedItemList.map(obj => {
          return(
            <>
              <p>{obj.name},
              <button className="addMinusItem" onClick={() => handleChangeQuantity(obj.name, '-')}>-</button>
              <input className="quantityDisplay" type='text' inputMode='numeric' value={obj.quantity}/>
              <button className="addMinusItem" onClick={() => handleChangeQuantity(obj.name, '+')}>+</button>,
              Price:{obj.price}</p>
            </>
          );
        })}
    </div>
  )
}

export default CartItems;