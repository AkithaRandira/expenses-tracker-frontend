import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router,Route} from "react-router-dom"

import "./styles.css";
import Footer from "./components/Footer";
import UpdateUser from "./components/UpdateUser";
import DashBoard from "./components/DashBoard";

export default function App() {
  return (
    <Router>
    <div>
      <Navbar />
            <Route path="/" exact component={Home}/>
            <Route path="/UpdateUser" exact component={UpdateUser}/> 
            <Route path="/DashBoard" exact component={DashBoard}/>
      <Footer/>
    </div>
    </Router>
  ); 
}
