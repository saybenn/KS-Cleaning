import React from "react";

const PricingCards = () => {
  return (
    <section id="pricing" className="py-12 px-6 text-center bg-gray-50">
      <h2 className="text-3xl font-semibold lg:text-4xl">
        Choose Your Perfect Plan
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {[
          {
            title: "One-Time Cleaning",
            price: "$99",
            features: [
              "Thorough top-to-bottom cleaning",
              "Includes kitchen, bath, and floors",
              "Perfect for move-ins/outs or seasonal resets",
            ],
          },
          {
            title: "Regular Cleaning",
            price: "$149/mo",
            features: [
              "Bi-weekly or monthly maintenance",
              "Dusting, vacuuming, surfaces, and more",
              "Ideal for busy households",
            ],
          },
          {
            title: "Commercial Cleaning",
            price: "From $199",
            features: [
              "Custom plans for offices and shops",
              "Professional-grade equipment & products",
              "After-hours availability",
            ],
          },
        ].map((plan, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded">
            <h3 className="text-xl font-bold lg:text-2xl">{plan.title} </h3>
            <p className="text-3xl font-bold text-blue-600">{plan.price}</p>
            <ul className="mt-4 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="mt-1 lg:text-lg">
                  ✔ {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
