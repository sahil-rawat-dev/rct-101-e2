import React,{ useEffect, useState } from "react";
import { Flex, Grid } from "@chakra-ui/react";
import axios from "axios";

import Product from "./Product";

const Products = () => {
  
  const [pageFilter, setPageFilter] = useState({
    pageNumber: 1,
    limit: 3,
    totalCount: 0,
  });
  const [products, setProducts] = useState([]);

  const { pageNumber, limit } = pageFilter;

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `http://localhost:8080/products?_page=${pageNumber}&_limit=${limit}`
      );
      // setPageFilter({
      //   ...pageFilter,
      //   totalCount: Number(response.headers["x-total-count"]),
      // });

      setProducts(response.data);
    };
    getProducts();
    
  });

  return (
    <Flex>
      {/*  AddProduct */}
      <Grid w="full" gridGap={4} gridTemplateColumns="1fr 1fr 1fr">
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
