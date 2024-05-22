import React from "react";
import Button from "./Button";

type Props = {
    children: JSX.Element,
    extraClasses?: string
}

const Card = ({ children, extraClasses }: Props) => {
  return (
    <div className={`col-span-1 p-6 rounded-md backdrop-filter backdrop-blur-xl bg-white border border-white bg-opacity-10 ${extraClasses}`}>
        {
          children
        }
    </div>
  );
};

export default Card;
