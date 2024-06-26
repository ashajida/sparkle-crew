import React from "react";
import Image from "next/image";
import HeroSecondary from "../components/HeroSecondary";
import BookingForm from "../components/CommercialBookingForm";
import { submitDomesticForm } from "../actions/submitDomesticForm";
import DomesticBookingForm from "../components/DomesticBookingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Domestic Cleaning Services In Nottingham | | Local Cleaning | Sparkle Crew',
  description: 'Enjoy a spotless home without lifting a finger! Sparkle Crew offers professional domestic cleaning services in Nottingham. Weekly, bi-weekly, or one-time cleans available',
}


const Domestic = () => {
  return (
    <main>
      <HeroSecondary title="Domestic Cleaning"/>
      <section className="py-[64px] md:py-[80px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-[22px]">
            <div className="col-span-1 lg:pr-14 flex flex-col justify-center gap-7">
              <h2 style={{ lineHeight: 1.14 }} className="text-[32px] text-black font-bold">
                Tailored Cleaning Solutions for Your Home
              </h2>

              <p style={{ lineHeight: 1.5 }} className="mb-3 text-black">
                Every home is unique, and so are your cleaning needs. Whether
                you crave a weekly refresh or a deep clean for a special
                occasion, Sparkle Crew gets the job done. Our regular cleaning
                service keeps your entire home sparkling with thorough dusting,
                vacuuming, mopping, and sanitization in every room. Need a
                deeper clean? We target hidden grime and hard-to-reach areas for
                a truly immaculate space.
              </p>
            </div>

            <div className="col-span-1">
            <div className="lg:w-[500px] lg:p-9 lg:bg-[#fff] lg:rounded-md lg:shadow-md ">
            <h3 className="text-[22px] font-semibold text-black mb-7">Domestic Cleaning Quote</h3>

            <DomesticBookingForm />

            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[64px] md:py-[80px] bg-gradient-to-r from-black to-primary text-white">
        <div className="container">
          <h2 style={{ lineHeight: 1.14 }} className="mb-[58px] text-[32px] text-center font-bold">
            Our Services Include
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
            <div className="col-span-1 flex gap-1 items-start md:justify-center">
              <span className="text-[56px] leading-[56px] text-white/[0.4]">1</span>
              <p className="md:w-[50%] text-pretty">
                Vacuuming carpets, rugs, and upholstery.
              </p>
            </div>
            <div className="col-span-1 flex gap-1 items-start md:justify-center">
              <span className="text-[56px] leading-[56px] text-white/[0.4]">2</span>
              <p className="md:w-[50%] text-pretty">
                Cleaning and sanitizing bathrooms, including toilets, sinks,
                tubs, and showers.
              </p>
            </div>
            <div className="col-span-1 flex gap-1 items-start md:justify-center">
              <span className="text-[56px] leading-[56px] text-white/[0.4]">3</span>
              <p className="md:w-[50%] text-pretty">
                Washing dishes and emptying trash bins.
              </p>
            </div>
            <div className="col-span-1 flex gap-1 items-start md:justify-center">
              <span className="text-[56px] leading-[56px] text-white/[0.4]">4</span>
              <p className="md:w-[50%] text-pretty">
                Removing cobwebs from ceilings and corners
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
                className="rounded-md w-full"
              />
            </div>
            <div className="order-first lg:order-last col-span-1 lg:pl-14 flex flex-col justify-center gap-7">
              <h2 style={{ lineHeight: 1.14 }} className="text-[32px] font-bold text-black">
                Our Cleaning Process
              </h2>
              <p style={{ lineHeight: 1.5 }} className="text-black">
                Our domestic cleaning process is designed to leave your home
                immaculate from top to bottom. We begin by focusing on
                high-traffic areas such as the bathroom and kitchen, where we
                conduct a deep clean, ensuring every surface is thoroughly
                sanitized. From scrubbing tiles to disinfecting countertops, we
                leave no corner untouched.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[64px] md:py-[80px]"></section>
    </main>
  );
};

export default Domestic;
