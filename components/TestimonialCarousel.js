import Slider from "react-slick";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      name: "Jessica M.",
      review:
        "⭐️⭐️⭐️⭐️⭐️ The team was incredibly professional and left my home spotless. I couldn’t believe how fresh everything felt after they finished!",
      date: "March 2025",
    },
    {
      name: "Daniel K.",
      review:
        "⭐️⭐️⭐️⭐️⭐️ We hired them for a full office clean and they exceeded expectations. Reliable, detail-oriented, and very efficient!",
      date: "February 2025",
    },
    {
      name: "Maria L.",
      review:
        "⭐️⭐️⭐️⭐️⭐️ We moved out of our apartment and booked a deep clean. Landlord said it was the cleanest unit he’d ever seen. Highly recommend!",
      date: "January 2025",
    },
  ];

  return (
    <section className="bg-gray-50 lg:py-32 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6 lg:text-5xl">
        What Our Clients Say
      </h2>
      <div className="w-full overflow-hidden px-4">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg ">
              <p className="text-lg text-gray-800 mb-4 italic lg:text-2xl">
                “{item.review}”
              </p>
              <p className="font-semibold text-blue-600">{item.name}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
