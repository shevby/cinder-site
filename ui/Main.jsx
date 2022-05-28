import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <Nav />
      <HashRouter>
        <Routes>
          <Route path="#home" element={Home} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Main;
