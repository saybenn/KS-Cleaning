import React from "react";
import { FaDollarSign, FaHandsHelping, FaUsers } from "react-icons/fa";

const Benefits = () => {
  return (
    <section className="lg:min-h-[1px] min-h-[250px] py-12 px-6 text-center relative z-20 lg:py-0">
      <div className="px-6 grid grid-cols-3 gap-6 mt-6 absolute -top-[-75px] left-0 m-auto lg:-top-[70px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-full">
        {[
          { title: "Excellent Team", icon: <FaUsers /> },
          { title: "Excellent Price", icon: <FaDollarSign /> },
          { title: "Excellent Service", icon: <FaHandsHelping /> },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white/30 shadow-lg py-6 px-8 rounded-full flex flex-col justify-center items-center"
          >
            <span className="text-4xl">{service.icon}</span>
            <h3 className="text-xl font-bold mt-2">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
