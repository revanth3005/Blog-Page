import "./App.css";
import Home from "./Components/Home";
import Verify from "./Components/Verify";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Register from "./Components/Register";
import Thankyou from "./Components/Thankyou";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Product from "./Components/Product";
import Photos from "./Components/Photos";
import PrivateRote from "./Components/PrivateRote";

function App() {
  return (
    <div>
      <LandingPage />
      <Routes>
        <Route element={<PrivateRote />}>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Photos" element={<Photos />} />
        </Route>

        <Route path="/Verify" element={<Verify />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Thankyou" element={<Thankyou />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
