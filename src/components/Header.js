import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  return (
    <div className=" min-h-screen px-12 py-6 w-8/12 mx-auto">
      <Navbar />
      <button
        onClick={() => goback()}
        className="absolute top-5 right-10 px-4 py-2 border-2 rounded-2xl border-cyan-600"
      >
        Go Back
      </button>
      <Outlet />
    </div>
  );
};

export default Home;
