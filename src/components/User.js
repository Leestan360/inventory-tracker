import React from "react";

function User({ users }) {

  return (
    <div className="m-2 text-xl p-2  grid gap-3 grid-cols-4 grid-rows-3 mx-12 my-14">
      {users.map((user) => {
        return (
          <div key={user.user_id} className="border-2 rounded-lg p-2 my-2 border-blue-400 shadow-xl">
            <p className="text-xl">Name: {user.name}</p>
            <div>
              <button>Products</button>
              <button>Orders</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default User;


// hover:bg-blue-400