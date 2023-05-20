import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router , Route} from "react-router-dom"

import "./styles.css";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

export default function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Route path="/" exact component= {Home} />
      <Route path="/signup" exact component= {SignUp} />
      <Route path="/signin" exact component= {SignIn} />
      <Footer/>
      </div>
    </Router>
  );
}
