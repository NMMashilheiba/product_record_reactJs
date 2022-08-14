import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
const ProductsTop = (props) => {
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
      </tr>
    );
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>{props.products.map(renderProduct)}</tbody>
    </Table>
  );
};

export default ProductsTop;
