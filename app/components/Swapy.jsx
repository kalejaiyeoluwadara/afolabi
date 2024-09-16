import React from "react";
import { images } from "@/app/utils";
import Image from "next/image";
function Swapy() {
  return (
    <main className="sm:px-0 space-y-4 px-4">
      {/* Swapy 1 */}
      <section className="sm:grid flex flex-col-reverse grid-cols-2 border-[3px]  sm:border-y-[3px] border-black sm:border-x-[0px] border-dashed w-full  overflow-hidden h-[430px] sm:rounded-none rounded-[20px] sm:h-[384px] ">
        <div className="h-full w-full sm:w-auto flex px-[17px] sm:px-[61px] justify-center flex-col ">
          <h1>SWAPY</h1>
          <p className=" text-xl uppercase sm:text-3xl font-clash sm:w-[99%] ">
            This project showcases my creativity through thoughtful color
            choices, cohesive{" "}
          </p>
        </div>
        <div className="h-full w-auto overflow-hidden relative group scale-[1.2] ">
          <Image
            src={images.unito}
            alt=""
            className="sm:h-full h-[290px] absolute left-0 top-0 z-[10] w-full"
          />
          <div className="w-full flex-center ">
            <div className="absolute z-20 h-[90px] sm:h-[115px]  w-auto px-4 sm:px-[74px] py-3 sm:py-[38px] flex-center wb rounded-[15px] sm:group-hover:bottom-4 group-hover:-bottom-3 -bottom-[130px]  speed ">
              <h2 className="text-3xl">CHECK ME OUT</h2>
            </div>
          </div>
        </div>
      </section>
      {/* Swapy 2*/}
      <section className="sm:grid sm:mt-0 mt-8 flex flex-col grid-cols-2 border-[3px] sm:border-x-[0px] sm:border-y-[3px] border-black border-dashed w-full sm:border-b-2  overflow-hidden h-[430px] sm:rounded-none rounded-[20px] sm:h-[384px] ">
        <div className="h-full w-auto overflow-hidden relative group scale-[1.2] ">
          <Image
            src={images.unito}
            alt=""
            className="sm:h-full h-[290px] absolute left-0 top-0 z-[10] w-full"
          />
          <div className="w-full flex-center ">
            <div className="absolute z-20 h-[90px] sm:h-[115px]  w-auto px-4 sm:px-[74px] py-3 sm:py-[38px] flex-center wb rounded-[15px] sm:group-hover:bottom-4 group-hover:-bottom-3 -bottom-[130px]  speed ">
              <h2 className="text-3xl">CHECK ME OUT</h2>
            </div>
          </div>
        </div>
        <div className="h-full w-full sm:w-auto flex px-[17px] sm:px-[61px] sm:justify-center sm:items-end justify-center flex-col ">
          <h1>SWAPY</h1>
          <p className=" text-xl sm:text-3xl sm:text-end sm:w-[99%] uppercase">
            This project showcases my creativity through thoughtful color
            choices, cohesive{" "}
          </p>
        </div>
      </section>
    </main>
  );
}

export default Swapy;
