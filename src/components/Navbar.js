import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-lg flex  justify-between">
      <h2 className="text-2xl font-bold">Sahil</h2>
      <ul className="w-80 flex justify-between  ">
        <li className="hover:text-slate-600 transition">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-slate-600 transition">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="hover:text-slate-600 transition">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="hover:text-slate-600 transition">
          <NavLink to="/connect">Connect</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
