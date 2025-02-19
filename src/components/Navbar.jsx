import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/dg.jpg";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiGithub, FiInstagram } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            src={logo}
            alt="logo"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-lg font-medium text-gray-300">
          {[
            { to: "/", text: "Home" },
            { to: "/about", text: "About" },
            { to: "/technologies", text: "Technologies" },
            { to: "/projects", text: "Projects" },
            { to: "/blog", text: "Blog" },
            { to: "/contact", text: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full hover:text-cyan-300"
            >
              {item.text}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-2xl text-gray-400">
          {[
            { href: "https://x.com/Damonthinks158", icon: <FaXTwitter /> },
            { href: "https://github.com/dhruvitgarathiya", icon: <FiGithub /> },
            {
              href: "https://www.instagram.com/dhruvit.158",
              icon: <FiInstagram />,
            },
            {
              href: "https://www.linkedin.com/in/dhruvit-garathiya/",
              icon: <FaLinkedinIn />,
            },
            {
              href: "https://leetcode.com/u/dhruvit158/",
              icon: <SiLeetcode />,
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors duration-300 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
