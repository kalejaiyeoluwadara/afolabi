"use client";
import React from "react";
import { useGlobal } from "../context";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Container Component
const Container = ({ name, link, setModal }) => {
  return (
    <motion.section
      onClick={() => setModal(false)}
      className="w-full text-white overflow-hidden border-2 border-dashed border-gray-500 flex justify-between items-center rounded-[20px] flex-col h-[170px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link href={link}>
        <p className="uppercase text-[32px] font-semibold w-full text-center mt-6">
          {name}
        </p>
      </Link>
      <motion.div
        className="h-[100px] bg-primary w-full rounded-[10px]"
        initial={{ height: 0 }}
        animate={{ height: 119 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.5 }}
      />
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-gray-200 flex flex-col justify-center text-[80px] space-y-6">
            {[
              { title: "Work", link: "/works" },
              { title: "EUREKA", link: "/" },
              { title: "CONTACT", link: "/contact" },
              { title: "MORE", link: "/" },
            ].map((d, id) => (
              <div
                key={id}
                onClick={() => setModal(false)}
                className="relative group"
              >
                <Link href={d.link}>
                  <p className="text-7xl  uppercase font-bold">{d.title}</p>
                </Link>
                <motion.span
                  className="h-2 w-0 group-hover:w-[380px] transition-all duration-700 ease-in-out bg-[#D3A068] absolute group-hover:-left-12 -left-[200px] top-8"
                  // initial={{ width: 0 }}
                  // whileHover={{ width: "100%" }}
                  // transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 mb-20 w-full mt-[125px] gap-4">
            {[1, 2, 3, 4].map((d, id) => (
              <Container
                key={id}
                setModal={setModal}
                name={"case studies"}
                link={"/works/case-studies"}
              />
            ))}
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default Modal;
