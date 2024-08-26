"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Nav from "./components/Nav";
import Hero from "./Hero/Hero";
import Collections from "./Hero/Collections";
import Projects from "./Hero/Projects";
import Foot from "./Hero/Foot";
import SmoothScroll from "./components/SmoothScroll";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="px-6">
      <Nav />
      <Hero />
      <Collections />
      <Projects />
      <Foot />
    </main>
  );
}
