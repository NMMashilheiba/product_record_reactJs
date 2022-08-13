import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
const ProductsToday = (props) => {
  // const products = [
  //   { name: "iphone13", quantity: "3", amount: "300000" },
  //   { name: "Refrigerator", quantity: "2", amount: "105000" },
  //   { name: "Air Conditioner", quantity: "5", amount: "250000" },
  // ];
  const renderProduct = (product, index) => {
    return (
      <tr key={index}>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>{product.amount}</td>
      </tr>
    );
  };
  var todaystotalRev = 0;
  props.products.map((product) => {
    return (todaystotalRev += product.amount);
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Amout</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map(renderProduct)}
        <tr>
          <th colSpan={2}> Today's Total Revenue</th>
          <td>{todaystotalRev}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ProductsToday;
