import React, { useEffect, useState } from "react";

function InventoryTracker() {

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const urls = [
      "https://assessment.api.vweb.app/users",
      "https://assessment.api.vweb.app/products",
      "https://assessment.api.vweb.app/orders",
    ];
    Promise.all(urls.map((url) => fetch(url).then((r) => r.json())))
      .then(([users, products, orders]) => {
        setUsers(users);
        setProducts(products);
        setOrders(orders);
      })
      .catch((error) => console.log(error));
  }, []);

  return <div></div>;
}

export default InventoryTracker;
