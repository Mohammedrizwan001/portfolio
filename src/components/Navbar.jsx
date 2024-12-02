import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className="fixed w-full h-[80px] flex items-center justify-between px-4 gap-2 bg-transparent md:backdrop-blur-lg z-50 md:shadow-black/40 md:shadow-sm md:text-white md:mix-blend-difference">
      {/* desktop view */}
      <ul
        className="hidden lg:flex ml-auto space-x-6"
      >
        <li className="hover:scale-105 duration-300 cursor-pointer">
          <Link to="home" smooth={true} duration={300} offset={-40}>
            Home
          </Link>
        </li>
        <li className="hover:scale-105 duration-300 cursor-pointer">
          <Link to="expertise" smooth={true} duration={300} offset={-40}>
            Expertise
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

      <div
        onClick={handleClick}
        className="lg:hidden mr-2 z-10 ml-auto cursor-pointer"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={`absolute top-20 left-1/2 -translate-x-1/2 rounded-lg w-[80%] h-[430px] bg-opacity-90 px-8 py-4 bg-white text-black shadow-md shadow-black/40 flex flex-col items-center transition-all duration-300 ease-in-out ${
          nav ? "block" : "hidden"
        }`}
      >
        <li className="py-3 text-2xl hover:text-[#0d67c5] hover:opacity-80 transition-opacity duration-200">
          <Link onClick={handleClick} to="home" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5] hover:opacity-80 transition-opacity duration-200">
          <Link onClick={handleClick} to="expertise" smooth={true} duration={300}>
            Expertise
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5] hover:opacity-80 transition-opacity duration-200">
          <Link
            onClick={handleClick}
            to="testimonial"
            smooth={true}
            duration={300}
          >
            Testimonial
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5] hover:opacity-80 transition-opacity duration-200">
          <Link onClick={handleClick} to="skills" smooth={true} duration={300}>
            Skills
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5] hover:opacity-80 transition-opacity duration-200">
          <Link onClick={handleClick} to="service" smooth={true} duration={300}>
            Services
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5] hover:opacity-80 transition-opacity duration-200">
          <Link
            onClick={handleClick}
            to="achievements"
            smooth={true}
            duration={300}
          >
            Acheivement
          </Link>
        </li>
        <li className="py-3 text-2xl hover:text-[#0d67c5] hover:opacity-80 transition-opacity duration-200">
          <Link onClick={handleClick} to="contact" smooth={true} duration={300}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
