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
export default function Home() {
  const { loading, setLoading } = useGlobal();
  return (
    <>
      {!loading ? (
        <PageWrapper>
          <Nav />
          <Hero />
          <main className=" px-2 sm:px-5">
            <Collections />
            <Projects />
            <Foot />
          </main>
        </PageWrapper>
      ) : (
        <Loading />
      )}
    </>
  );
}
