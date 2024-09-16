import React from "react";
import Nav from "../components/Nav";
import NavBar from "../works/NavBar";
import Image from "next/image";
import { images } from "@/app/utils";
import WhiteBox from "../components/WhiteBox";
import Swapy from "../components/Swapy";
import Foot from "../Hero/Foot";
import Role from "./Role";
import Overview from "./Overview";
import PageWrapper from "../PageWrapper";
import Details from "./Details";
function Page() {
  return (
    <PageWrapper>
      <main className=" min-h-[100vh] bg-foreground w-full ">
        <div className=" w-full flex items-end bg-black justify-end pb-8 sm:pb-20 min-h-screen relative">
          <div className="w-full top-0 px-5 bg-black left-0 absolute ">
            <NavBar white={true} />
          </div>
          <Image
            src={images.warp}
            alt="background image"
            className="h-full w-full object-cover z-10 absolute top-0  "
          />
          <section className="w-full relative z-40 px-[21px] ">
            {/* bottom */}
            <div className="w-full  h-auto sm:h-[109px] flex sm:gap-0 gap-5 sm:flex-row flex-col sm:justify-between px-4 sm:px-8 items-start sm:py-0 py-7 sm:items-center text-white rounded-[15px] border-2 border-gray-400 border-dashed ">
              <div>
                <p className="stratosBold font-bold text-xl sm:text-3xl">
                  WARP - VIRTUAL REALITY MOBILE APP DESIGN
                </p>
              </div>
              <div className=" w-full sm:w-auto flex-center justify-between gap-[10px]">
                <div className="flex  gap-2 ">
                  <WhiteBox title={"APP DESIGN"} />
                </div>
                <p className="text-[24px] font-semibold ">‘23</p>
              </div>
            </div>
          </section>
        </div>
        <section className=" px-4 sm:px-[21px]">
          {/* second section */}
          <Role />
          {/* Third section */}
          <Overview />
          <Details />
        </section>
        <section className="w-full bg-foreground pt-[116px] ">
          <Swapy />
        </section>
        <div className="px-[21px] w-full sm:-translate-y-[32px] bg-foreground pt-[116px] ">
          <Foot />
        </div>
      </main>
    </PageWrapper>
  );
}

export default Page;
