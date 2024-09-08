"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { icons } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import HeroIcons from "./HeroIcons";

function Hero() {
  useGSAP(() => {
    // gsap.to("#h1text", {
    //   opacity: 1,
    //   y: 0,
    //   delay: 0.7,
    //   duration: 1,
    //   ease: "power1.inOut",
    // });
    gsap.to("#foot", {
      opacity: 1,
      delay: 3,
      ease: "elastic",
    });
  }, []);

  return (
    <main className="flex-center sm:pb-10 w-screen overflow-hidden ">
      <div className="flex-center mt-16 flex-col relative ">
        <HeroIcons />
        <p
          id="h1text"
          className="uppercase font-clashb sm:translate-x-0 -translate-x-5   opacity-1  sm:text-[64px] text-[40px] sm:mt-[60px] w-full sm:w-[952px] sm:leading-[1.2] text-center text-black "
        >
          product designer, CREATIVE DIRECTOR, INTERACTIVE DESIGNER BASED IN
          NIGERIA.
        </p>

        <Link href={"#collections"}>
          <div
            id="foot"
            className="sm:w-[265px] w-[242px] sm:translate-x-0 -translate-x-5 opacity-0 mb-8 mt-6 h-[90px] border-black rounded-full border-[1.5px] flex-center "
          >
            <div className=" font-medium hover:font-semibold cursor-pointer speed w-[217px] sm:w-[232px] text-xl sm:text-2xl border-[1.5px] border-black border-dashed rounded-full h-[60px] flex-center ">
              MY COLLECTIONS
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Hero;
