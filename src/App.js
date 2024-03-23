import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GloabalComponents/ThemeProvider";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import ProductDetails from './Pages/ProductDetails';
import Register from './Pages/Register';
import SignIn from "./Pages/SignIn";
import MyAccount from "./Pages/MyAccount";

function App() {
  const [theme] = useThemeHook();
  return (
    <main
      className={theme ? "bg-black" : "bg-light-2"}
      style={{ height: "100vh", width:'100%', overflowY: "auto" }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product-details/:productId' element={<ProductDetails />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/singIn' element={<SignIn/>}/>
        <Route path='/my-account' element={<MyAccount/>}/>
      </Routes>
    </main>
  );
}

export default App;
