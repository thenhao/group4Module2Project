import React, {useState} from 'react';

function AddToCartItems() {

  //testing default variables
  let defaultItem = {
    name: 'Coke',
    quantity: 2,
    price: '$2.90'
  }

  const [item, setItem] = useState(defaultItem); // details to be taken from Tianhao
  const [selectedItemList, setSelectedItemList] = useState([]); // to be printed on the order list
  // const [itemQuantity, setItemQuantity] = useState(item.quantity);

  let newSelectedItemList = [...selectedItemList, item];
  setSelectedItemList(newSelectedItemList);
}

export default AddToCartItems;