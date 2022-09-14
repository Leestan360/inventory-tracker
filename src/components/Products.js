import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://assessment.api.vweb.app/products")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        console.log(products);
      });
  }, []);

  const product = products.map((product) => (
    <SingleProduct key={product.product_id} product={product} />
  ));

  return <div>{product}</div>;
}

export default Products;
