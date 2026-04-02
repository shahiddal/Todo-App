import React from "react";

function Navbar() {
  return (
    <nav
      className="flex flex-col md:flex-row justify-between sticky top-0
     items-center bg-slate-700 text-white py-3 px-10  shadow-md"
    >
      <div className="logo">
        <span className="font-bold text-xl cursor-pointer hover:bg-slate-900 px-4 py-2 rounded-full transition-all">
          iTask
        </span>
      </div>

      <ul className="flex gap-6 mt-2 md:mt-0">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>

        <li className="cursor-pointer hover:font-bold transition-all">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
