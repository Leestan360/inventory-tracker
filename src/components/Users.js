import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://assessment.api.vweb.app/users")
    .then(res => res.json())
    .then((users) => {
      setUsers(users);
      console.log(users)
    })
  }, [])

  const user = users.map(user => (
    <SingleUser key={user.user_id} user={user} />
  ))

  return (<div>{user}</div>)
};

export default Users;