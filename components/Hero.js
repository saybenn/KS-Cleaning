import React from "react";
import Link from "next/link";
import { FaDollarSign, FaHandsHelping, FaUsers } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center mb-12"
      style={{ backgroundImage: "url('/images/cleaning hero.png')" }}
    >
      <div className="absolute inset-0  bg-opacity-10"></div>
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-3xl px-8 text-white">
        <h1 className="text-5xl font-bold mb-4 leading-tight text-shadow-lg">
          Professional Cleaning Services for a Healthier Home
        </h1>
        <p className="text-lg mb-6 text-shadow-lg">
          We provide top-quality, eco-friendly cleaning solutions to make your
          space shine.
        </p>
        <Link
          href="#contact"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-all font-bold"
        >
          Get a Free Quote
        </Link>
      </div>
      {/* Floating Bubbles Section */}
      <div className="absolute left-1/2 bottom-[-75px] transform -translate-x-1/2 z-30 w-full px-4 grid grid-cols-3 gap-4 ">
        {[
          { title: "Excellent Team", icon: <FaUsers /> },
          { title: "Excellent Price", icon: <FaDollarSign /> },
          { title: "Excellent Service", icon: <FaHandsHelping /> },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/30 shadow-lg py-6 px-8 rounded-full flex flex-col justify-center items-center"
          >
            <span className="text-4xl">{item.icon}</span>
            <h3 className="text-xl font-bold mt-2">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
