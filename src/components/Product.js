import React from "react";

function Product({ products }) {
  return (
    <div className="border-2 rounded-lg text-xl p-2 cursor-pointer grid gap-3 grid-cols-3 overflow-auto mx-4 mt-14" style={{height: "530px"}}>
      {products.map((product) => {
        return (
          <div key={product.product_id} className="border-2 border-blue-400 shadow-xl rounded-lg p-2">
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
