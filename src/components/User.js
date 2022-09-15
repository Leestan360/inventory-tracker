import React from "react";

function User({ users }) {
  // const user = users.map((user) =>  key={user.user_id} user={user} );

  return (
    <div className="border-2 rounded-sm m-2 text-xl p-2 cursor-pointer">
      {users.map((user) => {
        return (
          <div key={user.user_id} className="border-2 my-2 grid gap-3">
            <p>Name: {user.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default User;
