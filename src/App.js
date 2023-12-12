import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Routes/login";
import Signup from "./Routes/authSignup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
