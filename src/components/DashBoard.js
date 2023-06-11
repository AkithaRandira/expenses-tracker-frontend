import "./DashBoard.css";
//  import NavbarAfterLogin from "./NavbarAfterLogin";
import NavBarDashboard from "./NavBarDashboard";
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
            <NavBarDashboard />

            <div class="grid-container">
              <div class="grid-item">
                <GraphData
                  income={incomeStats?.sumTotal}
                  expense={expenseStats?.sumTotal}
                />
              </div>
              <div class="grid-item">
                <div className="DashboardItems1">
                  <span className="mainTitle">EXPENSES</span>
                  <div className="Container">
                    <br></br>
                    <span className="titles">Total Expense:</span>
                    <h4>{currencyFormatter("usd", expenseStats?.sumTotal)}</h4>
                    <br></br>{" "}
                    <span className="titles">Number of Transactions:</span>
                    <h4>{profile?.expenses?.length}</h4>
                    <br></br>{" "}
                    <span className="titles">Minimum Transaction:</span>
                    <h4>{currencyFormatter("usd", expenseStats?.min)}</h4>
                    <br></br>{" "}
                    <span className="titles">Maximum Transaction:</span>
                    <h4>{currencyFormatter("usd", expenseStats?.max)}</h4>
                    <br></br> <span className="titles">Average:</span>
                    <h4>{currencyFormatter("usd", expenseStats?.average)}</h4>
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
              </div>
              <div class="grid-item">
                <div className="DashboardItems2">
                  <span className="mainTitle">INCOME</span>
                  <div className="Container">
                    <br></br>
                    <span className="titles">Total Income:</span>
                    <h4>{currencyFormatter("usd", incomeStats?.sumTotal)}</h4>
                    <br></br>{" "}
                    <span className="titles">Number of Transactions:</span>
                    <h4>{profile?.incomes?.length}</h4>
                    <br></br>{" "}
                    <span className="titles">Minimum Transaction:</span>
                    <h4>
                      {currencyFormatter(
                        "usd",
                        incomeStats?.min == Infinity ? 0 : incomeStats?.min
                      )}
                      {/* if infinty is equals then its 0 or else the current value*/}
                    </h4>
                    <br></br>{" "}
                    <span className="titles">Maximum Transaction:</span>
                    <h4>{currencyFormatter("usd", incomeStats?.max)}</h4>
                    <br></br> <span className="titles">Average:</span>
                    <h4>{currencyFormatter("usd", incomeStats?.average)}</h4>
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
          </div>
        </section>
      )}
    </>
  );
}
