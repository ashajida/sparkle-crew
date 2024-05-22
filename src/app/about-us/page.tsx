import React from "react";
import Hero from "../components/Hero";
import Image from "next/image";

const AboutUs = () => {
  return (
    <main>
      <Hero title="About Us" img="./images/about.jpg" />
      <section className="py-[80px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-7">
          <h2 className="leading-10 text-[32px] text-black font-semibold lg:max-w-[70%]">
                Sparkle Crew: Where Cleanliness Meets Peace of Mind
              </h2>
            <div className="col-span-1">
              <Image
                src="/images/cleaning-crew.jpg"
                width={`${640}`}
                height={`${427}`}
                alt="cleaning crew"
                className="rounded-md"
              />
            </div>
            <div className="col-span-1 flex flex-col justify-center gap-7 lg:max-w-[70%]">
              <p className="leading-8">
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
      <section className="py-[80px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-7">
          <h2 className="leading-10 text-[32px] text-black font-semibold">
                Our Mission
            </h2>
            <div className="col-span-1">
              <Image
                src="/images/broom.jpg"
                width={`${640}`}
                height={`${480}`}
                alt="cleaning crew"
                className="rounded-md"
              />
            </div>
            <div className="col-span-1">
              <p className="leading-8 lg:max-w-[70%]">
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
