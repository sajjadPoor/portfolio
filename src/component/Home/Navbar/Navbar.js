import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  bg-neutral">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2  bg-neutral   rounded-box w-52"
            >
              <li className="text-white">Home</li>
            </ul>
          </div>
          <p className="btn btn-ghost text-white normal-case text-xl">Sazzad</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-28">
            <li className="text-white">Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
