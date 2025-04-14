import React from "react";
import Image from "next/image";
import { Typography } from "../ui/Typography";

interface Testimonial {
  name: string;
  location: string;
  date: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mark K.",
    location: "Venice",
    date: "June 2024",
    image:
      "https://images.pexels.com/photos/8273644/pexels-photo-8273644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "The attention to detail was impeccable. Every hotel, restaurant and activity was perfectly curated. Will definitely book with Wanderlust again!",
  },
  {
    name: "Lindsey S.",
    location: "Tokyo",
    date: "April 2024",
    image:
      "https://images.pexels.com/photos/31458261/pexels-photo-31458261/free-photo-of-elegant-woman-with-vibrant-background-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Our guide made the experience so special. We saw hidden gems we would have never found on our own. An unforgettable journey!",
  },
  {
    name: "Elena R.",
    location: "Bali",
    date: "March 2024",
    image:
      "https://images.pexels.com/photos/3770354/pexels-photo-3770354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "From planning to execution, everything was seamless. The pre-trip information was thorough and the accommodations were stunning.",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-8 md:p-12 mb-20">
      <Typography variant="h2" className="text-center text-gray-800 mb-8">
        What Our Travelers Say
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <Typography variant="h4" className="text-gray-800">
                  {testimonial.name}
                </Typography>
                <Typography variant="caption" className="text-gray-800">
                  {testimonial.location}, {testimonial.date}
                </Typography>
              </div>
            </div>
            <Typography variant="body1" className="text-gray-600">
              {testimonial.text}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
