import React from "react";

function Order({ orders }) {
  return (
    <div>
      {orders.map((order) => {
        return (
          <div key={order.order_id}>
            <p>Product Id: {order.product_id}</p>
            <p>Quantity: {order.quantity}</p>
            <p>User Id: {order.user_id}</p>
            <p>Order Date: {order.order_date}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Order;
