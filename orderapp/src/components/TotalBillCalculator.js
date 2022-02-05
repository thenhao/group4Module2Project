import React, { useState, useEffect } from "react";

function TotalBillCalculator(props) {
  let totalBill = 0;
  for (const element of props.selectedItemList) {
    totalBill = (totalBill + element.price * element.quantity) * 1.07;
  }
  let finalBill = Math.round(totalBill * 100) / 100;
  return `Your Total bill comes up to $${finalBill} inclusive of 7% gst`;
}

export default TotalBillCalculator;
