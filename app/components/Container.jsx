"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { images } from "@/app/utils";
import Image from "next/image";
import { gsap } from "gsap";

const Container = ({ name, link }) => {
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const hoverAnimation = gsap.timeline({ paused: true });

    hoverAnimation.to(imageContainerRef.current, {
      top: "0px",
      duration: 0.15, // Faster duration for snappier movement
      ease: "power2.inOut", // Smooth, yet fast ease
    });

    hoverAnimation.to(
      imageRef.current,
      {
        opacity: 1,
        rotate: 0,
        duration: 0.5, // Shorter duration for faster fade-in
        ease: "power2.out",
      },
      0
    );

    const handleMouseEnter = () => hoverAnimation.play();
    const handleMouseLeave = () => hoverAnimation.reverse();

    const imageContainerElement = imageContainerRef.current;
    imageContainerElement.addEventListener("mouseenter", handleMouseEnter);
    imageContainerElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageContainerElement.removeEventListener("mouseenter", handleMouseEnter);
      imageContainerElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-auto border relative flex justify-between items-center rounded-[20px] flex-col h-[218px] overflow-hidden">
      <Link href={link}>
        <p className="uppercase text-[32px] font-semibold w-full text-center mt-6">
          {name}
        </p>
      </Link>
      <div
        ref={imageContainerRef}
        className="h-[218px] absolute top-[80px] flex-center cursor-pointer overflow-hidden bg-black w-full rounded-[10px]"
      >
        <Image
          ref={imageRef}
          src={images.flower}
          alt=""
          height={70}
          width={70}
          className=" opacity-0 rotate-180" // Start image as hidden
        />
      </div>
    </section>
  );
};

export default Container;
