import React, { useState } from "react";

const ContactForm = () => {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const PHONE_REGEX = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim
  );

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (service.length <= 0) {
      tempErrors[service] = true;
      isValid = false;
    }
    if (name.length <= 0) {
      tempErrors[name] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors[email] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors[message] = true;
      isValid = false;
    }

    if (PHONE_REGEX.test(phone) === false) {
      tempErrors["phone"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");

      await fetch("/api/database", {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
          phone: phone,
          service: service,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
          phone: phone,
          service: service,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setService("");

        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");

      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setService("");
    }
  };

  return (
    <section
      id="contact"
      className="shadow-up-lg py-16 pb-16 bg-gray-50 w-full"
    >
      <div className="border-[0.5px] border-gray-50 max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-center text-5xl font-bold text-blue-600 mb-3 ">
          Contact Us
        </h2>
        <span className="block w-5/6 h-0.5 bg-yellow-400 mx-auto mb-10"></span>

        <form onSubmit={handleSubmit} className="space-y-6 lg:w-full">
          <div className="flex gap-x-8">
            {/* Name Field */}
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            {/* Phone Number Field */}
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="flex gap-x-8">
            {" "}
            {/* Email Field */}
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            {/* Service Dropdown */}
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-1">
                Service Interested In
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227] "
              >
                <option value="">Select a service</option>
                <option value="One-Time Cleaning">One-Time Cleaning</option>
                <option value="Regular Cleaning">Regular Cleaning</option>
                <option value="Commercial Cleaning">Commercial Cleaning</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#cfbc7d] transition-all hover:cursor-pointer"
            >
              {buttonText}
            </button>
          </div>
        </form>

        {/* Info Message */}
        <p className="text-center text-gray-600 text-sm mt-4">
          We&apos;ll never share your personal information with anyone else.
        </p>

        {/* Success & Failure Messages */}
        {showSuccessMessage && (
          <p className="text-center text-green-600 mt-4">
            Thank You! Your message has been delivered!
          </p>
        )}
        {showFailureMessage && (
          <p className="text-center text-red-600 mt-4">
            Something went wrong, please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
