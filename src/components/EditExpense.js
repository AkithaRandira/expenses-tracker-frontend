import React from "react";
import "./AddExpenseStyles.css";
import NavbarAfterLogin from "./NavbarAfterLogin";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateExpenseAction } from "../redux/slices/expenses/expensesSlices";
import DisabledButton from "./DisabledButton";

//form validation
const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  amount: Yup.number().required("Amount is required"),
});

export default function EditExpense() {
  //accessing state to get expense details
  const location = useLocation();
  const { expense } = location.state;

  //dispatch
  const dispatch = useDispatch();

  //formik form
  const formik = useFormik({
    initialValues: {
      title: expense?.title,
      description: expense?.description,
      amount: expense?.amount,
    },
    onSubmit: (values) => {
      const data = {
        ...values,
        id: expense?._id,
      };

      dispatch(updateExpenseAction(data));
    },
    validationSchema: formSchema,
  });

  //get data from store
  const expenseFromStore = useSelector((state) => state?.expenses);
  const { appError, serverError, loading, expenseUpdated } = expenseFromStore;

  return (
    <div>
      <NavbarAfterLogin />
      <div className="box">
        <form className="incomebox" onSubmit={formik.handleSubmit}>
          <br />
          <h5>Expense</h5>
          {/* Displaying Error */}
          {appError || serverError ? <div>Error</div> : null}
          <br />
          <b>
            <h4>Update an existing expense</h4>
          </b>

          <br />
          <input
            value={formik.values.title}
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
            type="text"
            class="title"
            placeholder="Enter Title"
          />

          <div>{formik.touched.title && formik.errors.title}</div>

          <input
            value={formik.values.description}
            onChange={formik.handleChange("description")}
            onBlur={formik.handleBlur("description")}
            type="text"
            class="description"
            placeholder="Enter Description"
          />
          <div>{formik.touched.description && formik.errors.description}</div>

          <input
            value={formik.values.amount}
            onChange={formik.handleChange("amount")}
            onBlur={formik.handleBlur("amount")}
            type="text"
            class="amount"
            placeholder="Enter Amount"
          />
          <div>{formik.touched.amount && formik.errors.amount}</div>
          <br />

          <div className="btn-field">
            {loading ? (
              <DisabledButton />
            ) : (
              <button type="submit" id="btn">
                Update Expense
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
