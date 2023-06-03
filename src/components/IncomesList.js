import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllExpenseAction } from "../redux/slices/expenses/expensesSlices";
import { Link } from "react-router-dom";
import NavbarAfterLogin from "./NavbarAfterLogin";
import ContentDetails from "./ContentDetails";
import AppPagination from "./AppPagination";
import Loading from "./Loading";
import ErrorDisplayMessage from "./ErrorDisplayMessage";
import { fetchAllIncomeAction } from "../redux/slices/incomes/incomesSlices";

export default function IncomesList() {
  //dispatch
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  //get all expenses
  const allIncomes = useSelector((state) => state?.incomes);
  const { loading, appError, serverError, incomesList } = allIncomes;

  useEffect(() => {
    dispatch(fetchAllIncomeAction(+page));
  }, [dispatch, page, setPage]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : appError || serverError ? (
        <ErrorDisplayMessage>
          {serverError} {appError}
        </ErrorDisplayMessage>
      ) : (
        <div>
          <NavbarAfterLogin />

          <h6>Recent Incomes transactions</h6>
          <p>Below is the history of your income transactions records</p>
          <Link to="/add-expense" className="btn btn-primary">
            New Income
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
              ) : incomesList?.docs?.length <= 0 ? (
                <h1>No Expenses Found</h1>
              ) : (
                incomesList?.docs?.map((expense) => {
                  return <ContentDetails key={expense?._id} {...expense} />;
                })
              )}
            </tbody>
          </table>

          <AppPagination
            setPage={setPage}
            pageNumber={incomesList?.totalPages}
          />
        </div>
      )}
    </div>
  );
}
