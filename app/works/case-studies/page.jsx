import Container from "@/app/components/Container";
import PageWrapper from "@/app/PageWrapper";
import Link from "next/link";
import React from "react";
function Page() {
  return (
    <PageWrapper>
      <main className="grid grid-cols-2 justify-between items-center w-full py-20  ">
        <section className="w-auto">
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-[64px] sm:w-auto font-bold bg-black text-white px-4 py-6">
              WORK
            </h3>
            <h3 className="text-[64px] mt-3 mb-9 sm:w-auto font-bold bg-black text-primary px-2 py-6 ">
              CASE STUDIES
            </h3>
          </div>
          <div className="text-3xl sm:w-[90%] space-y-6 ">
            <p>
              <span className="clash font-semibold">
                In my work as a product designer and UI/UX specialist,{" "}
              </span>
              <span className="clash">
                I’ve tackled complex challenges by blending creativity with
                strategic problem-solving.
              </span>
            </p>
            <p className="clash">
              Through detailed case studies, I’ve demonstrated the journey from
              concept to completion, focusing on how user-centered design
              translates into measurable results.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-[32px] ">
          {[
            { name: "MYHOMEETAL", link: "/works/case-studies" },
            { name: "NEXGEN", link: "/works/case-studies" },
            { name: "STRATEGIES", link: "/works/case-studies" },
            { name: "MYHOMEETAL", link: "/works/case-studies" },
          ].map((d, id) => {
            return <Container key={id} name={d.name} link={d.link} />;
          })}
        </section>
      </main>
    </PageWrapper>
  );
}

export default Page;
