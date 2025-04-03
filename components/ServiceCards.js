import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Thorough and reliable home cleaning services to keep your space fresh and tidy.",
    image: "/images/residential-cleaning.png",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Professional cleaning solutions for offices, stores, and business spaces.",
    image: "/images/commercial-cleaning.png",
  },
  {
    title: "Deep Cleaning",
    description:
      "Intensive cleaning for move-ins, move-outs, and post-renovation cleanups.",
    image: "/images/deep-cleaning.png",
  },
];

const ServiceCard = () => {
  return (
    <section
      id="services"
      className="lg:pt-40 lg:pb-10 py-16  text-center bg-gray-50 "
    >
      <h2 className="text-3xl font-bold mb-6 lg:text-4xl">
        Our Cleaning Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            id={index}
            className=" p-6 text-center flex flex-col items-center bg-gray-50"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={300}
              className="mb-4 rounded-lg shadow-xl"
            />
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
