import React from "react";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Sigue from "@/components/Sigue";
import ServiceCard from "@/components/ServiceCards";
import TestimonialCarousel from "@/components/TestimonialCarousel.js";
import PricingCards from "@/components/PricingCards";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Head>
        <title>K&S Cleaning Company - Proto</title>
        <meta
          name="description"
          content="A modern and professional cleaning business template."
        />
      </Head>

      {/* Hero Section */}
      {/* LANDING & HERO */}
      {/* <div className="font-montserrat relative w-full h-[500px] sm:h-[600px] lg:h-[100vh] drop-shadow-xl">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning hero.png"
            alt="Apollos Cleaning Service"
            fill
            className="object-cover"
            priority
            quality={80}
          />{" "}
          <div className="absolute inset-0 bg-black/70"></div>
        </div> */}

      {/* Text Overlay */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Anything and Everything Gets Cleaned
          </h1>
          <p className="text-gray-900  text-lg sm:text-xl mt-3 max-w-2xl">
            Professional cleaning services for your home, car, and business.
          </p>
          <button className="btn-primary mt-6 mb-6 px-6 py-3 bg-gold text-gray-900  font-semibold rounded-lg shadow-md hover:bg-[#b8975e8c] transition-all">
            Get a Free Quote
          </button>
          <h2 className="text-gray-900  text-2xl sm:text-3xl lg:text-4xl font-bold">
            Veteran Owned & Operated
          </h2>
        </div> */}
      <Hero />

      {/* Benefits */}
      {/* <Benefits /> */}

      {/* Services Section */}
      <ServiceCard />

      {/* Why Choose Us */}
      <Sigue />

      {/* Testimonials */}
      <TestimonialCarousel />
      {/* Pricing Section */}
      <PricingCards />

      {/* Contact Section */}
      {/* <section
        id="contact"
        className="bg-blue-600 text-white py-12 text-center"
      >
        <h2 className="text-3xl font-semibold">Call for a Free Quote</h2>
        <p className="text-lg mt-2">📞 (757) 639-5555</p>
      </section> */}
      <ContactForm />
    </div>
  );
}

