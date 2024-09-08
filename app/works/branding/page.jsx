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
            <h3 className="text-[64px] mt-3 mb-9 sm:w-auto font-bold bg-black text-primary px-2 py-6        ">
              BRANDING
            </h3>
          </div>
          <div className="text-3xl sm:w-[90%] space-y-6 ">
            <p>
              <span className="clash font-semibold">As a creative lead, </span>
              <span className="clash">
                I’ve partnered with brands to craft identities that resonate
                with their audience and stand the test of time.
              </span>
            </p>
            <p className="clash">
              My approach to branding goes beyond aesthetics; it’s about
              creating a cohesive story that reflects a brand’s values and
              mission.
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
