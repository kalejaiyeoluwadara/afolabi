"use client";
import React from "react";
import { useGlobal } from "../context";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { icons, images } from "@/app/utils";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
// Container Component
const Container = ({ name, link, setModal }) => {
  const icontype =
    name === "CASE STUDIES"
      ? images.flower
      : name === "STRATEGIES"
      ? icons.globe
      : name === "BRANDING"
      ? icons.spring
      : icons.flowerr;

  return (
    <motion.section
      onClick={() => setModal(false)}
      className="w-full text-white overflow-hidden border-2 border-dashed border-gray-500 flex justify-between items-center rounded-[20px] flex-col h-[170px] group group-hover:border-none transition-all duration-700 ease-in-out relative"
    >
      <Link href={"/"} className="w-full">
        <div className="relative w-full group-hover:-translate-y-[80px] transition-all duration-[400ms] ease-in-out">
          <p className="uppercase text-[22px] font-semibold w-full text-center mt-6 mb-4 ">
            {name}
          </p>
          <div className=" bg-primary w-full h-[120px] rounded-[10px] group-hover:h-[180px] transition-all duration-[400ms] absolute flex-center cursor-pointer overflow-hidden">
            <Image
              src={icontype}
              alt=""
              height={70}
              width={70}
              className="opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </Link>
    </motion.section>
  );
};

// Modal Component
function Modal() {
  const { modal, setModal } = useGlobal();

  return (
    <AnimatePresence>
      {modal && (
        <motion.main
          className="h-screen w-screen pt-10 grid grid-cols-2 items-center justify-center px-[73px] bg-black z-40 gap-10 fixed top-0 left-0"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className=" duration-700 ease-in-out flex flex-col justify-center text-[80px] space-y-3">
            {[
              { title: "Work", link: "/works" },
              { title: "EUREKA", link: "/eureka" },
              { title: "CONTACT", link: "/contact" },
              { title: "MORE", link: "/" },
            ].map((d, id) => (
              <div
                key={id}
                onClick={() => setModal(false)}
                className="relative group"
              >
                <Link href={d.link}>
                  <p className="text-6xl text-gray-200 group-hover:text-white transition-all  uppercase font-bold">
                    {d.title}
                  </p>
                </Link>
                <motion.span className="h-2 w-0 group-hover:w-[380px] transition-all  duration-700 ease-in-out bg-[#D3A068] absolute group-hover:-left-12 -left-[200px] top-8" />
              </div>
            ))}
            <div className="text-white flex uppercase translate-y-[28px] items-center gap-2 text-[20px] ">
              <Link href={"/"}>instagram</Link>
              <GoDotFill size={10} />
              <Link href={"/"}>behance</Link>
              <GoDotFill size={10} />
              <Link href={"/"}>linkedin</Link>
              <GoDotFill size={10} />
              <Link href={"/"}>figma</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 mb-20 w-full mt-[125px] gap-4">
            {[
              { name: "CASE STUDIES", link: "/works/case-studies" },
              { name: "BRANDING", link: "/works/case-studies" },
              { name: "WEB & APP DESIGN", link: "/works/case-studies" },
              { name: "PRODUCT DESIGN", link: "/works/case-studies" },
            ].map((d, id) => {
              return (
                <Container
                  key={id}
                  name={d.name}
                  setModal={setModal}
                  link={d.link}
                />
              );
            })}
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default Modal;
