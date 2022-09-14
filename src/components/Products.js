import React, { useEffect } from "react";
import { useState } from "react";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://assessment.api.vweb.app/products")
    .then(res => res.json())
    .then((products) => {
      setProducts(products)
      console.log(products);
    })
  }, [])

  return (<div></div>)
}

export default Products;