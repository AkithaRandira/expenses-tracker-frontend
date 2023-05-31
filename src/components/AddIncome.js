import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddExpenseStyles.css";
import NavbarAfterLogin from "./NavbarAfterLogin";
import { useDispatch, useSelector } from "react-redux";
import { createIncomeAction } from "../redux/slices/incomes/incomesSlices";

//form validation
const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  amount: Yup.number().required("Amount is required"),
});

export default function AddIncome() {
  //dispatch
  const dispatch = useDispatch();

  //formik form
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      amount: "",
    },
    onSubmit: (values) => {
      dispatch(createIncomeAction(values));
    },
    validationSchema: formSchema,
  });

  return (
    <div>
      <NavbarAfterLogin />
      <div className="box">
        <form onSubmit={formik.handleSubmit} className="expensebox">
          <br />
          <h5>Income</h5>
          <br />
          <b>
            <h4>Record New Income</h4>
          </b>

          <br />
          <input
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
            class="title"
            placeholder="Enter Title"
          />
          <div>{formik.touched.title && formik.errors.title}</div>
          <br />

          <input
            type="text"
            value={formik.values.description}
            onChange={formik.handleChange("description")}
            onBlur={formik.handleBlur("description")}
            class="title"
            placeholder="Enter Description"
          />
          <div>{formik.touched.description && formik.errors.description}</div>
          <br />

          <input
            type="number"
            value={formik.values.amount}
            onChange={formik.handleChange("amount")}
            onBlur={formik.handleBlur("amount")}
            class="title"
            placeholder="Enter Amount"
          />
          <div>{formik.touched.amount && formik.errors.amount}</div>
          <br />

          <button type="submit" class="btn">
            Record Income
          </button>
        </form>
      </div>
    </div>
  );
}
