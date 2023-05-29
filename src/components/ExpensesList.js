import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllExpenseAction } from "../redux/slices/expenses/expensesSlices";
import { Link } from "react-router-dom";
import NavbarAfterLogin from "./NavbarAfterLogin";
import ContentDetails from "./ContentDetails";

export default function ExpensesList() {
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllExpenseAction(1));
  }, [dispatch]);

  //get all expenses
  const allExpenses = useSelector((state) => state?.expenses);
  const { loading, appError, serverError, expensesList } = allExpenses;

  return (
    <div>
      <NavbarAfterLogin />

      <h6>Recent Expense transactions</h6>
      <p>Below is the history of your expense transactions records</p>
      <Link to="/addexpense" className="btn btn-primary">
        New Expense
      </Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Withdrawed By</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <h1>loading</h1>
          ) : appError || serverError ? (
            <div>Error</div>
          ) : expensesList?.docs?.length <= 0 ? (
            <h1>No Expenses Found</h1>
          ) : (
            expensesList?.docs?.map((expense) => {
              return <ContentDetails key={expense?._id} {...expense} />;
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
