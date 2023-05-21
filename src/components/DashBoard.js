import React from "react";
import "./DashBoard.css";

export default function UpdateUser() {
  return (
    <div className="Content">
      <button class="updatebtn">Edit profile</button>
      <div className="dashboard">
        <div className="DashboardItems1">
          <span className="mainTitle">EXPENSES</span>
          <div className="Container">
            <br></br>
            <span className="title">Number of Transactions</span>
            <br></br> <span className="title">Minimum Transaction</span>
            <br></br> <span className="title">Maximum Transaction</span>
            <br></br> <span className="title">Average</span>
          </div>
          <br></br>
          <button class="button01"> View Expenses history </button>
        </div>
        <div className="DashboardItems2">
          <span className="mainTitle">INCOME</span>
          <div className="Container">
            <br></br>
            <span className="title">Number of Transactions</span>
            <br></br> <span className="title">Minimum Transaction</span>
            <br></br>
            <span className="title">Maximum Transaction</span>
            <br></br> <span className="title">Average</span>
          </div>
          <br></br>
          <button class="button02"> View Income history </button>
        </div>
      </div>
    </div>
  );
}
