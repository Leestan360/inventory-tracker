import React from "react";

function Dashboard({ users, products, orders }) {

  const userIds = users.map((user) => {
    return user.user_id}
  )

  return (
    <div>
      <div className="">
        <input type="search" value="search" className="border-2 mx-2"/>
        <input type="search" value="search" className="border-2 "/>
        <input type="search" value="search" className="border-2 mx-2"/>
      </div>
      <div>
        <h1>Number of Users: {userIds.length}</h1>
      </div>
    </div>
  )
}

export default Dashboard;