import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      link: "/about",
      title: "About",
    },
    {
      link: "/contact",
      title: "Contact Us",
    },
    {
      link: "/guide",
      title: "Guide",
    },
    {
      link: "/login",
      title: "Log In",
    },
  ];
  return (
    <div className="flex items-center justify-between p-3 ">
      <Link to="/">
        <img
          src="/finta-logo-light.svg"
          alt="Finta Logo"
          height={65}
          width={65}
        />
      </Link>
      <div className="flex items-center gap-4">
        {links.map((link, index) => (
          <Link to={link.link} key={index} className="text-sm cursor-pointer text-neutral-800 font-medium hover:text-neutral-500 transition duration-200">
            {link.title}
          </Link>
        ))}
        <button className="bg-[#2579f4] px-4 text-white text-sm font-medium text-shadow-lg py-2 rounded-lg shadow-xl  hover:cursor-pointer transition duration-200 hover:text-neutral-200">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
