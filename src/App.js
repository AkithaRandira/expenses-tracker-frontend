import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router,Route} from "react-router-dom";
import "./styles.css";
import Footer from "./components/Footer";
import AddIncome from "./components/AddIncome";
import AddExpense from "./components/AddExpense";


export default function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Route path="/" exact component={Home}/>
      <Route path="/addincome" exact component={AddIncome}/>
      <Route path="/addexpense" exact component={AddExpense}/>
      <Footer/>
      </div>
    </Router>
  );
}
