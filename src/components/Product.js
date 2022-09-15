import React from "react";

function Product({ products }) {
  return (
    <div className="">
      {products.map((product) => {
        return (
          <div key={product.product_id}>
            <p>Name: {product.name}</p>
            <p>Stock: {product.stock}</p>
            <p>Selling Price: {product.selling_price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
