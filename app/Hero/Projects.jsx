"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { images, icons } from "@/app/utils";
import Image from "next/image";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionsRef = useRef([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
          rotate: -5,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 0.6,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <main className="flex flex-col mt-10 items-center gap-[32px]">
      {/* Time warp */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="group w-full flex cursor-pointer border relative overflow-hidden items-end justify-start px-[29px] py-[46px] h-[404px] rounded-[20px] bg-white"
      >
        <div className="relative z-40">
          <h2>TIMEWARP</h2>
          <h4 className="flex">
            PRODUCT DESIGN{" "}
            <Image
              className="ml-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              src={icons.arrowright}
              height={20}
              width={20}
              alt="short arrow"
            />{" "}
          </h4>
        </div>
        <div className="absolute z-20 h-[125px] w-auto px-[95px] flex-center bg-black text-white rounded-[15px] group-hover:-bottom-3 -bottom-[130px] right-0 transition-all ">
          <h2>CHECK ME OUT</h2>
        </div>
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
            src={images.warp}
          />
        </motion.div>
      </section>

      {/* Unito and Log */}
      <section className="grid grid-cols-2 gap-[31px] justify-between w-full">
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="h-[404px] bg-primary rounded-[20px] w-auto px-6"
        >
          <div className="h-[404px] flex items-end justify-start w-full">
            <div className="mb-10">
              <h2>TIMEWARP</h2>
              <h4>PRODUCT DESIGN </h4>
            </div>
          </div>
        </div>
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="h-[404px] bg-primary rounded-[20px] w-auto px-6"
        >
          <div className="h-[404px] flex items-start justify-start w-full">
            <div className="mt-10">
              <h2>TIMEWARP</h2>
              <h4>PRODUCT DESIGN</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Pewton and Tim */}
      <section className="grid grid-cols-3 w-full gap-[31px]">
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="h-[404px] col-span-2 bg-primary rounded-[20px] w-auto px-6"
        >
          <div className="h-full flex items-end justify-end w-[692px]">
            <div className="mb-10">
              <h2>TIMEWARP</h2>
              <h4>PRODUCT DESIGN</h4>
            </div>
          </div>
        </div>
        <div
          ref={(el) => (sectionsRef.current[4] = el)}
          className="h-[404px] bg-primary rounded-[20px] w-auto px-6"
        >
          <div className="flex h-full items-start justify-end w-full">
            <div className="mt-10">
              <h2>TIMEWARP</h2>
              <h4>PRODUCT DESIGN</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Last Grid */}
      <section className="grid grid-cols-4 relative grid-rows-2 w-full h-auto gap-[31px]">
        <div
          ref={(el) => (sectionsRef.current[5] = el)}
          className="h-[404px] w-auto bg-primary rounded-[20px]"
        ></div>
        <div
          ref={(el) => (sectionsRef.current[6] = el)}
          className="h-[404px] col-span-2 w-auto bg-primary rounded-[20px]"
        ></div>
        <div
          ref={(el) => (sectionsRef.current[7] = el)}
          className="h-[559px] w-auto row-span-2 bg-primary rounded-[20px]"
        ></div>
        <div
          ref={(el) => (sectionsRef.current[8] = el)}
          className="h-[404px] w-auto col-span-3 bg-primary rounded-[20px]"
        ></div>
        <div
          ref={(el) => (sectionsRef.current[9] = el)}
          className="h-[250px] absolute bottom-0 right-0 w-[290px] bg-black rounded-[20px]"
        ></div>
      </section>
    </main>
  );
}

export default Projects;
