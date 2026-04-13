import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="shadow">
        <div className="flex justify-between gap-4 items-center py-2 container mx-auto">
          <img src={logoImg} alt="logo" className="w-12" />
          <ul className="flex justify-between gap-2 items-center">
            <li>
              <NavLink
                to={"/"}
                className={(obj) => {
                  console.log(obj.isActive);
                  // return    `${isActive ? "bg-red-500" : "bg-yellow-500"
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/apps"}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={"/installedApps"}>Installation</NavLink>
            </li>
          </ul>
          <button className="btn bg-purple-500 text-white">
            <FaGithub />
            Contribute
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
