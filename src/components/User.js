import _ from "lodash";
import React from "react";

function User({ users }) {
  const userIds = users.map((user, index) => {
    return (
      <p
        key={index}
        className="border-b border-l border-gray-300 hover:bg-gray-100 pl-3"
      >
        {user.user_id}
      </p>
    );
  });

  const userNames = users.map((user) => {
    return (
      <p
        key={user.user_id}
        className="border-b border-l border-gray-300 hover:bg-gray-100"
      >
        {user.name}
      </p>
    );
  });

  const pageSize = 10;

  const pageCount = users ? Math.ceil(users.length / pageSize) : 0;

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  const actionBtnArr = [
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
    { btn: "VIEW" },
  ];

  const actionBtn = actionBtnArr.map((actionbtn, index) => {
    return (
      <p
        key={index}
        className="border-b border-l border-r w-32 bg-blue-300 border-gray-300 hover:bg-gray-100"
      >
        {actionbtn.btn}
      </p>
    );
  });

  return (
    <>
      <tr className="">
        <td className="py-3 text-left">
          <div className=" w-16 ml-20 pl-2 pt-10">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                ID
              </h3>
            </div>
            <div className="text-xl">{userIds}</div>
          </div>
        </td>
        <td className="py-3 text-left">
          <div className=" w-96">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                NAME
              </h3>
            </div>
            <div className="text-xl">{userNames}</div>
          </div>
        </td>
        <td className="py-3 text-left">
          <div className="w-32">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                PRODUCTS
              </h3>
            </div>
            <span></span>
          </div>
        </td>
        <td className="py-3 text-left">
          <div className="w-32">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                ORDERS
              </h3>
            </div>
            <span></span>
          </div>
        </td>
        <td className="py-3 text-left">
          <div className="w-32">
            <div className="bg-blue-500">
              <h3 className="text-center border-l border-gray-300 px-2 py-1">
                ACTION
              </h3>
            </div>
            <button className="text-xl">{actionBtn}</button>
          </div>
        </td>
      </tr>
      <nav className="flex justify-content-center">
        {pages.map((page) => (
          <li>{page}</li>
        ))}
      </nav>
    </>
  );
}

export default User;
