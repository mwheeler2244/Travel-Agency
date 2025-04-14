import React from "react";
import Image from "next/image";
import { Typography } from "./Typography";
import { Button } from "./Button";

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  perPerson: string;
  duration: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  price,
  perPerson,
  duration,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <Typography variant="h3" className="mb-2">
          {title}
        </Typography>
        <Typography variant="body1" className="text-gray-900 mb-4">
          {description}
        </Typography>
        <div className="flex justify-between items-center mb-4">
          <div>
            <Typography variant="h4" className="font-bold">
              {price}
            </Typography>
            <Typography variant="caption" className="text-gray-700">
              {perPerson}
            </Typography>
          </div>
          <Typography variant="caption" className="text-gray-900">
            {duration}
          </Typography>
        </div>
        <Button href="#contact" variant="primary" className="w-full">
          Explore Package
        </Button>
      </div>
    </div>
  );
};
