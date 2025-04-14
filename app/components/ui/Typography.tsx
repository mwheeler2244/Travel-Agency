import React from "react";
import { typography } from "../../lib/constants";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body1"
  | "body2"
  | "caption";

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = "",
}) => {
  const style = typography[variant];
  const Tag = variant.startsWith("h") ? variant : "p";

  return React.createElement(
    Tag,
    {
      className,
      style: {
        fontFamily: typography.fontFamily,
        ...style,
      },
    },
    children
  );
};
