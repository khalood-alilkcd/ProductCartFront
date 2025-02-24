import React, { useEffect, useState } from "react";
import { Container, Row, InputGroup, FormControl, Col } from "react-bootstrap";
import { useThemeHook } from "../GloabalComponents/ThemeProvider";
import { BiSearch } from "react-icons/bi";
import SearchFilter from "react-filter-search";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const [theme] = useThemeHook();
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);

  async function getResponse() {
    const res = await fetch("http://localhost:9000/products").then((res) => res.json());
    setProductData(await res);
  }

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <h1 className={theme ? "text-light my-5" : "text-black my-5"}>
            Search Product
          </h1>
          <InputGroup className="mb-3">
            <InputGroup.Text
              className={
                theme
                  ? "bg-black text-black-primary"
                  : "bg-light text-light-primary"
              }
            >
              <BiSearch size="2rem" />
            </InputGroup.Text>
            <FormControl
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={
                theme ? "bg-light-black text-light" : "bg-light text-black"
              }
            />
          </InputGroup>
        </Col>
        <SearchFilter
          value={searchInput}
          data={productData}
          renderResults={(result) => (
            <Row className="justify-content-center">
              {result.map((item, i) => (
                <ProductCard data={item} key={i} />
              ))}
            </Row>
          )}
        />
      </Row>
    </Container>
  );
};

export default Home;
