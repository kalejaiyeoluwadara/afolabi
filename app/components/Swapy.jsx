import React from "react";
import { images } from "@/app/utils";
import Image from "next/image";
function Swapy() {
  return (
    <>
      {/* Swapy 1 */}
      <section className="grid grid-cols-2 border-y-[3px] border-black border-dashed w-full  overflow-hidden h-[384px] ">
        <div className="h-full w-auto flex px-[61px] justify-center flex-col ">
          <h1>SWAPY</h1>
          <p className=" text-[32px] font-clash sm:w-[99%] ">
            This project showcases my creativity through thoughtful color
            choices, cohesive{" "}
          </p>
        </div>
        <div className="h-full w-auto overflow-hidden relative group scale-[1.2] ">
          <Image
            src={images.unito}
            alt=""
            className="h-full absolute left-0 top-0 z-[10] w-full"
          />
          <div className="w-full flex-center ">
            <div className="absolute z-20 h-[115px]  w-auto px-[74px] py-[38px] flex-center wb rounded-[15px] group-hover:bottom-4 -bottom-[130px]  speed ">
              <h2 className="text-[32px]">CHECK ME OUT</h2>
            </div>
          </div>
        </div>
      </section>
      {/* Swapy 2*/}
      <section className="grid mb-[124px] mt-[45px] grid-cols-2 border-y-[3px]  border-black border-dashed w-full overflow-hidden h-[384px] ">
        <div className="h-full group w-auto overflow-hidden relative  scale-[1.2] ">
          <Image
            src={images.unito}
            alt=""
            className="h-full absolute left-0 top-0 z-[10] w-full"
          />
          <div className="w-full flex-center ">
            <div className="absolute z-20 h-[115px]  w-auto px-[74px] py-[38px] flex-center wb rounded-[15px] group-hover:bottom-4 -bottom-[130px]  speed ">
              <h2 className="text-[32px]">CHECK ME OUT</h2>
            </div>
          </div>
        </div>
        <div className="h-full w-auto flex px-[61px] justify-center items-end flex-col ">
          <h1>SWAPY</h1>
          <p className=" mt-3 font-clash text-end text-[32px] w-[99%] ">
            This project showcases my creativity through thoughtful color
            choices, cohesive{" "}
          </p>
        </div>
      </section>
    </>
  );
}

export default Swapy;
