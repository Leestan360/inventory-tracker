import React from "react";

function Dashboard({ users, products, orders }) {
  const userIds = users.map((user) => {
    return user.user_id;
  });

  const stockArr = products.map((product) => {
    return product.stock;
  });

  const priceArr = products.map((product) => {
    return product.selling_price;
  });

  const quantityArr = orders.map((order) => {
    return order.quantity;
  });

  function totals(inventory) {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
      total += inventory[i];
    }
    return total;
  }

  return (
    <div>
      <div className="">
        <input type="search" value="search" className="border-2 mx-2" />
        <input type="search" value="search" className="border-2 " />
        <input type="search" value="search" className="border-2 mx-2" />
      </div>
      <div>
        <div>
          <h1>Users</h1>
          <h3>Number of Users: {userIds.length}</h3>
        </div>
        <div>
          <h1>Products</h1>
          <h3>Total Stock: {totals(stockArr)}</h3>
          <h3>Total Selling Price: {totals(priceArr)}</h3>
        </div>
        <div>
          <h1>Orders</h1>
          <h3>Total Quantity Ordered: {totals(quantityArr)}</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
