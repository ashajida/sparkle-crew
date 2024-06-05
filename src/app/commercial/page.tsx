import React from "react";
import Image from "next/image";
import HeroSecondary from "../components/HeroSecondary";
import CommercialBookingForm from "../components/CommercialBookingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Reliable Commercial Cleaning Services in Nottingham | Local Cleaning | Sparkle Crew',
  description: "Maintain a clean and professional work environment with Sparkle Crew's commercial cleaning services in Nottingham. Daily, weekly, or customized cleaning plans.",
}

const Commercial = () => {
  return (
    <main>
      <HeroSecondary
        title="Commercial Cleaning"
      />
      <section className="py-[64px] md:py-[80px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-[22px] items-center">
            <div className="col-span-1 lg:pr-14">
              <h2 style={{ lineHeight: 1.14 }} className="text-[32px] font-semibold mb-[28px]">
                A Clean and Healthy Workplace Starts with Sparkle Crew
              </h2>
              <p style={{ lineHeight: 1.5 }} className="mb-[32px]">
                Sparkle Crew customizes cleaning for your business! Our regular
                service keeps common areas, restrooms, and supplies sparkling.
                Need more? We offer deep cleans, carpet care, and more. From
                small offices to large buildings, we handle it all so you can
                focus on your business.
              </p>
            </div>
            <div className="col-span-1">
              <div className="lg:w-[500px] lg:p-9 lg:bg-[#fff] lg:rounded-md lg:shadow-md ">
              <h3 className="text-[22px] font-semibold text-black mb-7">Commercial Cleaning Quote</h3>
                <CommercialBookingForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[64px] md:py-[80px] bg-gradient-to-r from-black to-primary text-white">
        <div className="container">
          <h2 style={{ lineHeight: 1.14 }} className="mb-[58px] text-[32px] text-center font-semibold">
            Our Services Include
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
            <div className="col-span-1 flex gap-1 items-start md:justify-center">
              <span className="text-[56px] leading-[56px] text-white/[0.4]">
                1
              </span>
              <p className="md:w-[50%] text-pretty">
                Dusting and wiping down surfaces, including desks, tables, and
                countertops
              </p>
            </div>
            <div className="col-span-1 flex gap-1 items-start md:justify-center">
              <span className="text-[56px] leading-[56px] text-white/[0.4]">
                2
              </span>
              <p className="md:w-[50%] text-pretty">
                Vacuuming carpets and rugs, and sweeping and mopping hard floors
              </p>
            </div>
            <div className="col-span-1 flex gap-1 items-start md:justify-center">
              <span className="text-[56px] leading-[56px] text-white/[0.4]">
                3
              </span>
              <p className="md:w-[50%] text-pretty">
                Cleaning and sanitizing restrooms, including toilets, sinks, and
                fixtures
              </p>
            </div>
            <div className="col-span-1 flex gap-1 items-start md:justify-center">
              <span className="text-[56px] leading-[56px] text-white/[0.4]">
                4
              </span>
              <p className="md:w-[50%] text-pretty">
                Cleaning and sanitizing kitchen areas, including sinks,
                countertops, and appliances
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[64px] md:py-[80px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-[22px] items-center">
            <div className="col-span-1">
              <Image
                src="/images/house-cleaning.jpg"
                alt="demestic cleaning"
                width={`${640}`}
                height={`${427}`}
                className="rounded-md"
              />
            </div>
            <div className="col-span-1 lg:pl-14 flex flex-col justify-center gap-7">
              <h2 style={{ lineHeight: 1.14 }} className="text-[32px] font-semibold text-black">
                Our Cleaning Process
              </h2>
              <p style={{ lineHeight: 1.5 }} className=" text-black">
                Our process ensures a fresh first impression with a clean
                entryway, then tackles common areas with dusting, trash removal,
                and floor cleaning. We prioritize hygiene in restrooms and
                kitchens, and finish by emptying all trash and replacing liners.
                We tackle hidden grime, sanitize surfaces with environmently
                friendly products for a healthier workplace. Let us handle the
                cleaning, so you can focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Commercial;
