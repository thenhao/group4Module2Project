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
      <p>
        ${itemName}
        <h1>${itemPrice}</h1>
        <h2>${itemQuantity}</h2>
      </p>
    </div>
  );
};

export default OrderList;
