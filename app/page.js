import Nav from "./components/Nav";
import Hero from "./Hero/Hero";
import Collections from "./Hero/Collections";
import Projects from "./Hero/Projects";
import Foot from "./Hero/Foot";
export default function Home() {
  return (
    <>
      <Nav />
      <main className="px-5">
        <Hero />
        <Collections />
        <Projects />
        <Foot />
      </main>
    </>
  );
}
