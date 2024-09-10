"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useGlobal } from "../context";
import { icons } from "@/app/utils";
import gsap from "gsap";

function Nav() {
  const { setModal, modal, hire, setHire } = useGlobal();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();

  // GSAP Intro Animation
  useEffect(() => {
    gsap.to("#nav", {
      opacity: 1,
      y: 0,
      delay: 0.2,
      ease: "power1.inOut",
    });
  }, []);

  // Scroll Handling for Navbar visibility

  // Handle Modal Effects
  useEffect(() => {
    if (modal) {
      controls.start({
        width: "65%",
        transition: { duration: 0.5 },
        color: "white",
      });
    } else {
      controls.start({
        width: "490px",
        transition: { duration: 0.5 },
        color: "black",
      });
    }
  }, [modal, controls]);

  return (
    <motion.nav
      id="nav"
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }} // Adjust -100 to hide the navbar completely
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mt-8 mb-4 w-full  sticky gap-[10px] opacity-0 translate-y-10 z-50 flex items-start justify-start"
    >
      <main className="w-full  sm:grid sm:grid-cols-4 px-2 sm:px-5 items-center justify-center gap-8 ">
        <div
          className={`h-[80px]  w-full ${
            modal ? " col-span-3" : " col-span-2"
          } px-4 rounded-[15px] bg-primary border-2 border-dashed border-black flex justify-between items-center`}
        >
          <Link
            onClick={() => {
              setModal(false);
            }}
            href={"/"}
          >
            <h2 className="font-bold hover:text-white speed text-[40px]">
              OYEFESO.
            </h2>
          </Link>
          <div
            onClick={() => {
              setModal(!modal);
              // setHire(true);
            }}
            className="h-[54px] cursor-pointer w-[60px] flex-center rounded-[10px] hover:shadow-xl transition-all bg-black group"
          >
            <Image
              className=" group-hover:scale-[1.5] speed"
              src={icons.sep}
              alt="alt"
              height={32}
              width={32}
            />
          </div>
        </div>
        <div
          className={` h-[80px]  relative overflow-hidden group rounded-[15px] bg-primary border-2 border-dashed cursor-pointer border-black ${
            modal ? "hidden" : "flex-center desktop"
          }`}
        >
          <Link href={"/eureka"}>
            <h4 className="text-2xl relative group-hover:text-white transition-all duration-700 ease-in-out z-40 font-semibold">
              MY EUREKA MOMENT
            </h4>
          </Link>
          <div className=" w-[190px] h-20 absolute z-20 group-hover:left-0 transition-[left] duration-700 ease-in-out -left-[190px] bg-black" />
          <div className=" w-[190px] h-20 absolute z-20 group-hover:right-0 transition-[right] duration-700 ease-in-out -right-[190px] bg-black" />
        </div>

        <div
          onClick={() => {
            setHire(true);
            setModal(false);
          }}
          className={`desktop group  cursor-pointer flex-center overflow-hidden group h-[80px] rounded-[15px] ${
            modal
              ? "bg-black  border-2 border-gray-500 hover:border-white transition-all cursor-pointer text-white border-dashed  "
              : " bw"
          } flex-center`}
        >
          {/* <h4 className="text-2xl w-full text-center translate-x-[140px] flex-shrink-0 font-semibold group-hover:translate-x-[520px] speed">
            HIRE ME FOR A PROJECT
          </h4>
          <h4 className="text-2xl w-full flex-shrink-0 translate-x-[-320px] group-hover:translate-x-[-120px] group-hover:opacity-100 opacity-0 speed font-semibold">
            HIRE ME FOR A PROJECT
          </h4> */}
          <h4 className="uppercase text-2xl ">Hire me for a project</h4>
        </div>
      </main>
    </motion.nav>
  );
}

export default Nav;
