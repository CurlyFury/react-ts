import React from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onclick: () => void;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  children,
  variant,
  onclick,
}) => {
  return (
    <div
      onClick={onclick}
      style={{
        width,
        height,

        border: variant === CardVariant.outlined ? "1px solid grey" : "none",
        background: variant === CardVariant.primary ? "lightgrey" : "",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
