"use client";
import React, { useState } from "react";
import { useGlobal } from "../context";

const Stroke = ({ count, active, setActive }) => {
  return (
    <div
      onClick={() => {
        setActive(count);
      }}
      className={`${
        count === active ? "bg-black" : "bg-[#D9D9D9]"
      }  w-[125px] h-[10px]  rounded-full `}
    />
  );
};
function Hire() {
  const { hire, setHire } = useGlobal();
  const [active, setActive] = useState(1);
  return (
    <>
      {hire && (
        <main className="h-screen fixed top-0 left-0 z-[60] w-screen bg-black bg-opacity-[0.4] flex-center ">
          <div className="w-[1000px] h-[90%] bg-white rounded-[25px] px-[31px] py-[51px] ">
            <nav className="w-full flex gap-6 ">
              {[1, 2, 3].map((d, id) => (
                <Stroke
                  active={active}
                  setActive={setActive}
                  count={d}
                  key={id}
                />
              ))}
            </nav>
          </div>
        </main>
      )}
    </>
  );
}

export default Hire;
