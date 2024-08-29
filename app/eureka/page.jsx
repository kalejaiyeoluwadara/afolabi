import React from "react";
import Nav from "../components/Nav";
import Foot from "../Hero/Foot";
import NavBar from "../works/NavBar";
import { images } from "@/app/utils";
import Image from "next/image";
import WorkCard from "./WorkCard";
function Page() {
  return (
    <>
      <NavBar />
      <section className="h-[452px] flex-center w-full bg-black text-primary">
        <p className=" text-[410px] font-extrabold ">EUREKA</p>
      </section>
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
              className="h-full w-full absolute hover:scale-[1.5] scale-[1.1] duration-700 ease-in-out top-0 rounded-[15px] left-0 z-40 object-cover "
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
        {/* Work experience */}
        <section className="flex  flex-col ">
          <p className="text-[48px] flex-center  font-semibold mb-[89px] ">
            WORK EXPERIENCE
          </p>
          <div className="flex overflow-x-scroll sm:flex-row flex-col no-scrollbar px-4 gap-8">
            {[1, 2, 3, 4].map((d, id) => {
              return <WorkCard key={id} />;
            })}
          </div>
        </section>
      </main>
      {/* Swapy */}
      <section className="grid grid-cols-2 border-y-2 border-black border-dashed w-full mt-[131px] overflow-hidden h-[384px] ">
        <div className="h-full w-auto flex px-[61px] justify-center flex-col ">
          <h1>SWAPY</h1>
          <p className="uppercase text-[28px] w-[433px] ">
            This project showcases my creativity through thoughtful color
            choices, cohesive{" "}
          </p>
        </div>
        <div className="h-full w-auto overflow-hidden  scale-[1.2] ">
          <Image src={images.unito} alt="" className="h-full w-full" />
        </div>
      </section>
      {/* Swapy 2*/}
      <section className="grid mb-8 grid-cols-2 border-b-2  border-black border-dashed w-full overflow-hidden h-[384px] ">
        <div className="h-full w-auto overflow-hidden  scale-[1.2] ">
          <Image src={images.unito} alt="" className="h-full w-full" />
        </div>
        <div className="h-full w-auto flex px-[61px] justify-center items-end flex-col ">
          <h1>SWAPY</h1>
          <p className="uppercase mt-3 text-end text-[28px] w-[433px] ">
            This project showcases my creativity through thoughtful color
            choices, cohesive{" "}
          </p>
        </div>
      </section>
      <div className="px-5">
        <Foot />
      </div>
    </>
  );
}

export default Page;
