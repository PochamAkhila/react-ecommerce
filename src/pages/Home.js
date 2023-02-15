import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import environment from "../environment";

function Home() {
  //useState
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  //useEffect
  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    fetch(`${environment.api}/products`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const products = res.map((product) => {
          product.selected = false;
          return product;
        });
        setProducts(products);
        setData(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Api call is completed");
      });
  }

  function onSearch(term) {
    console.log(term);
    if (!term) {
      console.log(data);
      return;
    }
    const filtered = data.filter((item) => {
      const titleLowerCased = item.title.toLowerCase();
      const termLowerCased = term.toLowerCase();
      return titleLowerCased.indexOf(termLowerCased) != -1;
    });
    setProducts(filtered);
  }

  function renderCols() {
    return products.map(function (product, index) {
      return (
        <Col md={4} xl={3} key={index}>
          <ProductCard item={product} reload={getProducts}/>
        </Col>
      );
    });
  }

  return (
    <>
      <Search onSearch={onSearch} />
      <Container>
        <Row>{renderCols()}</Row>
      </Container>
    </>
  );
}

export default Home;
