import Image from "next/image";
import Button from "./components/Button";
import PriceCard from "./components/PriceCard";
import Bubble from "./components/Bubble";
import ServiceCard from "./components/ServiceCard";
import Hero from "./components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sparkle Crew Cleaning Services | Professional Cleaning in Nottingham',
  description: "Get a sparkling clean home or office with Sparkle Crew. We offer reliable, professional cleaning services in Nottingham. Free quotes & eco-friendly options available.",
}


export default function Home() {
  return (
    <main>
      <Hero
        title="From Home to Office, We Keep Every Space Spotless, Making Cleanliness Effortless For You"
        img="./images/hero.jpg"
        imgSx="./images/hero-sx.png"
        imgMd="./images/hero-md.png"
      >
        <Button href="/contact" text="Book Online Today" extraClass="w-fit" />
      </Hero>
      {/* <section className="py-[80px] bg-gradient-to-r from-black to-primary">
        <div className="container">
          <div className="grid lg:grid-cols-2">
            <div className="col-span-1 pr-14 flex flex-col justify-center">
              <div className="flex flex-col gap-8">
                <h2 className="text-white text-[32px] font-semibold">
                  Recruitment
                </h2>
                <p className="text-white">
                  We are currently looking for local cleaners around Nottingham,
                  if you like house cleaning then we&apos;d like to hear from
                  you.
                </p>
                <Button href="/" text="Book Online Today" extraClass="w-fit" />
              </div>
            </div>
            <div className="image-wrapper col-span-1 w-[400px] rounded-lg ml-auto">
              <img
                src="./images/careers.gif"
                alt=""
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-[80px]">
        <div className="container">
          <h2 className="text-center mb-[58px] text-[32px] bold font-semibold">
            Our Services
          </h2>
          <div className="grid lg:grid-cols-2 gap-[22px] mb-[32px]">
            <ServiceCard
              img="./images/commercial.jpg"
              title="Commercial Cleaning"
              extraClasses="col-span-1"
              href="/commercial"
            >
              <p className="text-center text-[18px] block mx-auto">
                Commercial Cleaning
              </p>
            </ServiceCard>
            <ServiceCard
              img="./images/domestic.jpg"
              title="Domestic Cleaning"
              extraClasses="col-span-1"
              href="/domestic"
            >
              <p className="text-center text-[18px] block mx-auto">
                Domestic Cleaning
              </p>
            </ServiceCard>
          </div>
        </div>
      </section>
      <section className="py-[80px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-[22px]">
            <div className="image-wrapper col-span-1 h-[500px] rounded-lg">
              <img
                src="./images/sink-cleaning.jpg"
                alt=""
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
            <div className="col-span-1 lg:pl-14 flex flex-col justify-center relative">
              <div className="flex flex-col gap-7">
                <h2 className="font-semibold text-[32px]">
                  Experience the best quality services with Sparkle Crew
                </h2>
                <p className="leading-8">
                  At Sparkle Crew, we believe that a clean environment is
                  essential for both your peace of mind and productivity. With
                  our dedicated team of cleaning experts, we&apos;re here to
                  transform your space into a pristine sanctuary where every
                  surface gleams and every corner sparkles.
                </p>
                <Bubble extraClasses="absolute top-0 right-3 z-[-1]" />
                <Bubble
                  extraClasses="absolute top-20 right-0 z-[-1]"
                  width="30"
                  height="30"
                />
                <Button href="/about-us" text="Read More" extraClass="w-fit" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[80px] bg-gradient-to-r from-black to-primary">
        <div className="container">
          <div className="flex flex-col justify-center">
            <h2 className="text-white text-center mb-[58px] font-semibold text-[32px] leading-10">
              Choose From Our Price Plans
            </h2>
            <div className="grid lg:grid-cols-2 gap-[22px]">
              <PriceCard
                type="Domestic Cleaning"
                price="£20.00"
                body="Our team is dedicated to providing thorough and reliable cleaning solutions that cater to your specific needs"
                buttonLink="/domestic"
              >
                <>
                  <div className="flex gap-2.5 justify-center self-start leading-4 text-white mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3909aae5c687680e9982848ae5c45adcac7b78ac5baa94559823211af66a00a3?"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <span className="text-[12px]">
                      Dusting and wiping down surfaces, including furniture,
                      shelves, and baseboards
                    </span>
                  </div>
                  <div className="flex gap-2.5 justify-center self-start leading-4 text-white mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3909aae5c687680e9982848ae5c45adcac7b78ac5baa94559823211af66a00a3?"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <span className="text-[12px]">
                      Vacuuming carpets, rugs, and upholstery.
                    </span>
                  </div>
                  <div className="flex gap-2.5 justify-center self-start leading-4 text-white mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3909aae5c687680e9982848ae5c45adcac7b78ac5baa94559823211af66a00a3?"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <span className="text-[12px]">
                      Cleaning and sanitizing bathrooms, including toilets,
                      sinks, tubs, and showers.
                    </span>
                  </div>
                  <div className="flex gap-2.5 justify-center self-start leading-4 text-white mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3909aae5c687680e9982848ae5c45adcac7b78ac5baa94559823211af66a00a3?"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <span className="text-[12px]">
                      Washing dishes and emptying trash bins.
                    </span>
                  </div>
                  <div className="flex gap-2.5 justify-center self-start leading-4 text-white mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3909aae5c687680e9982848ae5c45adcac7b78ac5baa94559823211af66a00a3?"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <span className="text-[12px]">
                      Removing cobwebs from ceilings and corners
                    </span>
                  </div>
                </>
              </PriceCard>
              <PriceCard
                type="Commercial Cleaning"
                price="£20.00"
                body="Discover our comprehensive commercial cleaning services tailored to meet your business needs"
                buttonLink="/commercial"
              >
                <>
                  <div className="flex gap-2.5 justify-center self-start leading-4 text-white mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3909aae5c687680e9982848ae5c45adcac7b78ac5baa94559823211af66a00a3?"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <span className="text-[12px]">
                      Dusting and wiping down surfaces, including desks, tables,
                      and countertops
                    </span>
                  </div>
                  <div className="flex gap-2.5 justify-center self-start leading-4 text-white mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3909aae5c687680e9982848ae5c45adcac7b78ac5baa94559823211af66a00a3?"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <span className="text-[12px]">
                      Vacuuming carpets and rugs, and sweeping and mopping hard
                      floors
                    </span>
                  </div>
                  <div className="flex gap-2.5 justify-center self-start leading-4 text-white mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3909aae5c687680e9982848ae5c45adcac7b78ac5baa94559823211af66a00a3?"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <span className="text-[12px]">
                      Cleaning and sanitizing restrooms, including toilets,
                      sinks, and fixtures
                    </span>
                  </div>
                  <div className="flex gap-2.5 justify-center self-start leading-4 text-white mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3909aae5c687680e9982848ae5c45adcac7b78ac5baa94559823211af66a00a3?"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <span className="text-[12px]">
                      Cleaning and disinfecting common areas, such as break
                      rooms and lobbies
                    </span>
                  </div>
                  <div className="flex gap-2.5 justify-center self-start leading-4 text-white mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3909aae5c687680e9982848ae5c45adcac7b78ac5baa94559823211af66a00a3?"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <span className="text-[12px]">
                      Cleaning and sanitizing kitchen areas, including sinks,
                      countertops, and appliances
                    </span>
                  </div>
                  <div className="flex gap-2.5 justify-center self-start leading-4 text-white mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3909aae5c687680e9982848ae5c45adcac7b78ac5baa94559823211af66a00a3?"
                      className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <span className="text-[12px]">
                      Dusting and wiping down office equipment
                    </span>
                  </div>
                </>
              </PriceCard>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[80px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-[22px]">
            <div className="col-span-1 lg:pr-14 flex flex-col justify-center">
              <div className="flex flex-col gap-7">
                <h2 className="font-semibold text-[32px] leading-10">
                  Why Choose Us
                </h2>
                <p className="leading-8">
                  We take pride in our meticulous attention to detail. From
                  sanitizing high-touch surfaces to removing stubborn stains, no
                  corner goes overlooked. With Sparkle Crew, you can trust that
                  every inch of your space will be thoroughly cleaned and
                  refreshed.
                </p>
                <Button href="/about-us" text="Read More" extraClass="w-fit" />
              </div>
            </div>
            <div className="image-wrapper col-span-1 h-[500px] rounded-lg order-first lg:order-last">
              <img
                src="./images/sink-cleaning.jpg"
                alt=""
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
