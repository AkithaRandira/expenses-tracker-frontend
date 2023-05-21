import React, { useEffect } from 'react';
import './SignInStyles.css';

export default function SignIn() {
  useEffect(() => {
    const signupBtn = document.getElementById("signupBtn");
    const signinBtn = document.getElementById("signinBtn");
    const nameField = document.getElementById("nameField");
    const title = document.getElementById("title");

    signinBtn.addEventListener("click", function () {
      nameField.style.maxHeight = "0";
      title.innerHTML = "Sign In";
      signupBtn.classList.add("disable");
      signinBtn.classList.remove("disable");
    });

    signupBtn.addEventListener("click", function () {
      nameField.style.maxHeight = "60px";
      title.innerHTML = "Sign Up";
      signupBtn.classList.remove("disable");
      signinBtn.classList.add("disable");
    });
  }, []);

  return (
    <>
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
                <button type="button" id="signupBtn">Sign up</button>
                <button type="button" id="signinBtn" className="disable">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
