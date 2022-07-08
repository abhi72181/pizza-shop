import "./App.css";
import Navbar from "./components/Navbar";
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
     <Navbar />

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
     </Routes>

    </>
  );
}

export default App;
