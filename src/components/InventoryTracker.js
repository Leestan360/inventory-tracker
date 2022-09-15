import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Order from "./Order";
import Product from "./Product";
import User from "./User";

function InventoryTracker() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

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


  

  return (
    <div>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard users={users} products={products} orders={orders} />} />
        <Route exact path="/users" element={<User users={users} />} />
        <Route
          exact
          path="/products"
          element={<Product products={products} />}
        />
        <Route exact path="/orders" element={<Order orders={orders} />} />
      </Routes>
    </div>
  );
}

export default InventoryTracker;
