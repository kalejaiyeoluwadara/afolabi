import React from "react";
import Container from "../components/Container";
import PageWrapper from "../PageWrapper";

function Page() {
  return (
    <PageWrapper>
      <main className="mt-[70px] ">
        <section className="grid grid-cols-2 gap-8  ">
          <div className="space-y-4">
            <div className="border flex-center  px-4 py-2  text-[126px] font-bold  ">
              FEAURED
            </div>
            <div className="border flex-center px-4 py-2  text-[126px] font-bold  ">
              WORKS
            </div>
          </div>
          <div className="border uppercase text-[27px]  px-[33px] py-10 ">
            <p className="flex">
              <span className="px-2 py-2 bg-primary text-[40px] font-extrabold text-white text-center flex-center mr-2 ">
                T
              </span>
              <span>
                This collection highlights some of my most impactful projects,
                where design{" "}
              </span>
            </p>
            <div className="  ">
              <p className="mt-2  stratosLight font-semibold  mb-6">
                {" "}
                and strategy come together to create memorable user experiences.
              </p>
              <p className="stratosLight font-semibold ">
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
