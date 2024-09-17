"use client";
import React, { useEffect, useState } from "react";
import { useGlobal } from "../context";
import Image from "next/image";
import { icons } from "@/app/utils";
import Sections1 from "./Sections1";
import Sections2 from "./Section2";
import Sections3 from "./Section3";
import Finale from "./Finale";
import { motion, AnimatePresence } from "framer-motion";

const Stroke = ({ count, active, setActive }) => {
  return (
    <div
      onClick={() => {
        setActive(count);
      }}
      className={`${
        count === active ? "bg-black" : "bg-[#D9D9D9]"
      }  w-[61px] sm:w-[125px] h-[5px] sm:h-[10px] rounded-full cursor-pointer speed hover:bg-black`}
    />
  );
};

function Hire() {
  const { hire, setHire } = useGlobal();
  const [active, setActive] = useState(1);
  const [height, setheight] = useState(600);
  const [details, setDetails] = useState({
    projectType: "Branding",
    name: "",
    email: "",
    companyName: "",
    start: "",
    summary: "",
  });
  useEffect(() => {
    setheight(window.innerHeight);
  }, []);
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, delay: 0.5 } },
  };

  return (
    <AnimatePresence>
      {hire && (
        <motion.main
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          className="h-screen fixed top-0 left-0 z-[60] w-full sm:w-screen bg-black bg-opacity-[0.4] flex-center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            className={` w-[80%] sm:w-[1000px] ${
              height <= 600 ? "sm:h-[98%]" : "sm:h-[78%]"
            } bg-white rounded-[25px] h-[90%] px-4 sm:px-[31px] py-[21px]`}
          >
            <nav className={`flex w-full items-start justify-between`}>
              <motion.section
                className={`${
                  active === 4 && "opacity-0"
                } w-full flex gap-3 sm:gap-6`}
              >
                {[1, 2, 3].map((d, id) => (
                  <Stroke
                    active={active}
                    setActive={setActive}
                    count={d}
                    key={id}
                  />
                ))}
              </motion.section>
              <Image
                onClick={() => setHire(false)}
                className="translate-y-[-15px] speed hover:scale-[1.3] cursor-pointer"
                height={32}
                width={32}
                src={icons.zero}
                alt="nav"
              />
            </nav>

            {/* Animate sections */}
            <AnimatePresence mode="await">
              {active === 1 ? (
                <motion.div
                  key="section1"
                  className="h-full pb-0 sm:pb-8"
                  initial="hidden"
                  animate="visible"
                  // exit="exit"
                  variants={contentVariants}
                >
                  <Sections1
                    details={details}
                    setDetails={setDetails}
                    setActive={setActive}
                  />
                </motion.div>
              ) : active === 2 ? (
                <motion.div
                  key="section2"
                  className="h-full pb-0 sm:pb-8"
                  initial="hidden"
                  animate="visible"
                  // exit="exit"
                  variants={contentVariants}
                >
                  <Sections2
                    details={details}
                    setDetails={setDetails}
                    setActive={setActive}
                  />
                </motion.div>
              ) : active === 3 ? (
                <motion.div
                  key="section3"
                  className="h-full pb-0 sm:pb-8"
                  initial="hidden"
                  animate="visible"
                  // exit="exit"
                  variants={contentVariants}
                >
                  <Sections3
                    details={details}
                    setDetails={setDetails}
                    setActive={setActive}
                  />
                </motion.div>
              ) : (
                <motion.div
                  // key="finale"
                  // className="h-full pb-0 sm:pb-8"
                  // initial="hidden"
                  // animate="visible"
                  // exit="exit"
                  variants={contentVariants}
                >
                  <Finale setActive={setActive} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default Hire;
