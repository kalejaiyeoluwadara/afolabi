"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { images, icons } from "@/app/utils";
import Image from "next/image";
import { gsap } from "gsap";

const Container = ({ name, link }) => {
  const icontype =
    name === "CASE STUDIES"
      ? images.flower
      : name === "STRATEGIES"
      ? icons.globe
      : name === "BRANDING"
      ? icons.spring
      : icons.flowerr;

  return (
    <section className="w-auto border-2 border-dashed  border-black group-hover:border-none relative flex justify-between transition-all  duration-700 ease-in-out  delay-[200] items-center rounded-[20px] flex-col h-[244px] sm:h-[218px] overflow-hidden">
      <div className="relative w-full sm:group-hover:-translate-y-[80px] group-hover:-translate-y-[60px] transition-all  duration-700 ease-in-out ">
        <h4 className="uppercase text-2xl sm:text-3xl  font-semibold w-full text-center sm:mb-0 mb-3 mt-6">
          {name}
        </h4>
        <div className="sm:h-[218px] h-[244px] absolute top-[80px] sm:top-[80px] flex-center cursor-pointer overflow-hidden bg-black w-full rounded-[10px]">
          {/* <Image
              src={icontype}
              alt=""
              height={70}
              width={70}
              className=" opacity-0 group-hover:opacity-[1]  transition-all  duration-700 ease-in-out " // Start image as hidden
            /> */}
          <p className="text-white text-xl sm:text-2xl font-bold opacity-0 group-hover:opacity-100  transition-all  duration-700 ease-in-out ">
            CHECK ME OUT
          </p>
        </div>
      </div>
    </section>
  );
};

export default Container;
