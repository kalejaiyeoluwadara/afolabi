import React from "react";
import Container from "../components/Container";
import PageWrapper from "../PageWrapper";

function Page() {
  return (
    <PageWrapper>
      <main className=" mt-10 sm:mt-[70px] ">
        <section className="grid h-auto sm:h-[493px]  sm:grid-cols-3 gap-4 sm:gap-8  ">
          <div className="w-auto flex flex-col justify-between h-full">
            <div className="border   flex-center h-20 sm:h-[229px] px-4 py-2  text-[48px] sm:text-[96px] stratosBold font-bold  ">
              FEAURED
            </div>
            <div className="border border-[3px]  flex-center sm:mt-0 mt-2 h-20 sm:h-[229px] px-4 py-2  text-[48px] sm:text-[96px] stratosBold font-bold  ">
              WORKS
            </div>
          </div>
          <div className="border sm:col-span-2 text-lg sm:text-3xl h-full px-4 sm:px-[33px] py-10 ">
            <p className="font-clash">
              This collection highlights some of my most impactful projects,
              where design and strategy come together to create memorable user
              experiences.
            </p>
            <p className="font-clash mt-8 ">
              Each featured work represents a blend of creativity, innovation,
              and purposeful design, solving real-world problems while pushing
              the boundaries of what’s possible.
            </p>
          </div>
        </section>
        <section className="grid sm:grid-cols-3 grid-cols-1 mt-4 sm:mt-8 gap-4 sm:gap-8  ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d, id) => {
            return <Container name="case study" key={id} link={"/nexgen"} />;
          })}
        </section>
      </main>
    </PageWrapper>
  );
}

export default Page;
