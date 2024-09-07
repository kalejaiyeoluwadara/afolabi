import React from "react";
import Nav from "../components/Nav";
import Foot from "../Hero/Foot";
import NavBar from "../works/NavBar";
import { images } from "@/app/utils";
import Image from "next/image";
import WorkCard from "./WorkCard";
import Swapy from "../components/Swapy";
import Story from "./Story";
import Odyssey from "./Odyssey";
function Page() {
  return (
    <>
      <NavBar />
      <main className="px-5">
        {/* creative odyssey */}
        <Odyssey />
        {/* Story */}
        <Story />
      </main>
      <Swapy />
      <div className="px-5">
        <Foot />
      </div>
    </>
  );
}

export default Page;
