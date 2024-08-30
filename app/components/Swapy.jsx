import React from "react";
import { images } from "@/app/utils";
import Image from "next/image";
function Swapy() {
  return (
    <>
      {/* Swapy */}
      <section className="grid grid-cols-2 border-y-2 border-black border-dashed w-full  overflow-hidden h-[384px] ">
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
    </>
  );
}

export default Swapy;
