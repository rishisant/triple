import React from "react";
import ReactDOM from "react-dom";

import Home from "./Home";
import Create from "./Create";

import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter } from "react-router-dom";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;