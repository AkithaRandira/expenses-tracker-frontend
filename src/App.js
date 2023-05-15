import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./styles.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}
