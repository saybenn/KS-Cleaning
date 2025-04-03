import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-3">
      <div className="container mx-auto flex md:flex-row justify-between items-center">
        <div className="flex flex-col items-center justify-start w-7/12 gap-y-3">
          <div className="flex items-center w-full gap-x-2">
            <FaPhone className="text-lg text-left" />
            <span>(757) 376-0101</span>
          </div>
          <div className="flex items-center gap-x-2 w-full">
            {" "}
            <FaEnvelope className="text-lg  text-left" />
            <span>info@carecleaning.com</span>
          </div>
        </div>

        <div className="flex flex-col items-end justify-center gap-y-3">
          <div className="flex justify-evenly w-full items-center">
            <FaInstagram className="text-2xl cursor-pointer hover:text-blue-500" />
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-500" />
          </div>
          <p className="text-sm text-right">
            &copy; {new Date().getFullYear()} Care Cleaning Company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
