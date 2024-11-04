import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApiProvider, UserProvider } from "./utils/Context/";
import Header from "./components/Header/";
import SideBar from "./components/SideBar/";
import Error from "./components/Error/";
import Home from "./pages/Home/";
import User from "./pages/User/";
import Settings from "./pages/Settings/";
import Social from "./pages/Social/";
import "./App.scss";

function App() {
  return (
    <Router>
      <ApiProvider>
        <UserProvider>
          <Header />
          <div className="wrapper">
            <SideBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/social" element={<Social />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </UserProvider>
      </ApiProvider>
    </Router>
  );
}

export default App;
