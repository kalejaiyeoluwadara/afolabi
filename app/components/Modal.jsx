"use client";
import React, { useEffect } from "react";
import { useGlobal } from "../context";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Container = ({ name, link, setModal }) => {
  return (
    <section
      onClick={() => {
        setModal(false);
      }}
      className=" w-auto text-white overflow-hidden border-2 border-dashed  border-white flex justify-between items-center rounded-[20px] flex-col h-[200px] "
    >
      <Link href={link}>
        <p className="uppercase text-[32px] font-semibold w-full text-center mt-6 ">
          {name}
        </p>
      </Link>
      <div className="h-[119px] bg-primary w-full rounded-[10px] "></div>
    </section>
  );
};
function Modal() {
  const { modal, setModal } = useGlobal();
  const pathname = usePathname();
  return (
    <>
      {modal && (
        <main className="h-screen w-screen pb-10  overflow-y-scroll grid grid-cols-2  items-center justify-center   px-[53px]  bg-black z-40 gap-10 fixed top-0 left-0 ">
          <div className="text-white flex flex-col justify-center text-[80px] space-y-6  ">
            {[
              { title: "Work", link: "/works" },
              { title: "EUREKA", link: "/" },
              { title: "CONTACT", link: "/contact" },
              { title: "MORE", link: "/" },
            ].map((d, id) => {
              return (
                <div
                  key={id}
                  onClick={() => setModal(false)}
                  className="relative"
                >
                  <Link href={d.link}>
                    <p className=" text-7xl uppercase font-bold ">{d.title}</p>
                  </Link>
                  {pathname.includes(d.title.toLowerCase()) && (
                    <span className="h-2 w-[380px] bg-[#D3A068] absolute -left-12 top-8  " />
                  )}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2  mb-20 w-full mt-[125px] gap-4 ">
            {[1, 2, 3, 4].map((d, id) => {
              return (
                <Container
                  setModal={setModal}
                  name={"case studies"}
                  link={"/works/case-studies"}
                />
              );
            })}
          </div>
        </main>
      )}
    </>
  );
}

export default Modal;
