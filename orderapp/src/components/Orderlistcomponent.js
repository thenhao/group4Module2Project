import React from "React";

const OrderList = (props) => {
  console.log(props.name);
  console.log(props.quantity);
  console.log(props.price);

  const itemName = props.name;
  const itemQuantity = props.quantity;
  const itemPrice = props.price;

  return (
    <div>
        <span>${itemName}</span>
        <span>${itemPrice}</span>
        <span>${itemQuantity}</span>
    </div>
  );
};

export default OrderList;
