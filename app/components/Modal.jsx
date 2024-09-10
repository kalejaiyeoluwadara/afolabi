"use client";
import React from "react";
import { useGlobal } from "../context";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { icons, images } from "@/app/utils";
import { GoDotFill } from "react-icons/go";
import { BsArrowDownRight } from "react-icons/bs";
import Image from "next/image";
// Container Component
const Container = ({ name, link, setModal }) => {
  return (
    <motion.section
      onClick={() => setModal(false)}
      className="w-full text-white overflow-hidden border-2 border-dashed border-white flex justify-between items-center rounded-[20px] flex-col h-[180px] group group-hover:border-none transition-all duration-700 ease-in-out relative"
    >
      <Link href={link} className="w-full">
        <div className="relative w-full group-hover:-translate-y-[80px] transition-all duration-[400ms] ease-in-out">
          <h4 className="uppercase text-[22px] font-semibold w-full text-center mt-6 mb-4 ">
            {name}
          </h4>
          <BsArrowDownRight className="sm:hidden text-white " size={20} />
          <div className=" bg-primary w-full h-[120px] rounded-[10px] group-hover:h-[190px] transition-all duration-[400ms] absolute flex-center cursor-pointer overflow-hidden">
            <p className="text-white text-2xl font-bold opacity-0 group-hover:opacity-[1]  transition-all  duration-700 ease-in-out ">
              CHECK ME OUT
            </p>
          </div>
        </div>
      </Link>
    </motion.section>
  );
};

// Modal Component
function Modal() {
  const { modal, setModal, navContent } = useGlobal();

  return (
    <AnimatePresence>
      {modal && (
        <motion.main
          className="h-screen w-screen pt-10 grid grid-cols-2 items-center justify-center px-[21px]  bg-primary sm:bg-black z-40 gap-10 fixed top-0 left-0"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className=" speed flex flex-col justify-center space-y-3">
            {[
              { title: "Work", link: "/works" },
              { title: "EUREKA", link: "/eureka" },
              { title: "CONTACT", link: "/contact" },
              { title: "PLAYGROUND", link: "/" },
            ].map((d, id) => (
              <div
                key={id}
                onClick={() => setModal(false)}
                className="relative group"
              >
                <Link href={d.link}>
                  <h3 className="  text-6xl sm:text-7xl text-gray-200 group-hover:text-white transition-all  uppercase  stratosBold font-bold">
                    {d.title}
                  </h3>
                </Link>
                <motion.span className="h-2 w-0 group-hover:w-[440px] transition-all  duration-700 ease-in-out sm:bg-[#D3A068] absolute group-hover:-left-12 -left-[200px] top-8" />
              </div>
            ))}
            {/* desktop socials */}
            <div className="text-white  hidden sm:flex uppercase translate-y-[28px] items-center gap-2 text-[24px] ">
              <Link href={"/"}>instagram</Link>
              <GoDotFill size={10} />
              <Link href={"/"}>behance</Link>
              <GoDotFill size={10} />
              <Link href={"/"}>linkedin</Link>
              <GoDotFill size={10} />
              <Link href={"/"}>figma</Link>
            </div>
            {/* mobile socials */}
            <div className="text-white absolute bottom-10 left-0 px-2 py-2  z-[60] w-screen border-y-[3px] border-solid border-white flex-center sm:hidden uppercase translate-y-[28px] items-center gap-2 text-[24px] ">
              <Link className="text-6xl font-bold" href={"/"}>
                IG
              </Link>
              <GoDotFill className="text-black" size={10} />
              <Link className="text-6xl font-bold" href={"/"}>
                BE
              </Link>
              <GoDotFill className="text-black" size={10} />
              <Link className="text-6xl font-bold" href={"/"}>
                LIN
              </Link>
              <GoDotFill className="text-black" size={10} />
              <Link className="text-6xl font-bold" href={"/"}>
                FIG
              </Link>
            </div>
          </div>
          <div className=" hidden sm:grid grid-cols-2 mb-20 w-full mt-[125px] gap-[32px]">
            {navContent.map((d, id) => {
              return (
                <Container
                  key={id}
                  name={d.title}
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
