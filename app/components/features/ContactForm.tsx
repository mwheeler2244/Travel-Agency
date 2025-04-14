import React, { useRef } from "react";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { destinations } from "../../lib/constants";

export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Your message has been sent. Please check your email.");
    formRef.current?.reset();
  };

  return (
    <div id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div>
        <Typography variant="h2" className="mb-6">
          Get in Touch
        </Typography>
        <Typography variant="body1" className="text-gray-600 mb-6">
          Ready to embark on your next adventure? Contact our travel experts to
          craft your perfect journey.
        </Typography>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-3 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <span>
              <strong>Phone:</strong> 1-800-TRAVELS
            </span>
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-3 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@wanderlust.com"
                className="text-blue-600 hover:text-blue-800"
              >
                info@wanderlust.com
              </a>
            </span>
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-3 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span>
              <strong>Address:</strong> 123 New York, New York
            </span>
          </li>
        </ul>
      </div>
      <div className="bg-gray-50 rounded-lg p-6">
        <Typography variant="h3" className="mb-4">
          Send Us a Message
        </Typography>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block text-gray-700 mb-2">
              Preferred Destination
            </label>
            <select
              required
              id="destination"
              className="cursor-pointer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 text-lg transition duration-300 hover:border-blue-400 focus:border-blue-500"
            >
              <option value="" className="text-gray-500">
                Select a destination
              </option>
              {destinations.map((destination) => (
                <option key={destination.name} value={destination.name}>
                  {destination.name}
                </option>
              ))}
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              required
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};
