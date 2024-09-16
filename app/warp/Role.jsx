import React from "react";
import "./nex.css";
function Role() {
  return (
    <section className=" py-8 sm:py-10 ">
      <div className=" grid sm:grid-cols-2 sm:gap-12  border-[3px] border-dashed border-black rounded-[20px] w-full h-auto   px-4 sm:px-[33px] py-10 ">
        <article>
          <h2 className="text-5xl stratosBold uppercase mb-5 ">ROLE:</h2>
          <div className="flex flex-col  gap-6">
            <p>User Experience (UX) Designer</p>
            <p>User Interface (UI) Designer</p>
            <p>Interaction Designer</p>
          </div>
        </article>
        <article>
          <div className="mb-10 sm:mt-0 mt-10">
            <h2 className="text-5xl uppercase stratosBold mb-5 ">Length:</h2>
            <p className="">3 Weeks</p>
          </div>
          <div>
            <h2 className="text-5xl uppercase stratosBold mb-5 ">FULL POST:</h2>
            <p className="">Behance.net/</p>{" "}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Role;
