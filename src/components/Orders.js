import React, { useEffect, useState } from "react";
import SingleOrder from "./SingleOrder";

function Orders() {

   const [orders, setOrders] = useState([]);

   useEffect(() => {
    fetch("https://assessment.api.vweb.app/orders")
    .then(res => res.json())
    .then((orders) => {
      setOrders(orders);
    })
   }, [])

   const order = orders.map(order => (
    <SingleOrder key={order.order_id} order={order} />
   ))

   return (<div>{order}</div>)
};

export default Orders;