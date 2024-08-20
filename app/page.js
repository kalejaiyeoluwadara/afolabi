import Image from "next/image";
import Hero from "./Hero/Hero";
import Collections from "./Hero/Collections";
import Projects from "./Hero/Projects";
import Foot from "./Hero/Foot";

export default function Home() {
  return (
    <main className="overflow-x-hidden px-8 mb-8">
      <Hero />
      <Collections />
      <Projects />
      <Foot />
    </main>
  );
}
