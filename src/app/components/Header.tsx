"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  heroSection: HTMLElement;
};

const Header = () => {
  const headeRef = useRef<HTMLElement | null>(null);
  const [stickyNav, setStickyNav] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 50) return setStickyNav(true);
    return setStickyNav(false);
  }, []);

  const stickNavStyles = stickyNav && "bg-black";

  const mobileStyles = isMobile && 'bg-black';

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
  }

  const handleScreenSize = useCallback(() => {
    if(window.innerWidth <= 768) return setIsMobile(true);
      setIsMobile(false);
  }, [])

  useEffect(() => {
    handleScroll();
    handleScreenSize();

    document.addEventListener("scroll", handleScroll);
    document.addEventListener('resize', handleScreenSize);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener('resize', handleScreenSize);
      setStickyNav(false);
      setIsMobile(false);
    };
  }, [stickyNav, handleScroll, setStickyNav, handleScreenSize]);

  return (
    <header
      className={`transition ease delay-50 fixed top-0 w-full z-10 bg-trasnparent py-4 ${stickNavStyles} ${ mobileStyles }`}
      ref={headeRef}
    >
      <div className="flex flex-col lg:flex-row align-center container justify-between">
        <div className="flex justify-between lg:block items-center">
          <Link href="/">
            <img
              src="./images/logo.png"
              className={`transition ease delay-50 w-[120px] ${
                !stickyNav ? "w-[120px]" : "w-[80px] scale-[0.9]"
              }`}
            />
          </Link>
          <div className="block lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
              onClick={ handleMobileNav }
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
        </div>
        <nav className={`flex flex-col lg:flex-row w-full lg:w-auto justify-center lg:justify-normal absolute lg:relative top-0 left-0 h-[100dvh] lg:h-auto items-center gap-[22px] text-white bg-black lg:bg-transparent transition-transform ${!isOpen ? ' translate-x-[100%]' : ' translate-x-[0%]' } lg:translate-x-0`}>
          <div className="absolute top-6 right-3 block lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
              onClick={ handleMobileNav }
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <Link href="/about-us" className="text-[22px] lg:text-[1rem] nav-link hover:">
            About Us
          </Link>
          <Link href="/domestic" className="text-[22px] lg:text-[1rem] nav-link">
            Domestic
          </Link>
          <Link href="/commercial" className="text-[22px] lg:text-[1rem] nav-link">
            Commercial
          </Link>
          <Link href="/contact" className="text-[22px] lg:text-[1rem] nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
