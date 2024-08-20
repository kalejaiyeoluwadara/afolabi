import Image from "next/image";
import React from "react";
import { icons } from "@/app/utils";
function Nav() {
  return (
    <nav className=" my-8 w-screen flex-center ">
      <main className="w-[95vw] grid gap-4 grid-cols-4  ">
        <div className=" h-[80px] col-span-2 w-auto px-4 rounded-[15px] bg-primery border-2 border-dashed border-black  flex justify-between items-center ">
          <h2>OYEFESO.</h2>
          <div className=" h-[54px] w-[60px] flex-center rounded-[10px] bg-black  ">
            <Image
              className=""
              src={icons.two}
              alt="alt"
              height={32}
              width={32}
            />
          </div>
        </div>
        <div className=" h-[80px] px-4 rounded-[15px] bg-primery border-2 border-dashed border-black flex-center  ">
          <p className="text-lg font-bold ">MY EUREKA MOMENT</p>
        </div>
        <div className=" h-[80px] px-4 rounded-[15px] bg-primery border-2 border-dashed border-black flex-center  ">
          <p className="text-lg font-bold ">HIRE ME FOR A PROJECT</p>
        </div>
      </main>
    </nav>
  );
}

export default Nav;
