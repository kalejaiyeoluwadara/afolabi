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
    <Link className="group" href={link}>
      <section className="w-auto border-2 border-dashed  border-black group-hover:border-none relative flex justify-between transition-all  duration-700 ease-in-out  delay-[200] items-center rounded-[20px] flex-col h-[218px] overflow-hidden">
        <div className="relative w-full group-hover:-translate-y-[80px] transition-all  duration-700 ease-in-out ">
          <p className="uppercase text-lg sm:text-[32px]  font-semibold w-full text-center mt-6">
            {name}
          </p>
          <div className="h-[218px] absolute top-[80px] flex-center cursor-pointer overflow-hidden bg-black w-full rounded-[10px]">
            <Image
              src={icontype}
              alt=""
              height={70}
              width={70}
              className=" opacity-0 group-hover:opacity-[1]  transition-all  duration-700 ease-in-out " // Start image as hidden
            />
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Container;
