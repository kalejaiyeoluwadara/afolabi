"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
function Hero() {
  useGSAP(() => {
    gsap.to("#h1text", {
      opacity: 1,
      y: 0,
      delay: 1,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.to("#foot", {
      opacity: 1,
      delay: 3,
      ease: "elastic",
    });
  }, []);
  return (
    <main className="flex-center w-screen overflow-x-hidden ">
      <div className="flex-center mt-16 flex-col ">
        <h1
          id="h1text"
          className="uppercase opacity-0 mt-10   font w-[952px] leading-[80px] text-center text-black "
        >
          product designer, CREATIVE DIRECTOR, INTERACTIVE DESIGNER BASED IN
          NIGERIA.
        </h1>

        <div
          id="foot"
          className="w-[265px] opacity-0 mb-8 mt-4 h-[80px] border-black rounded-full border-[1.5px] flex-center border-dashed "
        >
          <div className=" font-medium w-[242px] text-2xl border rounded-full h-[60px] flex-center ">
            MY COLLECTIONS
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
