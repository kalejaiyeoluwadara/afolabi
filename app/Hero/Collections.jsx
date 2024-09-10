"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "../components/Container";
import { useGlobal } from "../context";
function Collections() {
  const { navContent } = useGlobal();
  const [data, setData] = useState([
    { title: "UI DESIGN" },
    { title: "PRODCUT DESIGN" },
    { title: "BRANDING" },
    { title: "MICRO INTERACTIONS" },
  ]);
  return (
    <main
      id="collections"
      className=" w-full hidden sm:grid sm:mt-[40px] mt-[41px] grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-8 "
    >
      {data.map((d, id) => {
        return <Container name={d.title} link={"/"} key={id} />;
      })}
    </main>
  );
}

export default Collections;
