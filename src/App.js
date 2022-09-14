import React from "react";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Users from "./components/Users";

function App() {
  return (
  <div className="text-red-500">
    <Users />
    <Products />
    <Orders />
  </div>)
}

export default App;