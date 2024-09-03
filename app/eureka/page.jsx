import React from "react";
import Nav from "../components/Nav";
import Foot from "../Hero/Foot";
import NavBar from "../works/NavBar";
import { images } from "@/app/utils";
import Image from "next/image";
import WorkCard from "./WorkCard";
import Swapy from "../components/Swapy";
import Story from "./Story";
function Page() {
  return (
    <>
      <NavBar />
      <main className="px-5">
        <section className="py-6 h-[560px]  flex justify-between items-start gap-9">
          <div className="border-[4px] border-dashed border-black rounded-[20px] w-[838px] h-full uppercase text-[27px]  px-[33px] py-10 ">
            <h2 className="mb-6 stratosBold font-bold text-[64px] ">
              Creative odyssey
            </h2>
            <p className="flex">
              <span className="px-2 py-2 bg-black text-[40px] font-bold text-white text-center flex-center mr-2 ">
                I
              </span>
              <span className="font-bold">
                'm product designer, CREATIVE DIRECTOR, INTERACTIVE DESIGNER
                BASED IN NIGERIA.{" "}
              </span>
            </p>
            <div className="  ">
              <p className="mt-3  stratosLight font-bold   mb-6">
                {" "}
                I specialize in designing websites and creating compelling
                branding packages for diverse clients. When I'm not immersed in
                the creative world,
              </p>
              <p className="stratosLight font-bold">
                I switch gears, immersing myself in the world of gaming, or
                experimenting with new art techniques. which ignites my
                creativity, offering new perspectives.
              </p>
            </div>
          </div>
          <div className="h-full w-[526px] rounded-[15px]  overflow-hidden relative  ">
            <Image
              src={images.folabi}
              alt=""
              className="h-full w-full absolute hover:scale-[1.5] scale-[1.01] duration-700 ease-in-out top-0 rounded-[15px] left-0 z-40 object-cover "
            />
          </div>
        </section>

        {/* brilliance section */}
        <section className=" mb-[100px]  grid grid-cols-3  gap-8">
          <Image
            src={images.brilliance}
            alt="brilliance"
            className="w-auto flex-shrink-0 h-full "
          />
          <Image
            src={images.spawn}
            className="w-auto col-span-2 h-full "
            alt=""
          />
        </section>
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
