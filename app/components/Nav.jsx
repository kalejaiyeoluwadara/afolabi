"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useGlobal } from "../context";
import { icons } from "@/app/utils";
import gsap from "gsap";

function Nav() {
  const { setModal, modal } = useGlobal();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();

  // GSAP Intro Animation
  useEffect(() => {
    gsap.to("#nav", {
      opacity: 1,
      y: 0,
      delay: 0.5,
      ease: "bounce",
    });
  }, []);

  // Scroll Handling for Navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

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
      className="my-8 w-full sticky opacity-0 translate-y-10 z-50 flex items-start justify-start"
    >
      <main className="w-[99vw] flex items-start justify-around">
        <motion.div
          animate={controls}
          className="h-[80px] px-4 rounded-[15px] bg-primary border-2 border-dashed border-black flex justify-between items-center"
        >
          <Link
            onClick={() => {
              setModal(false);
            }}
            href={"/"}
          >
            <h2 className="font-bold text-[40px]">OYEFESO.</h2>
          </Link>
          <div
            onClick={() => {
              setModal(true);
            }}
            className="h-[54px] w-[60px] flex-center rounded-[10px] bg-black"
          >
            <Image
              className="cursor-pointer"
              src={icons.sep}
              alt="alt"
              height={32}
              width={32}
            />
          </div>
        </motion.div>
        {!modal && (
          <div className="h-[80px] px-[41px] relative overflow-hidden group rounded-[15px] bg-primary border-2 border-dashed cursor-pointer border-black flex-center">
            <p className="text-3xl relative group-hover:text-white transition-all duration-700 ease-in-out z-40 font-semibold">
              MY EUREKA MOMENT
            </p>
            <div className="absolute w-[190px] h-20 absolute z-20 group-hover:left-0 transition-[left] duration-700 ease-in-out -left-[190px] bg-black" />
            <div className="absolute w-[190px] h-20 absolute z-20 group-hover:right-0 transition-[right] duration-700 ease-in-out -right-[190px] bg-black" />
          </div>
        )}

        <div
          className={`h-[80px] px-[34px] rounded-[15px] ${
            modal ? "wb" : "bw"
          } flex-center`}
        >
          <p className="text-3xl font-semibold">HIRE ME FOR A PROJECT</p>
        </div>
      </main>
    </motion.nav>
  );
}

export default Nav;
