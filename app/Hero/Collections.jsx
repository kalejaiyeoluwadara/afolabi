import Link from "next/link";
import React from "react";
import Container from "../components/Container";
function Collections() {
  return (
    <main
      id="collections"
      className=" w-full grid mt-[132px] mb-[41px] grid-cols-2 sm:grid-cols-4 gap-8 "
    >
      {[
        { title: "CASE STUDIES", link: "/works/case-studies" },
        { title: "STRATEGIES", link: "/works/strategies" },
        { title: "BRANDING", link: "/works/branding" },
        { title: "PRODUCT DESIGN", link: "/works/product-design" },
      ].map((d, id) => {
        return <Container name={d.title} link={d.link} key={id} />;
      })}
    </main>
  );
}

export default Collections;
