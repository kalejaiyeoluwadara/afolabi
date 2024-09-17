"use client";
import Nav from "./components/Nav";
import Hero from "./Hero/Hero";
import Collections from "./Hero/Collections";
import Projects from "./Hero/Projects";
import Foot from "./Hero/Foot";
import CustomCursor from "./components/CustomCursor";
import PageWrapper from "./PageWrapper";
import { useState } from "react";
import Loading from "./Loading";
import { useGlobal } from "./context";
const Hire = () => {
  const { hire, setHire } = useGlobal();
  return (
    <div
      onClick={() => setHire(true)}
      className="fixed -right-[120px] z-[60] top-[300px] w-[200px] px-4 rounded-[15px] h-[70px] bg-black text-white sm:hidden flex items-center text-3xl stratosBold font-bold "
    >
      HIRE
    </div>
  );
};
export default function Home() {
  const { loading, setLoading } = useGlobal();
  return (
    <>
      {!loading ? (
        <PageWrapper>
          <Nav />
          <main className="w-[100vw] relative overflow-x-hidden ">
            <Hero />
            <section className=" px-2 sm:px-5">
              <Collections />
              <Projects />
              <Foot />
              <Hire />
            </section>
          </main>
        </PageWrapper>
      ) : (
        <Loading />
      )}
    </>
  );
}
