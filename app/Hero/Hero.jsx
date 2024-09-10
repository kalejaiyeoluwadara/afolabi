"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Link from "next/link";
import HeroIcons from "./HeroIcons";

function Hero() {
  useGSAP(() => {
    gsap.to("#foot", {
      opacity: 1,
      delay: 2,
      ease: "elastic",
    });
  }, []);

  return (
    <main className="sm:flex-center w-screen overflow-hidden">
      <div className="flex-center   flex-col relative">
        <HeroIcons />
        <p
          id="h1text"
          className="uppercase group relative px-5 font-clashb font-bold opacity-1 sm:text-[64px]  leading-[2rem] text-[28px] sm:mt-[110px] w-full sm:w-[952px] sm:leading-[1.2] text-start sm:text-center text-black"
        >
          product designer, CREATIVE DIRECTOR, INTERACTIVE DESIGNER BASED IN
          NIGERIA.
          <span className="h-[10px] group-hover:h-[15px] transition-all absolute sm:block hidden left-[130px] top-[70px] w-[320px] bg-primary " />
          <span className="h-[10px] group-hover:h-[15px] transition-all absolute sm:block hidden right-[90px] bottom-[70px] w-[320px] bg-primary " />
        </p>
        <Link href={"#collections"}>
          <div
            id="foot"
            className="sm:w-[265px] w-[242px] opacity-0 mb-8 mt-6 h-[73px] sm:h-[90px] border-black rounded-full border-[1.5px] flex-center"
          >
            <div className="font-semibold cursor-pointer speed w-[217px] sm:w-[232px] text-xl sm:text-2xl border-[2px] border-black border-dashed rounded-full h-[55px] sm:h-[60px] flex-center">
              MY COLLECTIONS
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Hero;
