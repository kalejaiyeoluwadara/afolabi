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
function Page() {
  return (
    <main className="grid grid-cols-2 justify-between items-center w-full py-20  ">
      <section className="w-auto">
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-[64px] sm:w-auto font-bold bg-black text-white px-4 py-6">
            WORK
          </h3>
          <h3 className="text-[64px] mt-3 mb-9 sm:w-auto font-bold bg-black text-primary px-2 py-6        ">
            CASE STUDIES
          </h3>
        </div>
        <div className="text-3xl sm:w-[90%]  stratosLight font-light  space-y-6 ">
          <p>
            <span className="uppercase font-semibold">
              In my work as a product designer and UI/UX specialist,{" "}
            </span>
            <span className="stratosLight font-light">
              I’ve tackled complex challenges by blending creativity with
              strategic problem-solving.
            </span>
          </p>
          <p className="stratosLight font-light">
            Through detailed case studies, I’ve demonstrated the journey from
            concept to completion, focusing on how user-centered design
            translates into measurable results.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-10 ">
        {[1, 2, 3, 4].map((d, id) => {
          return (
            <Container key={id} name={"Case Study"} link={"/case-study"} />
          );
        })}
      </section>
    </main>
  );
}

export default Page;
