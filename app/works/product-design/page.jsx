import Container from "@/app/components/Container";
import Link from "next/link";
import React from "react";
function Page() {
  return (
    <main className="grid grid-cols-2 justify-between items-center w-full py-20  ">
      <section className="w-auto">
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-[64px] sm:w-auto font-bold bg-black text-white px-4 py-6">
            WORK
          </h3>
          <h3 className="text-[64px] mt-3 mb-9 sm:w-auto font-bold bg-black text-primary px-2 py-6        ">
            PRODUCT DESIGN
          </h3>
        </div>
        <div className="text-3xl sm:w-[90%]  space-y-6 ">
          <p>
            <span className="clash font-semibold">
              Over the past two years,{" "}
            </span>
            <span className="clash">
              I’ve collaborated with companies and start-ups to shape products
              that seamlessly integrate into people's lives
            </span>
          </p>
          <p className="clash">
            I focus on balancing functionality with aesthetics, ensuring every
            product I touch is both beautiful and efficient, making a lasting
            difference in how people interact with technology.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-[32px] ">
        {[
          { name: "MYHOMEETAL", link: "/works/case-studies" },
          { name: "NEXGEN", link: "/works/case-studies" },
          { name: "STRATEGIES", link: "/works/strategies" },
          { name: "BRANDING", link: "/works/branding" },
        ].map((d, id) => {
          return <Container key={id} name={d.name} link={d.link} />;
        })}
      </section>
    </main>
  );
}

export default Page;
