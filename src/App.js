import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import UpdateUser from "./components/UpdateUser";
import DashBoard from "./components/DashBoard";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AddIncome from "./components/AddIncome";
import AddExpense from "./components/AddExpense";
import ProtectedRoute from "./components/Navigation/ProtectedRoute";
import ExpensesList from "./components/ExpensesList";

export default function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/updateuser" exact component={UpdateUser} />
        <Route path="/dashboard" exact component={DashBoard} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <ProtectedRoute path="/expenselist" exact component={ExpensesList} />
        <ProtectedRoute path="/addincome" exact component={AddIncome} />
        <ProtectedRoute path="/addexpense" exact component={AddExpense} />
        <Footer />
      </div>
    </Router>
  );
}
