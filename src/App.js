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
import EditExpense from "./components/EditExpense";


export default function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/update-user" exact component={UpdateUser} />
        <Route path="/dashboard" exact component={DashBoard} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <ProtectedRoute path="/expense-list" exact component={ExpensesList} />
        <ProtectedRoute path="/edit-expense" exact component={EditExpense} />
        <ProtectedRoute path="/add-income" exact component={AddIncome} />
        <ProtectedRoute path="/add-expense" exact component={AddExpense} />
        <Footer />
      </div>
    </Router>
  );
}
