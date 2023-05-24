import "./SignInStyles.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUserAction } from "../redux/slices/users/usersSlices";

//form validation
const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function SignIn() {
  //dispatch
  const dispatch = useDispatch();

  //formik form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginUserAction(values));
    },
    validationSchema: formSchema,
  });

  return (
    <div className="signin">
      <div className="container">
        <div className="form-box">
          <h1 id="title">Sign In</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="input-group">
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
                />
              </div>
              <div>{formik.touched.password && formik.errors.password}</div>
            </div>

            <div className="btn-field">
              <button type="submit" id="signinBtn">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
