import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/";
import SideBar from "./components/SideBar/";
import Error from "./components/Error/";
import Home from "./pages/Home/";
import User from "./pages/User/";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
