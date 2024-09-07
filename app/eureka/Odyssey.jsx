import React from "react";
import { images } from "@/app/utils";
import Image from "next/image";

function Odyssey() {
  return (
    <section className="py-6 h-[733px] grid grid-cols-3 items-start gap-[30px]">
      <div className="border-[3px] border-dashed sm:col-span-2 border-black rounded-[20px] w-auto h-full  text-[27px]  px-[33px] pb-[108px] pt-[63px] ">
        <h2 className="mb-6 uppercase stratosBold font-bold text-[64px] ">
          Creative odyssey
        </h2>
        <p className="flex mt-5 ">
          <span className="px-2 py-2 bg-black text-[40px] font-bold text-white text-center flex-center mr-2 ">
            I
          </span>
          <span className="font-bold uppercase">
            'm product designer, CREATIVE DIRECTOR, INTERACTIVE DESIGNER BASED
            IN NIGERIA.{" "}
          </span>
        </p>
        <div className="  ">
          <p className="mt-3  font-clash mb-6">
            {" "}
            I specialize in designing websites and creating compelling branding
            packages for diverse clients. When I'm not immersed in the creative
            world,
          </p>
          <p className="font-clash">
            I switch gears, immersing myself in the world of gaming, or
            experimenting with new art techniques. which ignites my creativity,
            offering new perspectives.
          </p>
        </div>
      </div>
      <div className="h-full w-auto rounded-[15px] border-[3px] border-dashed border-black overflow-hidden relative  ">
        <Image
          src={images.folabi}
          alt=""
          className="h-full w-full absolute hover:scale-[1.5] scale-[1.01] duration-700 ease-in-out top-0 rounded-[15px] left-0 z-40 object-cover "
        />
      </div>
    </section>
  );
}

export default Odyssey;
