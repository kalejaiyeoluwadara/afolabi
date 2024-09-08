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
import Brilliance from "./Brilliance";
import PageWrapper from "../PageWrapper";
function Page() {
  return (
    <PageWrapper>
      <NavBar />
      <main className="px-5">
        {/* creative odyssey */}
        <Odyssey />
        {/* brilliance */}
        <Brilliance />
        {/* Story */}
        <Story />
      </main>
      <Swapy />
      <div className="px-5">
        <Foot />
      </div>
    </PageWrapper>
  );
}

export default Page;
