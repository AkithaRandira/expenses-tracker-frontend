import React from "react";
import { useHistory } from "react-router-dom";
import currencyFormatter from "../utils/currencyFormatter";
import dateFormatter from "../utils/dateFormatter";

export default function ContentDetails(item) {
  const history = useHistory();
  return (
    <>
      <tr>
        <th>
          {item?.user?.firstname} {item?.user?.lastname}
        </th>
        <td>{item?.title}</td>
        <td>{item?.description}</td>
        <td>{currencyFormatter("usd", item?.amount)}</td>
        <td>{item?.createdAt && dateFormatter(item?.createdAt)}</td>
        <td>
          <button
            onClick={() =>
              history.push({
                pathname: `/edit`,
                state: { item },
              })
            }
            className="btn"
          >
            Update
          </button>
        </td>
      </tr>
    </>
  );
}
