import React from 'react';
import './dessert.css';
import MenuitemContainer from '../../components/MenuitemContainer';

export default function Dessert(props) {

  return (
    <div>
      <MenuitemContainer className="maincontainer" itemData={props.data} addtocart={props.addtocart} type={props.type}/>
    </div>
  );
}