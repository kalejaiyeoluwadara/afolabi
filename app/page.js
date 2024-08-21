import Image from "next/image";
import Hero from "./Hero/Hero";
import Collections from "./Hero/Collections";
import Projects from "./Hero/Projects";
import Foot from "./Hero/Foot";
import Nav from "./components/Nav";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Collections />
      <Projects />
      <Foot />
    </main>
  );
}
