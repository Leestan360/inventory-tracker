import React from "react";
import InventoryTracker from "./components/InventoryTracker";
import SideBar from "./components/SideBar";

function App() {
  return (
  <div className="flex">
    <SideBar />
    <InventoryTracker />
  </div>)
}

export default App;