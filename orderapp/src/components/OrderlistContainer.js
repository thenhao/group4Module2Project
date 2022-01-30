function AddedItem(item, selectedItemList, setSelectedItemList) {
  let newSelectedItemList = [...selectedItemList];
  
  let result = newSelectedItemList.find(obj => {
    if(obj.name === item.name) {
      return true;
    }
    else {
      return false;
    }
  });

  if(result === undefined) {
    newSelectedItemList.push(item);
  }
  else {
    result.quantity = item.quantity;
  }
  setSelectedItemList(newSelectedItemList);
}

export default AddedItem;

