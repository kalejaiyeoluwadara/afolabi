"use client";
import Image from "next/image";
import React from "react";
import { icons } from "@/app/utils";
import Link from "next/link";
import { useGlobal } from "../context";
function NavBar() {
  const { setModal } = useGlobal();
  return (
    <nav className=" my-8 w-screen  flex items-start justify-start  ">
      <main className="w-[95vw] gap-8 grid grid-cols-3 items-start justify-around  ">
        <div className=" h-[80px] col-span-2 w-auto   px-4 rounded-[15px] bg-primary border-2 border-dashed border-black  flex justify-between items-center ">
          <Link
            onClick={() => {
              setModal(false);
            }}
            href={"/"}
          >
            <h2 className="font-bold text-[40px] ">OYEFESO.</h2>
          </Link>
          <div
            onClick={() => setModal(true)}
            className=" h-[54px] w-[60px] flex-center rounded-[10px] bg-black  "
          >
            <Image
              className=""
              src={icons.zero2}
              alt="alt"
              height={32}
              width={32}
            />
          </div>
        </div>

        <Link href="/">
          <div className=" h-[80px]  rounded-[15px] border gap-4 flex-center  ">
            <Image
              className=""
              src={icons.returnImg}
              alt="alt"
              height={32}
              width={32}
            />
            <p className="text-3xl font-semibold ">RETURN</p>
          </div>
        </Link>
      </main>
    </nav>
  );
}

export default NavBar;
