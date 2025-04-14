import React from "react";
import { Typography } from "../ui/Typography";
import { Card } from "../ui/Card";
import { destinations } from "../../lib/constants";

export const Destinations: React.FC = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-20">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-emerald-900"></div>
        <div className="absolute -left-20 top-1/2 w-64 h-64 rounded-full bg-blue-500"></div>
        <div className="absolute right-20 bottom-0 w-72 h-72 rounded-full bg-yellow-400"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <Typography
            variant="caption"
            className="text-emerald-700 font-semibold mb-3"
          >
            Featured Experiences
          </Typography>
          <Typography variant="h2" className="text-center mb-4">
            We craft <span className="text-emerald-700">unforgettable</span>{" "}
            journeys
          </Typography>
          <div className="h-1 w-20 bg-emerald-700 rounded mb-6"></div>
          <Typography
            variant="body1"
            className="text-gray-800 max-w-2xl text-center"
          >
            Our handpicked destinations combine stunning landscapes, cultural
            immersion, and premium accommodations for truly transformative
            travel experiences.
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {destinations.map((destination, index) => (
          <Card
            key={index}
            image={destination.image}
            title={destination.name}
            description={destination.description}
            price={destination.price}
            perPerson={destination.perPerson}
            duration="7 days"
          />
        ))}
      </div>
    </div>
  );
};
