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
function Collections() {
  return (
    <main className=" w-full grid mt-[132px] mb-[41px] grid-cols-2 sm:grid-cols-4 gap-8 ">
      {[
        { title: "CASE STUDIES", link: "/works/case-studies" },
        { title: "STRATEGIES", link: "/works/case-studies" },
        { title: "BRANDING", link: "/works/case-studies" },
        { title: "PRODUCT DESIGN", link: "/works/case-studies" },
      ].map((d, id) => {
        return <Container name={d.title} link={d.link} key={id} />;
      })}
    </main>
  );
}

export default Collections;
