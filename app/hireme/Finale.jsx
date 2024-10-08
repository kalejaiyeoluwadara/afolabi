"use client";
import React from "react";
import { icons } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import { useGlobal } from "../context";
function Finale() {
  const { setHire } = useGlobal();
  return (
    <main className="flex-center flex-col h-full w-full">
      <Image src={icons.sep} height={96} width={96} alt="" className="" />
      <p className="sm:text-[40px] w-full text-2xl text-center font-bold mt-8 sm:w-[596px] ">
        I’ WILL SEND AN EMAIL ONCE I REVIEW YOUR DETAILS, THANKS!
      </p>
      <p className="text-base sm:text-2xl sm:text-start text-center font-clash mt-4">
        CHECKOUT MY PREVIOUS PROJECTS
      </p>
      <Link href={"/works"} className="w-full px-5">
        <button
          onClick={() => {
            setHire(false);
          }}
          className="sm:px-[112px] w-full text-3xl mt-[56px] smLmb-0 mb-[61px] sm:mt-6 py-[15px] fs text-white bg-black rounded-[10px] "
        >
          EXPLORE
        </button>
      </Link>
    </main>
  );
}

export default Finale;
