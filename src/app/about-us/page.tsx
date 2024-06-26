import React from "react";
import Image from "next/image";
import HeroSecondary from "../components/HeroSecondary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sparkle Crew | About Us',
  description: '...',
}

const AboutUs = () => {
  return (
    <main>
      <HeroSecondary title="About Us"/>
      <section className="py-[64px] md:py-[80px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-7 items-center">
            <div className="col-span-1">
              <Image
                src="/images/cleaning-crew.jpg"
                width={`${640}`}
                height={`${427}`}
                alt="cleaning crew"
                className="rounded-md w-full"
              />
            </div>
            <div className=" order-first lg:order-last col-span-1 flex flex-col justify-center gap-7 lg:pl-14">
              <h2 style={{ lineHeight: 1.14 }} className="text-[32px] text-black font-bold">
                Sparkle Crew: Where Cleanliness Meets Peace of Mind
              </h2>
              <p style={{ lineHeight: 1.5 }}>
                At Sparkle Crew, we&apos;re passionate about creating clean
                environments that go beyond just surface-level shine. We believe
                a sparkling space fosters peace of mind and boosts productivity,
                allowing you to focus on what truly matters. Our dedicated team
                of cleaning experts is here to transform your space into a
                pristine sanctuary, ensuring every surface gleams and every
                corner sparkles.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[64px] md:py-[80px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-7">
            <div className="col-span-1 flex flex-col justify-center gap-7 lg:pr-14">
              <h2 style={{ lineHeight: 1.14 }} className="leading-10 text-[32px] text-black font-bold">
                Our Mission
              </h2>
              <p className="leading-8">
                Our mission is to transform your space, not just clean it. We
                believe a sparkling environment goes beyond aesthetics,
                promoting well-being and productivity. That&apos;s why we offer
                meticulous cleaning with a focus on hygiene, a team of
                experienced and trustworthy cleaning experts, customized
                solutions for every space, and reliable, flexible scheduling to
                seamlessly fit your needs. We&apos;re here to create a clean
                environment that fosters peace of mind and empowers you to
                thrive.
              </p>
            </div>
            <div className="col-span-1">
              <Image
                src="/images/broom.jpg"
                width={`${640}`}
                height={`${480}`}
                alt="cleaning crew"
                className="rounded-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
