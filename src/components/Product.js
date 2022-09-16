import React from "react";

function Product({ products }) {
  return (
    <div className="border-2 m-2 text-xl p-2 cursor-pointer grid gap-3 grid-cols-4 grid-rows-4 m-4 h-4/5">
      {products.map((product) => {
        return (
          <div key={product.product_id} className="border-2 p-2">
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
