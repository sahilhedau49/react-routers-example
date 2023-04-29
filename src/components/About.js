import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1 className="my-8 text-2xl font-bold">Welcome to about page.</h1>
      <button
        onClick={() => gotohome()}
        className="px-4 py-2 border-2 rounded-2xl border-cyan-600"
      >
        Go To Home Page
      </button>
    </div>
  );
};

export default About;
