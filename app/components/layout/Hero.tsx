import React from "react";
import Image from "next/image";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Mountain Background"
          fill
          className="object-cover drop-shadow-lg"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <Typography variant="h1" className="text-white mb-4">
              Wanderlust Travels
            </Typography>
            <Typography variant="h2" className="text-white mb-8">
              Extraordinary destinations, perfected.
            </Typography>
            <Typography variant="body1" className="text-white mb-12">
              The journey done right: comfort, connection, and freedom for solo
              travelers and couples.
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button href="#featured" variant="primary">
                Discover Destinations
              </Button>
              <Button href="#contact" variant="secondary">
                Reserve Your Trip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
