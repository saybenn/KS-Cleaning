import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(window.scrollY < lastScrollY);
      }
      setLastScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 ${
        isVisible
          ? isScrolled
            ? "bg-blue-600 shadow-lg"
            : "bg-transparent"
          : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white text-shadow-lg w-1/2">
          Care Cleaning Company
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-xl items-center text-shadow w-1/3 justify-between">
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        {/* Call Button */}
        <a
          href="tel:7576395555"
          className="hidden md:flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition-all"
        >
          <FaPhone className="mr-2" /> Call Us
        </a>

        {/* Mobile Call Button */}
        <a
          href="tel:7576395555"
          className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition-all md:hidden flex justify-center items-center"
        >
          <FaPhone className="mr-2 inline" size={"1.3em"} /> Call Us
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl ml-4 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-blue-900 bg-opacity-90 flex flex-col justify-center items-center space-y-8 text-white text-3xl font-semibold transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button
          className="absolute top-6 right-6 text-4xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaTimes />
        </button>
        <Link href="#services" onClick={() => setIsMenuOpen(false)}>
          Services
        </Link>
        <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>
          Pricing
        </Link>
        <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
