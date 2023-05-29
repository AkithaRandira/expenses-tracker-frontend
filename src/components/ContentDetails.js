import React from "react";

export default function ContentDetails(item) {
  return (
    <>
      {console.log(item)}
      <tr>
        <th>
          {item?.user?.firstname} {item?.user?.lastname}
        </th>
        <td>{item?.title}</td>
        <td>{item?.description}</td>
        <td>{item?.amount}</td>
        <td>{item?.createdAt}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    </>
  );
}
