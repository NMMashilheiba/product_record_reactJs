import React, { useState, useEffect } from "react";
import { Container, Row, Col, Navbar, Nav, Spinner } from "react-bootstrap";
// import SearchBar from "./components/searchBar/SearchBar";
import ProductsAll from "./components/table/table";
import "./App.css";
import ProductsToday from "./components/table_today/today_table";
import ProductsTop from "./components/table_top/top_table";
import EnterRecord from "./components/entry_record";
// import ProductsAll from "./components/table/table";

const App = () => {
  const [allProduct, setAllProductState] = useState([]);
  const [topSells, setTopSells] = useState([]);
  const [todaysSells, setTodaysSells] = useState([]);

  useEffect(() => {
    fetch("https://sellsrecord.herokuapp.com/product/allproducts")
      .then((res) => res.json())
      .then((productsArray) => {
        const newAllProductState = productsArray.map((product) => ({
          name: product.name,
          quantity: product.quantity,
          amount: product.amount,
        }));
        setAllProductState(newAllProductState);
        // console.log("All product", newAllProductState);
      });
  }, []);

  useEffect(() => {
    fetch("https://sellsrecord.herokuapp.com/product/topproducts")
      .then((res) => res.json())
      .then((productsArray) => {
        const topSell = productsArray.map((product) => ({
          name: product._id,
          quantity: product.quantity,
        }));
        setTopSells(topSell);
        // console.log("Top sell", topSell);
      });
  }, []);

  useEffect(() => {
    fetch("https://sellsrecord.herokuapp.com/product/todayssell")
      .then((res) => res.json())
      .then((productsArray) => {
        const todaySell = productsArray.map((product) => ({
          name: product.name,
          quantity: product.quantity,
          amount: product.amount,
        }));
        setTodaysSells(todaySell);
        console.log("Today sell", todaySell);
      });
  }, []);

  const hasTopSells = topSells.length > 0;
  const hasAllProduct = allProduct.length > 0;
  const hasTodaysSells = todaysSells.length > 0;

  // console.log("Todays list", todaysSells[0].list);
  // console.log(todaysSells);
  // console.log(allProduct);
  // console.log(topSells);

  return (
    <div className="edge-main">
      <Navbar variant="dark" className="all-margin bg-nav">
        <Navbar.Brand href="#home">
          <h3>Product Sells Record</h3>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Products</Nav.Link>
          <Nav.Link href="#features">Today's Revenue</Nav.Link>
          <Nav.Link href="#pricing">Top Sells</Nav.Link>
        </Nav>
      </Navbar>
      <br />
      <div className="all-margin">
        <Row>
          <Col xs={6} className="bg-col">
            <h2>Products Sells List</h2>
            {hasAllProduct ? (
              <ProductsAll products={allProduct} />
            ) : (
              <Spinner animation="border" />
            )}
          </Col>
          <Col className="bg-col">
            <h2>Top Five Sells</h2>
            {hasTopSells ? (
              <ProductsTop products={topSells} />
            ) : (
              <Spinner animation="border" />
            )}
          </Col>
          <Col className="bg-col">
            <h2>Today's Revenue</h2>
            {hasTodaysSells ? (
              <ProductsToday products={todaysSells} />
            ) : (
              "No Record for today"
            )}
          </Col>
        </Row>
      </div>
      <br />
      <div className="all-margin ">
        <Row>
          <Col className="bg-col">
            <h2>Enter New Record</h2>
            <EnterRecord />
          </Col>
          <Col className="bg-col">
            <h2>Heaadings...</h2>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
