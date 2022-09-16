import React from "react";

function User({ users }) {
  return (
    <div className="m-2 text-xl p-2  grid gap-3 grid-cols-4 grid-rows-3 mx-10 my-6">
      {users.map((user) => {
        return (
          <div
            key={user.user_id}
            className="border-2 rounded-lg p-2 my-2 border-blue-400 shadow-xl"
          >
            <p>Name: {user.name}</p>
            <div className="flex justify-between mt-2">
              <button className="border-2 hover:border-blue-400 rounded-lg hover:bg-blue-400 px-2">
                Products
              </button>
              <button className="border-2 hover:border-blue-400 rounded-lg hover:bg-blue-400 px-2">
                Orders
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default User;
