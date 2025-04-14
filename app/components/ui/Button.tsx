import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) => {
  const baseStyles =
    "cursor-pointer px-6 py-3 rounded-full font-medium transition duration-300 ease-in-out";
  const variantStyles = {
    primary:
      "bg-white text-gray-900 hover:bg-black hover:text-white shadow-md hover:border-white",
    secondary:
      "bg-transparent border border-white text-white hover:bg-black hover:text-white shadow-md hover:border-none",
  };

  const buttonContent = (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
};
