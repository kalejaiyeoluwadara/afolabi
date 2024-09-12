"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { images, icons } from "@/app/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import CustomImage from "../components/CustomImage";
gsap.registerPlugin(ScrollTrigger);

const Img = ({ image_name }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      whileHover={{
        scale: 1.5,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 100,
        },
      }}
      whileTap={{
        scale: 1.5, // Maintain the same scale while tapping
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 100, // Same damping and stiffness for smooth return
      }}
    >
      <Image
        className="w-full h-full object-cover"
        alt="warp image"
        src={image_name}
      />
    </motion.div>
  );
};
const Topic = ({ title, sub, color }) => {
  return (
    <div
      style={{
        color: color,
      }}
      className="mt-10"
    >
      <h2>{title}</h2>
      <p className="flex font-extralight text-[24px] items-center ">
        {sub}{" "}
        <MdOutlineArrowOutward
          className="ml-2 opacity-0  transition-opacity duration-300 group-hover:opacity-100"
          size={20}
        />
      </p>
    </div>
  );
};
function Projects() {
  const sectionsRef = useRef([]);
  const [show, setShow] = useState(false);
  return (
    <main className="flex flex-col sm:mt-10 items-center gap-[32px]">
      {/* Time warp */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="group w-full flex cursor-pointer border relative overflow-hidden items-end justify-start px-[29px] py-[46px] h-[404px] rounded-[20px] bg-white"
      >
        <div className="relative text-white z-10 sm:z-40">
          <h2>TIMEWARP</h2>
          <h4 className="flex-center ">
            PRODUCT DESIGN{" "}
            <MdOutlineArrowOutward
              className="ml-2 opacity-0  text-white transition-opacity duration-300 group-hover:opacity-100"
              size={20}
            />
          </h4>
        </div>
        <div className="absolute z-20 h-[125px] sm:w-auto w-full px-[95px] flex-center sm:bg-black sm:text-white wb  rounded-[15px] sm:group-hover:-bottom-3 sm:-bottom-[130px] sm:right-8 speed sm:rotate-0  group-hover:-top-3 -top-[130px] right-0  ">
          <h2>CHECK ME OUT</h2>
        </div>
        <Img image_name={images.warp} />
      </section>

      {/* Unito and Log */}
      <section className="sm:grid flex flex-col grid-cols-2 gap-8 justify-between w-full">
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="project_card group"
        >
          <div className="h-[404px] flex items-end justify-start w-full">
            <div className="mb-10 relative text-white z-40  ">
              <h2>CHAMPIONS LOGISTICS</h2>
              <h4 className="flex items-center jc ">
                BRANDING & WEB DESIGN
                <MdOutlineArrowOutward
                  className="ml-3 opacity-0 mb-2 text-white transition-opacity duration-300 group-hover:opacity-100"
                  size={20}
                />
              </h4>
            </div>
          </div>
          <div className="absolute z-20 h-[115px] rotate-180 w-auto px-[15px] flex-center bg-white text-black rounded-[15px] group-hover:-top-3 -top-[130px] right-20 speed ">
            <h2>CHECK ME OUT</h2>
          </div>
          <Img image_name={images.champ} />
        </div>
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="project_card group"
        >
          <div className=" flex items-start justify-start w-full">
            <div className="mt-10 relative z-40 ">
              <h2>UNITO</h2>
              <h4 className="flex-center">
                CASE STUDY
                <MdOutlineArrowOutward
                  className="ml-2 opacity-0  text-black transition-opacity duration-300 group-hover:opacity-100"
                  size={20}
                />
              </h4>
            </div>
          </div>
          <div className="w-full flex-center ">
            <div className="absolute z-20 h-[115px]  w-auto px-[15px] flex-center bg-black text-white rounded-[15px] group-hover:-bottom-3 -bottom-[130px]  speed ">
              <h2>CHECK ME OUT</h2>
            </div>
          </div>
          <Img image_name={images.unito} />
        </div>
      </section>

      {/* Pewton and Tim */}
      <section className="grid sm:grid-cols-3 w-full gap-8">
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="project_card group sm:col-span-2"
        >
          <div className="w-full h-full flex items-end justify-end">
            <div className="mb-4 r40  text-white ">
              <h2>PEWTON TECHNOLOGIES</h2>
              <h4 className="flex items-center">
                BRANDING & WEB DESIGN
                <MdOutlineArrowOutward
                  className="ml-2 opacity-0  text-white transition-opacity duration-300 group-hover:opacity-100"
                  size={20}
                />
              </h4>
            </div>
          </div>
          <div className="absolute z-20 h-[115px] rotate-90 w-auto px-[15px] flex-center wb rounded-[15px] top-[190px]  sm:group-hover:-left-20 group-hover:-left-[50px] -left-[300px] speed ">
            <h2>CHECK ME OUT</h2>
          </div>
          <Img image_name={images.pewton} />
        </div>
        <div
          ref={(el) => (sectionsRef.current[4] = el)}
          className="project_card group"
        >
          <div className="flex   r40 items-start justify-end w-full">
            <Topic title={"TIM"} sub={"BRANDING"} color={"white"} />
          </div>
          <div className="absolute z-20 h-[115px] -rotate-90 w-auto px-[15px] flex-center wb rounded-[15px]  top-[190px] sm:group-hover:-right-20 group-hover:-right-[50px] -right-[300px] speed ">
            <h2>CHECK ME OUT</h2>
          </div>
          <Img image_name={images.tim} />
        </div>
      </section>

      {/* Last Grid */}
      <section className="grid sm:grid-cols-4 relative  w-full h-auto gap-8">
        <div className="project_card  group ">
          <div className=" flex absolute  z-40 bottom-8 left-3 w-[190px]">
            <Topic
              title={"NEXGEN"}
              sub={"BRANDING & WEB DESIGN"}
              color={"black"}
            />
          </div>
          <div className="w-full flex-center ">
            <div className="absolute z-20 h-[95px]  w-auto px-[15px] flex-center wb -rotate-90 rounded-[15px] top-[90px] sm:group-hover:-right-[84px] group-hover:-right-[50px]  -right-[200px]  speed ">
              <h2>CHECK ME OUT</h2>
            </div>
          </div>
          <Img image_name={images.nexgen} />
        </div>
        <div className="project_card group  sm:col-span-2 ">
          <div className=" r40  mt-40 w-full ">
            <Topic
              title={"MYHOMEETAL"}
              sub={"PRODUCT DESIGN"}
              color={"white"}
            />
          </div>
          <div className="w-full flex-center ">
            <div className="absolute z-20 h-[95px]  w-auto px-[15px] flex-center bg-[#E33536] text-white  rounded-[15px] group-hover:bottom-[-10px] left-[24px] -bottom-[230px]  speed ">
              <h2>CHECK ME OUT</h2>
            </div>
          </div>
          <Img image_name={images.myhomeetal} />
        </div>
        <div className=" row-span-2 project_card group">
          <div className=" r40  w-full ">
            <Topic title={"OYEFESO"} sub={"A STORY"} color={"white"} />
          </div>
          <div className="w-full flex-center ">
            <div className="absolute z-20 h-[95px]  w-auto px-[15px] flex-center wb  rounded-[15px] group-hover:bottom-[-10px] left-[14px] -bottom-[230px]  speed ">
              <h2>CHECK ME OUT</h2>
            </div>
          </div>
          <Img image_name={images.afolabi} />
        </div>
      </section>
      <section className=" grid sm:grid-cols-3 relative sm:-translate-y-8 w-full h-auto gap-8">
        {/* swapy */}
        <div className="project_card group flex items-end w-auto sm:col-span-2">
          <div className=" r40 mb-4 w-full ">
            <Topic title={"SWAPY"} sub={"CASE STUFY"} color={"white"} />
          </div>
          <div className="w-full flex-center ">
            <div className="absolute z-20 rotate-180 h-[95px]  w-auto px-[15px] flex-center wb  rounded-[15px] group-hover:top-[-10px] right-[24px] -top-[230px]  speed ">
              <h2>CHECK ME OUT</h2>
            </div>
          </div>
          <Img image_name={images.swapy} />
        </div>
        {/* last div */}
        <div className="h-[404px] group overflow-hidden sm:col-span-1 flex flex-col flex-center w-auto bw rounded-[20px]">
          <Image
            src={icons.wave}
            className="rotate-[60deg] group-hover:scale-[1.5] group-hover:translate-y-[100px]  transition-all duration-700 ease-in-out "
            height={130}
            width={130}
            alt=""
          />
          <div className=" group-hover:translate-y-[130px] transition-all duration-700 ease-in-outl ">
            <p className="text-[48px] font-bold">SAY HELLO!</p>
            <p className="text-[24px] leading-[27px] w-[194px] text-center ">
              READY TO CREATE GREATNESS?{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
