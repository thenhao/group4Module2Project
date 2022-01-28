import React from "React"; //this is telling js it is a component

//data is passed down from this component through the props variable
const OrderList = (props) => {
  //this is the entire react list and its name is OrderList

  console.log(props.name);
  console.log(props.quantity);
  console.log(props.price);

  const itemName = props.name;
  const itemQuantity = props.quantity;
  const itemPrice = props.price;

  return (
    <div>
      <p>
        ${props.name}
        <h1>${props.price}</h1>
        <h2>${props.quantity}</h2>
      </p>
    </div>
  ); //this is what is produced by the component
};

export default OrderList; //this is exporting the component for other components to use
