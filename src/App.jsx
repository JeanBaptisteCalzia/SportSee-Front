import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/";
import SideBar from "./components/SideBar/";
import Error from "./components/Error/";
import Home from "./pages/Home/";
import User from "./pages/User/";
import Settings from "./pages/Settings/";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <div className="wrapper">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
