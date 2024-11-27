"use client";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti"; // Hamburger Icon
import { CgClose } from "react-icons/cg"; // Close Icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="container pt-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-medium text-gray-300">Qureshi</div>

        {/* Desktop Menu */}
        <ul className="gap-10 lg:gap-16 hidden md:flex text-gray-300">
          <li className="menuLink">
            <a href="#hero">Home</a>
          </li>
          <li className="menuLink text-gray-300">
            <a href="#about">About</a>
          </li>
          <li className="menuLink text-gray-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="menuLink text-gray-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <CgClose size={30} className="text-black" /> // Close Icon
          ) : (
            <TiThMenu size={30} className="text-black" /> // Hamburger Icon
          )}
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <ul className="absolute top-16 left-0 right-0 bg-white text-black flex flex-col items-center p-4 space-y-4 shadow-lg transition-transform duration-300 md:hidden">
            <li className="menuLink">
              <a href="#hero" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="menuLink">
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="menuLink">
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li className="menuLink">
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
