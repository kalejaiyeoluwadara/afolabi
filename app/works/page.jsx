import React from "react";
import Container from "../components/Container";
import PageWrapper from "../PageWrapper";

function Page() {
  return (
    <PageWrapper>
      <main className="mt-[70px] ">
        <section className="grid h-[473px] sm:grid-cols-3 gap-8  ">
          <div className="w-auto flex flex-col justify-between h-full">
            <div className="border flex-center h-[229px] px-4 py-2  text-[96px] stratosBold font-bold  ">
              FEAURED
            </div>
            <div className="border flex-center h-[229px] px-4 py-2  text-[96px] stratosBold font-bold  ">
              WORKS
            </div>
          </div>
          <div className="border sm:col-span-2 text-[27px] h-full px-[33px] py-10 ">
            <p className="">
              This collection highlights some of my most impactful projects,
              where design{" "}
            </p>
            <div className="  ">
              <p className="mt-2    mb-6">
                {" "}
                and strategy come together to create memorable user experiences.
              </p>
              <p className=" ">
                Each featured work represents a blend of creativity, innovation,
                and purposeful design, solving real-world problems while pushing
                the boundaries of what’s possible.
              </p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-3 mt-8 gap-8  ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d, id) => {
            return <Container name="case study" key={id} link={"/nexgen"} />;
          })}
        </section>
      </main>
    </PageWrapper>
  );
}

export default Page;
