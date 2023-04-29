import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold">Welcome to home page.</h1>
    </div>
  );
};

export default Home;
