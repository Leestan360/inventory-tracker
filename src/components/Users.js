import React, { useEffect, useState } from "react";

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

  return (<div></div>)
};

export default Users;