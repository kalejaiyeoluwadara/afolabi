import React from "react";
import Nav from "../components/Nav";
import NavBar from "../works/NavBar";
import Image from "next/image";
import { images } from "@/app/utils";
import WhiteBox from "../components/WhiteBox";
import Swapy from "../components/Swapy";
import Foot from "../Hero/Foot";
import Role from "./Role";
import Overview from "./Overview";
import Details from "./Details";
function Page() {
  return (
    <main className=" min-h-[100vh] bg-foreground w-full ">
      <div className=" w-full flex items-end bg-black justify-end pb-20 min-h-screen relative">
        <div className="w-full top-0 bg-black left-0 absolute ">
          <NavBar white={true} />
        </div>
        <Image
          src={images.nex}
          alt="background image"
          className="h-full w-[100vw] object-cover z-10 absolute top-0  "
        />
        <section className="w-full relative z-40 px-[21px] ">
          {/* bottom */}
          <div className="w-full  h-[109px] flex justify-between px-8 items-center text-white rounded-[15px] border-2 border-gray-400 border-dashed ">
            <div>
              <p>CLIENT: NEXGEN DIGITAL ACADEMY</p>
            </div>
            <div className="flex-center gap-[10px]">
              <WhiteBox title={"BRANDING"} />
              <WhiteBox title={"WEB DESIGN"} />
              <p className="text-[24px] font-semibold ">‘24</p>
            </div>
          </div>
        </section>
      </div>
      <section className="px-[21px]">
        {/* second section */}
        <Role />
        {/* Third section */}
        <Overview />
        <Details />
      </section>
      <section className="w-full bg-foreground pt-[116px] ">
        <Swapy />
      </section>
      <div className="px-[21px] w-full sm:-translate-y-[32px] bg-foreground pt-[116px] ">
        <Foot />
      </div>
    </main>
  );
}

export default Page;
