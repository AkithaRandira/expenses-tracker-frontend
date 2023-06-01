import "./DashBoard.css";
import NavbarAfterLogin from "./NavbarAfterLogin";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorDisplayMessage from "../components/ErrorDisplayMessage";
import Loading from "../components/Loading";
import { fetchAccountStatsAction } from "../redux/slices/accountStatistics/accountStatSlices";

export default function UpdateUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAccountStatsAction());
  }, [dispatch]);

  const account = useSelector((state) => state.account);
  const { loading, appError, serverError, accountDetails } = account;

  return (
    <div className="Content">
      <NavbarAfterLogin />
      <button class="updatebtn">Edit profile</button>
      <div className="dashboard">
        <div className="DashboardItems1">
          <span className="mainTitle">EXPENSES</span>
          <div className="Container">
            <br></br>
            <span className="title">Total Expense</span>
            <h2>{accountDetails?.expenseStats[0].totalExpense}</h2>
            <br></br> <span className="title">Number of Transactions</span>
            <h2>{accountDetails?.expenseStats[0].totalRecordsExpense}</h2>
            <br></br> <span className="title">Minimum Transaction</span>
            <h2>{accountDetails?.expenseStats[0].minExpense}</h2>
            <br></br> <span className="title">Maximum Transaction</span>
            <h2>{accountDetails?.expenseStats[0].maxExpense}</h2>
            <br></br> <span className="title">Average</span>
            <h2>{accountDetails?.expenseStats[0].averageExpense}</h2>
          </div>
          <br></br>
          <a type="button" class="button01" href="/expense-list"> View Expenses history </a>
        </div>
        <div className="DashboardItems2">
          <span className="mainTitle">INCOME</span>
          <div className="Container">
            <br></br>
            <span className="title">Total Income</span>
            <h2>{accountDetails?.incomeStats[0].totalIncome}</h2>
            <br></br> <span className="title">Number of Transactions</span>
            <h2>{accountDetails?.incomeStats[0].totalRecordsIncome}</h2>
            <br></br> <span className="title">Minimum Transaction</span>
            <h2>{accountDetails?.incomeStats[0].minIncome}</h2>
            <br></br> <span className="title">Maximum Transaction</span>
            <h2>{accountDetails?.incomeStats[0].maxIncome}</h2>
            <br></br> <span className="title">Average</span>
            <h2>{accountDetails?.incomeStats[0].averageIncome}</h2>
          </div>
          <br></br>
          <a type="button" class="button02" href="/income-list">
            View Income history
          </a>
        </div>
      </div>
    </div>
  );
}
