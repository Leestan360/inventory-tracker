import React from "react";

function Product({ products }) {
  const productIds = products.map((product, index) => {
    return (
      <p key={index} className="border-b text-center">
        {product.product_id}
      </p>
    );
  });

  const productNames = products.map((product, index) => {
    return (
      <p key={index} className="border-b text-center">
        {product.name}
      </p>
    );
  });

  const productStock = products.map((product, index) => {
    return (
      <p key={index} className="border-b text-center">
        {product.stock}
      </p>
    );
  });

  const productPrice = products.map((product, index) => {
    return (
      <p key={index} className="border-b text-center">
        {product.selling_price}
      </p>
    );
  });

  return (
    <div className="mt-10 ml-32">
      <tr className="">
        <td className="py-3 text-left">
          <div className=" w-16 pl-2">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                ID
              </h3>
            </div>
            <div className="text-xl border-l">{productIds}</div>
          </div>
        </td>
        <td className="py-3 text-left">
          <div className=" w-96">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                PRODUCT NAME
              </h3>
            </div>
            <div className="text-xl border-l ">{productNames}</div>
          </div>
        </td>
        <td className="py-3 text-left">
          <div className="w-32">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                STOCK
              </h3>
            </div>
            <div className="text-xl border-l">{productStock}</div>
          </div>
        </td>
        <td className="py-3 text-left">
          <div className="w-40">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                SELLING PRICE
              </h3>
            </div>
            <div className="text-xl border-l border-r">{productPrice}</div>
          </div>
        </td>
      </tr>
    </div>
  );
}

export default Product;
