import React, { useEffect, useState } from "react";

function Orders() {

   const [orders, setOrders] = useState([]);

   useEffect(() => {
    fetch("https://assessment.api.vweb.app/orders")
    .then(res => res.json())
    .then((orders) => {
      setOrders(orders);
      console.log(orders)
    })
   }, [])

   return (<div></div>)
};

export default Orders;