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
  const [searchTerm, setSearchTerm] = useState("");

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
        // setPaginatedUsers(_(users).slice(0).take(pageSize).value())
      })
      .catch((error) => console.log(error));
  }, []);

  const queryUser = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.user_id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Dashboard
              users={users}
              products={products}
              orders={orders}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          exact
          path="/users"
          element={<User users={users} queryUser={queryUser} />}
        />
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
