import React from "react";

function Dashboard({ users, products, orders, queryUser }) {
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
    <div className="flex mt-40 ml-32">
      {/* <div className="">
        <input type="search" value="search" className="border-2 mx-2" />
        <input type="search" value="search" className="border-2 " />
        <input type="search" value="search" className="border-2 mx-2" />
      </div> */}
        <div className="border-2 border-blue-300 w-52 mr-10 rounded-lg">
          <h1 className="text-center text-xl">Users</h1>
          <h3 className="text-center">Number of Users: {userIds.length}</h3>
        </div>
        <div className="border-2 border-blue-300 rounded-lg w-52 mr-10">
          <h1 className="text-center text-xl">Products</h1>
          <h3 className="text-center">Total Stock: {totals(stockArr)}</h3>
          <h3 className="text-center">Total Selling Price: {totals(priceArr)}</h3>
        </div>
        <div className="border-2 border-blue-300 w-52 rounded-lg">
          <h1 className="text-center text-xl" >Orders</h1>
          <h3 className="text-center">Total Quantity Ordered: {totals(quantityArr)}</h3>
        </div>
    </div>
  );
}

export default Dashboard;
