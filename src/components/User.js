import React from "react";

function User({ users }) {

  return (
    <div className="m-2 text-xl p-2 cursor-pointer grid gap-3 grid-cols-4 grid-rows-3 mx-12 my-28">
      {users.map((user) => {
        return (
          <div key={user.user_id} className="border-2 rounded-lg p-2 my-2 border-blue-400 shadow-xl hover:bg-blue-400">
            <p>Name: {user.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default User;
