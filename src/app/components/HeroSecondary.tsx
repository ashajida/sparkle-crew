import React from "react";

type Props = {
  title: string;
  children?: JSX.Element;
};

const HeroSecondary = ({ title, children }: Props) => {
  return (
    <div className="bg-gradient-to-r from-black relative text-white to-primary h-[200px] lg:h-[500px]">
      <div className="wrapper absolute top-[50%] translate-y-[-50%] transleft-0 w-full">
        <div className="container flex flex-col items-center">
          <h1 className="text-[32px] leading-[32px] lg:text-[56px] lg:leading-[64px] mb-[32px] text-white font-bold text-center">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroSecondary;
