import Image from "next/image";
import React from "react";
import { icons } from "@/app/utils";
function Nav() {
  return (
    <nav className=" my-8 w-screen flex-center ">
      <main className="w-[95vw] flex items-center justify-around  ">
        <div className=" h-[80px] w-[490px] col-span-2  px-4 rounded-[15px] bg-primary border-2 border-dashed border-black  flex justify-between items-center ">
          <h2 className="font-bold text-[40px] ">OYEFESO.</h2>
          <div className=" h-[54px] w-[60px] flex-center rounded-[10px] bg-black  ">
            <Image
              className=""
              src={icons.sep}
              alt="alt"
              height={32}
              width={32}
            />
          </div>
        </div>
        <div className=" h-[80px] px-[41px] rounded-[15px] bg-primary border-2 border-dashed border-black flex-center  ">
          <p className="text-3xl font-semibold ">MY EUREKA MOMENT</p>
        </div>
        <div className=" h-[80px] px-[34px] rounded-[15px] bg-black text-white  flex-center  ">
          <p className="text-3xl font-semibold ">HIRE ME FOR A PROJECT</p>
        </div>
      </main>
    </nav>
  );
}

export default Nav;
