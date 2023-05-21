import React from "react";
import "./SignUpStyles.css";

export default function SignUp() {
  return (
    <div className="signin">
      <div className="container">
        <div className="form-box">
          <h1 id="title">Sign Up</h1>
          <form>
            <div className="input-group">
              <div className="input-field" id="nameField">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="First Name" />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Last Name" />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
            </div>

            <div className="btn-field">
              <button type="button" id="signupBtn">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
