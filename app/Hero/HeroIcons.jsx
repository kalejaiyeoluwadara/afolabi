"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { icons } from "@/app/utils";
import Image from "next/image";

function HeroIcons() {
  useGSAP(() => {
    gsap.to("#img1", {
      opacity: 1,
      left: 110, // Adjusted position
      bottom: 180, // Adjusted position
      delay: 1.5,
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      "#img2",
      {
        opacity: 0,
        y: -30, // Start slightly above the final position
      },
      {
        opacity: 1,
        y: -40, // Adjusted final position
        delay: 2,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      "#img3",
      {
        opacity: 0,
        x: 100, // Start to the right
      },
      {
        opacity: 1,
        x: 50, // Adjusted final position
        delay: 2.5,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      "#img4",
      {
        opacity: 0,
        y: 100, // Start below
        rotate: 180,
      },
      {
        opacity: 1,
        y: 50, // Adjusted final position
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
        className="sm:h-[100px] w-[50px] sm:w-[100px] h-[50px] sm:block hidden absolute hover:animate-bounce opacity-0 bottom-[200px] left-[500px]"
      />
      <Image
        id="img2"
        src={icons.sep}
        alt=""
        className="sm:h-[100px] sm:w-[100px] w-[30px] h-[50px] sm:block hidden absolute opacity-0 top-[41px] hover:animate-pulse left-[371px]"
      />
      <Image
        id="img3"
        src={icons.wave}
        alt=""
        className="sm:block hidden absolute sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] opacity-0 top-[150px] hover:animate-pulse right-[150px]"
      />
      <Image
        id="img4"
        src={icons.two}
        alt=""
        className="sm:block hidden absolute sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] opacity-0 bottom-[130px] hover:animate-ping right-[200px]"
      />
    </>
  );
}

export default HeroIcons;
