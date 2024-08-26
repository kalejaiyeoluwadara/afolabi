"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGlobal } from "../context";
import { icons } from "@/app/utils";

function Nav() {
  const { setModal } = useGlobal();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);

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

  return (
    <motion.nav
      id="nav"
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }} // Adjust -100 to hide the navbar completely
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="my-8 mt-2 sticky top-2 w-full z-50 flex items-start justify-start"
    >
      <main className="w-[95vw] flex items-start justify-around">
        <div className="h-[80px] w-[490px] col-span-2 px-4 rounded-[15px] bg-primary border-2 border-dashed border-black flex justify-between items-center">
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
        </div>
        <div className="h-[80px] px-[41px] rounded-[15px] bg-primary border-2 border-dashed border-black flex-center">
          <p className="text-3xl font-semibold">MY EUREKA MOMENT</p>
        </div>
        <div className="h-[80px] px-[34px] rounded-[15px] bg-black text-white flex-center">
          <p className="text-3xl font-semibold">HIRE ME FOR A PROJECT</p>
        </div>
      </main>
    </motion.nav>
  );
}

export default Nav;
