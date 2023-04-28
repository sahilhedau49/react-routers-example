import React from "react";

const Home = () => {
  return (
    <div className="bg-red-500 min-h-screen px-12 py-12">
      <div className="text-lg flex w-full justify-between">
        <h2 className="font-bold">Logo</h2>
        <ul className="w-72 flex justify-between  ">
          <li className="hover:text-white transition">Home</li>
          <li className="hover:text-white transition">About</li>
          <li className="hover:text-white transition">Contact</li>
          <li className="hover:text-white transition">Connect</li>
        </ul>
      </div>
      <h1 className="my-8 text-2xl font-bold">Wellcome to home page.</h1>
    </div>
  );
};

export default Home;
