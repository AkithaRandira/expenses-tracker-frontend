import React from "react";
import "./SignUpStyles.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerUserAction } from "../redux/slices/users/usersSlices";

//form validation
const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
});

export default function SignUp() {
  //dispatch
  const dispatch = useDispatch();

  //formik form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
    onSubmit: (values) => {
      dispatch(registerUserAction(values));
    },
    validationSchema: formSchema,
  });

  return (
    <div className="signin">
      <div className="container">
        <div className="form-box">
          <h1 id="title">Sign Up</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="input-group">
              <div className="input-field" id="nameField">
                <i className="fa-solid fa-user"></i>
                <input
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div>{formik.touched.firstname && formik.errors.firstname}</div>

              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div>{formik.touched.lastname && formik.errors.lastname}</div>

              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>{formik.touched.email && formik.errors.email}</div>

              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  type="password"
                  placeholder="Password"
                  minLength={8}
                />
              </div>
              <div>{formik.touched.password && formik.errors.password}</div>
            </div>

            <div className="btn-field">
              <button type="submit" id="signupBtn">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
