import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="shadow">
        <div className="flex justify-between gap-4 items-center py-2 container mx-auto">
          <img src={logoImg} alt="logo" className="w-20" />
          <ul className="flex justify-between gap-2 items-center">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Apps</Link>
            </li>
            <li>
              <Link>Installation</Link>
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
