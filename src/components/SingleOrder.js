import React from "react";

function SingleOrder({ order }) {

  return (
  <div>
    <p>{order.product_id}</p>
    <p>{order.quantity}</p>
    <p>{order.user_id}</p>
    <p>{order.order_date}</p>
  </div>
  )
};

export default SingleOrder;