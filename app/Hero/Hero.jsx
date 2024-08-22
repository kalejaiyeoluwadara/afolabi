"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { icons } from "@/app/utils";
import Image from "next/image";

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

    gsap.to("#img1", {
      opacity: 1,
      left: -48, // The final position you set in class
      top: -4, // The final position you set in class
      delay: 1.5,
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      "#img2",
      {
        opacity: 0,
        y: -100, // Start above the screen
      },
      {
        opacity: 1,
        y: 0,
        delay: 2,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      "#img3",
      {
        opacity: 0,
        x: 100, // Start to the right of the screen
      },
      {
        opacity: 1,
        x: 0,
        delay: 2.5,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      "#img4",
      {
        opacity: 0,
        y: 100,
        rotate: 180,
        // Start below the screen
      },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        delay: 2,
        duration: 1,
        ease: "sine.out",
      }
    );
  }, []);

  return (
    <main className="flex-center pb-10 w-screen overflow-x-hidden ">
      <div className="flex-center mt-16 flex-col relative ">
        <Image
          id="img1"
          src={icons.zero}
          alt=""
          height={100}
          width={100}
          className="absolute hover:animate-bounce opacity-0 top-[300px] left-[300px] "
        />
        <Image
          id="img2"
          src={icons.sep}
          alt=""
          height={100}
          width={100}
          className="absolute opacity-0 -top-[4rem] hover:animate-pulse left-[400px] "
        />
        <Image
          id="img3"
          src={icons.wave}
          alt=""
          height={100}
          width={100}
          className="absolute opacity-0 -top-[1.5rem] hover:animate-pulse -right-2 "
        />
        <Image
          id="img4"
          src={icons.two}
          alt=""
          height={100}
          width={100}
          className="absolute opacity-0 bottom-[-3px] hover:animate-ping right-[100px] "
        />
        <h1
          id="h1text"
          className="uppercase opacity-0 mt-[60px] font w-[952px] leading-[80px] text-center text-black "
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
