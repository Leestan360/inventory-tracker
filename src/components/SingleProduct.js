import React from "react";

function SingleProduct({ product }) {

  return(
  <div>
    <p>{product.name}</p>
    <p>{product.stock}</p>
    <p>{product.selling_price}</p>
  </div>)

};

export default SingleProduct;