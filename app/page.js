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
          rotation: -10, // Add slight rotation for effect
          scale: 0.9, // Add scale effect to start smaller
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0, // End with no rotation
          scale: 1, // End at normal size
          duration: 1.2, // Increase duration for more gradual effect
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 0.6, // Smooth and continuous scrolling effect
            toggleActions: "play none none reverse",
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
      <section>
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
