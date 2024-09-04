import React from "react";
import "./nex.css";
function Role() {
  return (
    <section className="py-10 ">
      <div className=" grid sm:grid-cols-2 sm:gap-12  border-[4px] border-dashed border-black rounded-[20px] w-full h-auto uppercase   px-[33px] py-10 ">
        <article>
          <h2 className="text-5xl stratosBold mb-5 ">ROLE:</h2>
          <div className="flex flex-col text-3xl stratosLight font-[100] gap-6">
            <p>User Experience (UX) Designer</p>
            <p>User Interface (UI) Designer</p>
            <p>Interaction Designer</p>
            <p>Brand Designer</p>
          </div>
        </article>
        <article>
          <div className="mb-10">
            <h2 className="text-5xl stratosBold mb-5 ">Length:</h2>
            <p className="">3 Weeks</p>
          </div>
          <div>
            <h2 className="text-5xl stratosBold mb-5 ">LIVE SITE:</h2>
            <p className="">nexgenspace.org</p>{" "}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Role;
