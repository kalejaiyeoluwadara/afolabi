"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Nav from "./components/Nav";
import Hero from "./Hero/Hero";
import Collections from "./Hero/Collections";
import Projects from "./Hero/Projects";
import Foot from "./Hero/Foot";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Trigger animation when the top of the section reaches 80% of the viewport height
            end: "top 20%", // End when the top of the section reaches 20% of the viewport height
            scrub: true, // Smooth scroll effect
            toggleActions: "play none none reverse", // Control how animations behave on scroll
          },
        }
      );
    });
  }, []);

  return (
    <main className="">
      <Nav />
      <section ref={(el) => (sectionsRef.current[0] = el)}>
        <Hero />
      </section>
      <section ref={(el) => (sectionsRef.current[1] = el)}>
        <Collections />
      </section>
      <section ref={(el) => (sectionsRef.current[2] = el)}>
        <Projects />
      </section>
      <section ref={(el) => (sectionsRef.current[3] = el)}>
        <Foot />
      </section>
    </main>
  );
}
