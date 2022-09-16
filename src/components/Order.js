import React from "react";

function Order({ orders }) {
  const orderIds = orders.map((order, index) => {
    return (
      <p key={index} className="border-b text-center">
        {order.order_id}
      </p>
    );
  });

  const quantity = orders.map((order, index) => {
    return (
      <p key={index} className="border-b text-center">
        {order.quantity}
      </p>
    );
  });

  const productIds = orders.map((order, index) => {
    return (
      <p key={index} className="border-b text-center">
        {order.product_id}
      </p>
    );
  });

  const userIds = orders.map((order, index) => {
    return (
      <p key={index} className="border-b text-center">
        {order.user_id}
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
            <div className="text-xl border-l">{orderIds}</div>
          </div>
        </td>
        <td className="py-3 text-left">
          <div className=" w-96">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                QUANTITY
              </h3>
            </div>
            <div className="text-xl border-l ">{quantity}</div>
          </div>
        </td>
        <td className="py-3 text-left">
          <div className="w-32">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                PRODUCT ID
              </h3>
            </div>
            <div className="text-xl border-l">{productIds}</div>
          </div>
        </td>
        <td className="py-3 text-left">
          <div className="w-40">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                USER ID
              </h3>
            </div>
            <div className="text-xl border-l border-r">{userIds}</div>
          </div>
        </td>
      </tr>
    </div>
  );
}

export default Order;
