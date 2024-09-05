"use client";
import React, { useState } from "react";
import { useGlobal } from "../context";
import Image from "next/image";
import { icons } from "@/app/utils";
import Sections1 from "./Sections1";
import Sections2 from "./Section2";
import Sections3 from "./Section3";
import Finale from "./Finale";
const Stroke = ({ count, active, setActive }) => {
  return (
    <div
      onClick={() => {
        setActive(count);
      }}
      className={`${
        count === active ? "bg-black" : "bg-[#D9D9D9]"
      }  w-[125px] h-[10px]  rounded-full cursor-pointer speed hover:bg-black `}
    />
  );
};
function Hire() {
  const { hire, setHire } = useGlobal();
  const [active, setActive] = useState(1);
  const [details, setDetails] = useState({
    projectType: "Branding",
    name: "",
    email: "",
    companyName: "",
    start: "",
    summary: "",
  });
  return (
    <>
      {hire && (
        <main className="h-screen fixed top-0 left-0 z-[60] w-screen bg-black bg-opacity-[0.4] flex-center ">
          <div className="w-[1000px] h-[98%] bg-white rounded-[25px] px-[31px] py-[31px] ">
            <nav className={`flex   w-full items-start justify-between`}>
              <secion
                className={` ${active === 4 && "opacity-0"} w-full flex gap-6 `}
              >
                {[1, 2, 3].map((d, id) => (
                  <Stroke
                    active={active}
                    setActive={setActive}
                    count={d}
                    key={id}
                  />
                ))}
              </secion>
              <Image
                onClick={() => setHire(false)}
                className="translate-y-[-15px] speed hover:scale-[1.3] cursor-pointer "
                height={32}
                width={32}
                src={icons.zero}
                alt="nav"
              />
            </nav>

            {/* content */}
            {active === 1 ? (
              <Sections1
                details={details}
                setDetails={setDetails}
                setActive={setActive}
              />
            ) : active === 2 ? (
              <Sections2
                details={details}
                setDetails={setDetails}
                setActive={setActive}
              />
            ) : active === 3 ? (
              <Sections3
                details={details}
                setDetails={setDetails}
                setActive={setActive}
              />
            ) : (
              <Finale />
            )}
          </div>
        </main>
      )}
    </>
  );
}

export default Hire;
