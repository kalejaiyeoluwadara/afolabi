"use client";
import Image from "next/image";
import React from "react";
import { icons } from "@/app/utils";
import Link from "next/link";
import { useGlobal } from "../context";
import { useRouter } from "next/navigation";
function NavBar({ white }) {
  const { setModal, modal } = useGlobal();
  const router = useRouter();
  return (
    <nav className=" my-8 w-full  relative z-50 flex items-start justify-start  ">
      <main className="w-[100vw] gap-8 grid grid-cols-3 items-start justify-around  ">
        <div
          className={`h-[80px] col-span-2 w-auto px-4 rounded-[15px] bg-primary border-2 border-dashed ${
            white ? "border-white" : "border-black"
          }  flex justify-between items-center `}
        >
          <Link
            onClick={() => {
              setModal(false);
            }}
            href={"/"}
          >
            <h2 className="font-bold hover:text-white transition-all text-[40px]">
              OYEFESO.
            </h2>
          </Link>
          <div
            onClick={() => setModal(!modal)}
            className=" h-[54px] group w-[60px] cursor-pointer flex-center rounded-[10px] bg-black  "
          >
            <Image
              className=" group-hover:scale-[1.3] speed"
              src={icons.zero2}
              alt="alt"
              height={32}
              width={32}
            />
          </div>
        </div>

        <div
          onClick={() => {
            setModal(false);
            router.back();
          }}
        >
          <div
            className={`h-[80px] group cursor-pointer  rounded-[15px] ${
              modal
                ? "wb"
                : white
                ? "text-white border-2 border-dashed border-white"
                : "border"
            } gap-4 flex-center  `}
          >
            <Image
              className=" group-hover:translate-x-[-15px] group-hover:scale-[1.5] speed"
              src={icons.returnImg}
              alt="alt"
              height={32}
              width={32}
            />
            <h4 className="text-3xl font-semibold ">RETURN</h4>
          </div>
        </div>
      </main>
    </nav>
  );
}

export default NavBar;
