import React from "react";
import { images, icons } from "@/app/utils";
import Image from "next/image";

function Odyssey() {
  return (
    <section className="py-6 min-h-[733px] sm:grid flex flex-col-reverse sm:grid-cols-3 items-start gap-[30px]">
      <div className="border-[3px] border-dashed sm:col-span-2 border-black rounded-[20px] w-auto h-full  text-[27px]  sm:px-[33px] px-4 py-[31px] sm:pb-[108px] sm:pt-[63px] ">
        <h2 className="mb-6 uppercase stratosBold font-bold sm:w-auto w-full  text-4xl sm:text-[64px] ">
          Creative odyssey
        </h2>
        <p className="flex mt-5 ">
          <span className="px-2 py-2 bg-black  text-4xl font-bold text-white text-center flex-center mr-2 ">
            I
          </span>
          <span className="font-bold text-2xl sm:text-4xl uppercase">
            'm product designer, CREATIVE DIRECTOR, INTERACTIVE DESIGNER BASED
            IN NIGERIA.{" "}
          </span>
        </p>
        <div className=" text-lg sm:text-3xl ">
          <p className="mt-5  font-clash mb-6">
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
      <div className="sm:h-full h-[568px] relative group sm:w-auto w-full rounded-[15px] border-[3px] border-dashed border-black overflow-hidden bg-primary  ">
        <Image
          src={images.folabi}
          alt=""
          className="h-full w-full absolute  top-0 rounded-[15px] left-0 z-[10] object-cover "
        />
        <Image
          src={icons.arr1}
          height={300}
          alt=""
          className=" absolute  rounded-[15px] left-0 bottom-12 opacity-0 group-hover:opacity-[1] speed z-[20] "
        />
        <Image
          src={icons.arr2}
          height={300}
          alt=""
          className=" absolute  rounded-[15px] right-4 top-[120px] opacity-0 group-hover:opacity-[1] speed z-[20] "
        />
        <div className="w-full flex-center ">
          <div className="absolute z-20 h-[115px]  w-auto px-[48px] py-[38px] flex-center wb rounded-[15px] group-hover:-bottom-4 -bottom-[130px]  speed ">
            <h2 className="text-3xl">THE GENIUS</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Odyssey;
