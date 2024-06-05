import React from "react";
import HeroSecondary from "../components/HeroSecondary";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Sparkle Crew | Get a Free Cleaning Quote in Nottingham',
  description: "Contact us today for a free cleaning quote in Nottingham. We're happy to answer your questions.",
}

const Contact = () => {

  return (
    <main>
      <HeroSecondary title="Contact Us" />
      <section className="py-[64px] md:py-[80px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-[22px] items-center">
            <div className="col-span-1 lg:pr-14 flex flex-col gap-7">
              <h2 style={{ lineHeight: 1.14 }} className="font-semibold text-[32px] text-black">
                Contact Us
              </h2>
              <p style={{ lineHeight: 1.5 }} className=" text-black">
                Seeking a Cleaning Crew You Can Trust? We understand how
                precious your time is. Our friendly and reliable team offers
                consistent, high-quality cleaning services to keep your space
                sparkling. We&apos;d love to chat and discuss how we can help!
              </p>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-telephone-fill fill-primary"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
                <Link href="tel: 07587699375">07587699375</Link>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-envelope-fill fill-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                <Link href="mailto:infosparklecrew@gmail.com">infosparklecrew@gmail.com</Link>
              </div>
            </div>
            <div className="col-span-1">
              <div className="lg:w-[500px] lg:p-9 lg:bg-[#fff] lg:rounded-md lg:shadow-md  flex flex-col gap-7">
                <h3 className="text-[22px] font-semibold text-black">
                  We&apos;d love to hear from you and let&apos;s get in touch.
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
