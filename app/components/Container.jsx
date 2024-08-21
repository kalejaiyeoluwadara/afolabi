import Link from "next/link";
import React from "react";
const Container = ({ name, link }) => {
  return (
    <section className=" w-auto border flex justify-between items-center rounded-[20px] flex-col h-[218px] ">
      <Link href={link}>
        <p className="uppercase text-[32px] font-semibold w-full text-center mt-6 ">
          {name}
        </p>
      </Link>
      <div className="h-[119px] bg-black w-full rounded-[10px] "></div>
    </section>
  );
};

export default Container;
