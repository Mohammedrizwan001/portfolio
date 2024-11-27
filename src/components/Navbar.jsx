import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className="fixed w-full h-[80px] flex items-center justify-between px-4 gap-2 bg-transparent md:backdrop-blur-lg z-10 md:shadow-black/40 shadow-sm md:text-white md:mix-blend-difference">
      {/* menu */}
      <ul
        className="hidden md:flex ml-auto space-x-6"
      >
        <li className="hover:scale-105 duration-300 cursor-pointer">
          <Link to="home" smooth={true} duration={300} offset={-40}>
            Home
          </Link>
        </li>
        <li className="hover:scale-105 duration-300 cursor-pointer">
          <Link to="about" smooth={true} duration={300} offset={-40}>
            About
          </Link>
        </li>
        <li className="hover:scale-105 duration-300 cursor-pointer">
          <Link to="testimonial" smooth={true} duration={300} offset={-40}>
            Testimonial
          </Link>
        </li>
        <li className="hover:scale-105 duration-300 cursor-pointer">
          <Link to="skills" smooth={true} duration={300} offset={-40}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-105 duration-300 cursor-pointer">
          <Link to="service" smooth={true} duration={300} offset={-40}>
            Services
          </Link>
        </li>
        <li className="hover:scale-105 duration-300 cursor-pointer">
          <Link to="achievements" smooth={true} duration={300} offset={-40}>
            Acheivements
          </Link>
        </li>
        <li className="hover:scale-105 duration-300 cursor-pointer">
          <Link to="contact" smooth={true} duration={300} offset={-40}>
            Contact
          </Link>
        </li>
      </ul>

      {/* mobile view */}

      <div onClick={handleClick} className="md:hidden z-10 ml-auto cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
        <i className="fas fa-bars"></i>
      </div>

      <ul
        className={`absolute top-20 left-1/2 -translate-x-1/2 rounded-lg w-[80%] h-[430px] backdrop-blur-lg bg-opacity-80 px-8 py-4 bg-white text-black shadow-md shadow-black/40 flex flex-col items-center transition-all duration-300 ease-in-out ${
          nav ? "block" : "hidden"
        }`}
      >
        <li className="py-3 text-2xl hover:text-[#0d67c5]">
          <Link onClick={handleClick} to="home" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5]">
          <Link onClick={handleClick} to="about" smooth={true} duration={300}>
            About
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5]">
          <Link
            onClick={handleClick}
            to="testimonial"
            smooth={true}
            duration={300}
          >
            Testimonial
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5]">
          <Link onClick={handleClick} to="skills" smooth={true} duration={300}>
            Skills
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5]">
          <Link onClick={handleClick} to="service" smooth={true} duration={300}>
            Services
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5]">
          <Link
            onClick={handleClick}
            to="acheivements"
            smooth={true}
            duration={300}
          >
            Acheivement
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5]">
          <Link onClick={handleClick} to="contact" smooth={true} duration={300}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
