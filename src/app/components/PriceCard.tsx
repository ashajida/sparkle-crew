import React from "react";
import Button from "./Button";

type Props = {
    type: string,
    price: string,
    body: string
    buttonLink: string,
    children?: JSX.Element,
}

const PriceCard = ({ type, price, body,  buttonLink, children }: Props) => {
  return (
    <div className={`col-span-1 flex flex-col p-6 w-full rounded-md backdrop-filter backdrop-blur-xl bg-white border border-white bg-opacity-10`}>
      <div className="text-lg font-semibold leading-8 text-white">
        {type}
      </div>
      <div className="flex flex-col px-1.5 pt-2.5 mt-7">
        <div className="text-5xl font-bold leading-[48px] mb-2 text-white max-md:text-4xl">
          {price}
        </div>
        <div className="leading-8= text-white">
          PER CLEANER / PER HOUR
        </div>
        <div className="mt-9 text-base leading-[22px] text-white">
          {body}
        </div>
      </div>
      <div className="flex flex-col mb-8">
        {
          children
        }
      </div>
      <Button href={buttonLink} text="Book Now" extraClass="text-center mt-auto" />
    </div>
  );
};

export default PriceCard;
