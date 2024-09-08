import React from "react";
import Nav from "./components/Nav";
import PageWrapper from "./PageWrapper";
import Image from "next/image";
import { icons } from "@/app/utils";
function NotFound() {
  return (
    // <PageWrapper>
    <>
      <Nav />
      <div className="flex-center h-auto py-20 w-full  ">
        <p className=" relative w-[1037px]  font-semibold uppercase leading-[9rem] text-[128px] text-center ">
          This page wandered off. Let’s get you back to inspiration.
          <Image
            height={96}
            width={96}
            className="absolute right-[200px] top-[140px]"
            src={icons.sep}
            alt="icon"
          />
          <Image
            height={96}
            width={96}
            className="absolute left-[100px] bottom-12"
            src={icons.zero}
            alt="icon"
          />
        </p>
      </div>
    </>
    // </PageWrapper>
  );
}

export default NotFound;
