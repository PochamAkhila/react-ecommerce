import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Brand from "./Brand";
import { useEffect, useState } from "react";

function PrimaryNav() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setInterval(() => {
      let selectedProducts = localStorage.getItem("selectedProducts");
      if (!selectedProducts) {
        selectedProducts = [];
      } else {
        selectedProducts = JSON.parse(selectedProducts);
      }
      console.log(selectedProducts.length);
      setSelected(selectedProducts.length);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar bg="info" expand="lg">
        <Container>
          <Brand />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link" className="position-relative">
                Wishlist
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {selected}
                </span>
              </Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>
              <Nav.Link href="#link">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default PrimaryNav;
