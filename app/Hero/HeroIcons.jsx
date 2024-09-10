"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { icons } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";

function HeroIcons() {
  useGSAP(() => {
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
    <>
      <Image
        id="img1"
        src={icons.zero}
        alt=""
        className=" sm:h-[100px] w-[50px] sm:w-[100px]  h-[50px]  sm:block hidden absolute hover:animate-bounce opacity-0 top-[300px] left-[300px] "
      />
      <Image
        id="img2"
        src={icons.sep}
        alt=""
        className=" sm:h-[100px]  sm:w-[100px] w-[30px] h-[50px]  sm:block hidden absolute opacity-0 -top-[4rem] hover:animate-pulse left-[400px] "
      />
      <Image
        id="img3"
        src={icons.wave}
        alt=""
        className=" sm:block hidden absolute sm:h-[100px]  sm:w-[100px] w-[50px] h-[50px] opacity-0 -top-[1.5rem] hover:animate-pulse -right-2 "
      />
      <Image
        id="img4"
        src={icons.two}
        alt=""
        className=" sm:block hidden absolute sm:h-[100px]  sm:w-[100px] w-[50px] h-[50px] opacity-0 sm:bottom-[-3px] bottom-[103px] hover:animate-ping sm:right-[100px]  left-[-40px] "
      />
    </>
  );
}

export default HeroIcons;
