"use client";
import Image from "next/image";
import React from "react";
import { icons } from "@/app/utils";
import { useGlobal } from "../context";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Nav() {
  const { setModal } = useGlobal();
  useGSAP(() => {
    gsap.to("#nav", {
      opacity: 1,
      y: 0,
      delay: 0.5,
      ease: "bounce",
    });
  }, []);
  return (
    <nav
      id="nav"
      className=" my-8 w-full opacity-0 translate-y-10 z-50 relative flex items-start justify-start  "
    >
      <main className="w-[95vw] flex items-start justify-around  ">
        <div className=" h-[80px] w-[490px] col-span-2  px-4 rounded-[15px] bg-primary border-2 border-dashed border-black  flex justify-between items-center ">
          <Link
            onClick={() => {
              setModal(false);
            }}
            href={"/"}
          >
            <h2 className="font-bold text-[40px] ">OYEFESO.</h2>
          </Link>
          <div
            onClick={() => {
              setModal(true);
            }}
            className=" h-[54px] w-[60px] flex-center rounded-[10px] bg-black  "
          >
            <Image
              className="cursor-pointer"
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
