"use client";
import Link from "next/link";
import React from "react";
import Container from "../components/Container";
import { useGlobal } from "../context";
function Collections() {
  const { navContent } = useGlobal();
  return (
    <main
      id="collections"
      className=" w-full grid mt-[132px] mb-[41px] grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-8 "
    >
      {navContent.map((d, id) => {
        return <Container name={d.title} link={d.link} key={id} />;
      })}
    </main>
  );
}

export default Collections;
