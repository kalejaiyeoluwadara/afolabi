import Nav from "./components/Nav";
import Hero from "./Hero/Hero";
import Collections from "./Hero/Collections";
import Projects from "./Hero/Projects";
import Foot from "./Hero/Foot";
import CustomCursor from "./components/CustomCursor";
import PageWrapper from "./PageWrapper";
export default function Home() {
  return (
    <PageWrapper>
      {/* <CustomCursor /> */}
      <Nav />
      <Hero />
      <main className=" px-2 sm:px-5">
        <Collections />
        <Projects />
        <Foot />
      </main>
    </PageWrapper>
  );
}
