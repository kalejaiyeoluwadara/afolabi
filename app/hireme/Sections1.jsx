import React from "react";
import { icons } from "@/app/utils";
import Image from "next/image";
function Sections1() {
  return (
    <div>
      <div className="flex flex-col gap-4 ">
        <div className=" text-[40px]  ">
          <h2 className="stratosBold font-bold ">Bonjour,</h2>
          <h2 className="stratosBold font-bold ">Got a Project?</h2>
        </div>
        <p className="text-2xl uppercase mb-5 ">What would you like to do?</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5].map((d, id) => {
          return (
            <div className="w-auto flex gap-[22px] items-center h-[60px] bg-[#F5F2E8] px-[18px] py-[15px] ">
              <div className="h-[20px] w-[20px]  border-[1px] border-black "></div>
              <h2>BRANDING</h2>
            </div>
          );
        })}
      </div>
      <button className=" mt-[27px] rounded-[15px] text-[32px] h-[70px] w-full text-white font-bold stratosBold flex gap-2 flex-center uppercase bg-black bg-opacity-[0.5] ">
        Next
        <Image height={32} width={32} src={icons.right} alt="nav" />
      </button>
    </div>
  );
}

export default Sections1;
