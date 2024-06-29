import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "../components/User";
import UserDetails from "../components/UserDetails";
import Home from "../components/Home";

function Routing() {
  return (
    <Routes>
      <Route path="/User" element={<User/>} ></Route>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/User/:name" element={<UserDetails/>} ></Route>
    </Routes>
  );
}

export default Routing;
