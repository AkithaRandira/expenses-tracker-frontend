import Home from "./Home";
import "./NavbarStyles.css";
import "./SignIn";
import SignIn from "./SignIn";
import "./SignUp";
import SignUp from "./SignUp";

function NavbarAfterLogin() {
  return (
    <>
      <nav>
        <div>
          <ul id="navbar">
            <div class="button-container">
              <a href="/expenselist">Expense List</a>
              <a href="/incomelist">Income List</a>
              <a href="/dashboard" class="signup-button">
                DashBoard
              </a>
              <a href="/profile" class="signup-button">
                Profile
              </a>
            </div>
          </ul>
        </div>

        <div>
          <ul id="navbar">
            <div class="button-container">
              <a href="/addexpense" class="signin-button">
                New Expense
              </a>
              <a href="/addincome" class="signin-button">
                New Income
              </a>
              <a href="/" class="signup-button">
                Logout
              </a>
            </div>
          </ul>
        </div>

        <div id="mobile">
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </div>
      </nav>
    </>
  );
}

export default NavbarAfterLogin;
