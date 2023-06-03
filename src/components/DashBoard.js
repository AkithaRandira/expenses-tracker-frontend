import "./DashBoard.css";
import NavbarAfterLogin from "./NavbarAfterLogin";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorDisplayMessage from "../components/ErrorDisplayMessage";
import Loading from "../components/Loading";
import { fetchAccountStatsAction } from "../redux/slices/accountStatistics/accountStatSlices";
import { GraphData } from "./GraphData";
import currencyFormatter from "../utils/currencyFormatter";
import { userProfileDashboardAction } from "../redux/slices/users/usersSlices";
import calculateTransactions from "../utils/accountStatistics";
import { useHistory } from "react-router-dom";

export default function UpdateUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileDashboardAction());
  }, [dispatch]);

  const history = useHistory();
  const account = useSelector((state) => state?.account);
  const { loading, appError, serverError, accountDetails } = account;

  const state = useSelector((state) => state?.users);
  const { profile } = state;

  //get income stats
  const incomeStats =
    profile?.incomes && calculateTransactions(profile?.incomes);

  //get expense stats
  const expenseStats =
    profile?.expenses && calculateTransactions(profile?.expenses);

  return (
    <>
      {loading ? (
        <Loading />
      ) : appError || serverError ? (
        <ErrorDisplayMessage>
          {serverError} {appError}
        </ErrorDisplayMessage>
      ) : (
        <section>
          <div className="Content">
            <NavbarAfterLogin />

            <GraphData
              income={incomeStats?.sumTotal}
              expense={expenseStats?.sumTotal}
            />
            <div className="dashboard">
              <div className="DashboardItems1">
                <span className="mainTitle">EXPENSES</span>
                <div className="Container">
                  <br></br>
                  <span className="title">Total Expense</span>
                  <h2>{currencyFormatter("usd", expenseStats?.sumTotal)}</h2>
                  <br></br>{" "}
                  <span className="title">Number of Transactions</span>
                  <h2>{profile?.expenses?.length}</h2>
                  <br></br> <span className="title">Minimum Transaction</span>
                  <h2>{currencyFormatter("usd", expenseStats?.min)}</h2>
                  <br></br> <span className="title">Maximum Transaction</span>
                  <h2>{currencyFormatter("usd", expenseStats?.max)}</h2>
                  <br></br> <span className="title">Average</span>
                  <h2>{currencyFormatter("usd", expenseStats?.average)}</h2>
                </div>
                <br></br>
                <button
                  type="button"
                  class="button01"
                  onClick={() => history.push("/expense-list")}
                >
                  View Expense history
                </button>
              </div>
              <div className="DashboardItems2">
                <span className="mainTitle">INCOME</span>
                <div className="Container">
                  <br></br>
                  <span className="title">Total Income</span>
                  <h2>{currencyFormatter("usd", incomeStats?.sumTotal)}</h2>
                  <br></br>{" "}
                  <span className="title">Number of Transactions</span>
                  <h2>{profile?.incomes?.length}</h2>
                  <br></br> <span className="title">Minimum Transaction</span>
                  <h2>{currencyFormatter("usd", incomeStats?.min)}</h2>
                  <br></br> <span className="title">Maximum Transaction</span>
                  <h2>{currencyFormatter("usd", incomeStats?.max)}</h2>
                  <br></br> <span className="title">Average</span>
                  <h2>{currencyFormatter("usd", incomeStats?.average)}</h2>
                </div>
                <br></br>
                <button
                  type="button"
                  class="button02"
                  onClick={() => history.push("/income-list")}
                >
                  View Income history
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
