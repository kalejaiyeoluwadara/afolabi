"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionsRef = useRef([]);

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
            end: "top 30%",
            scrub: 0.6,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <main className="flex flex-col items-center gap-[32px]">
      {/* Time warp */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="w-full flex items-end justify-start px-[29px] py-[46px] h-[404px] rounded-[20px] bg-primary"
      >
        <div>
          <h2>TIMEWARP</h2>
          <h4>PRODUCT DESIGN</h4>
        </div>
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
              <h4>PRODUCT DESIGN</h4>
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
