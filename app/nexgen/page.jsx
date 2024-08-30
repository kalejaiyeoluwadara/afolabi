import React from "react";
import Nav from "../components/Nav";
import NavBar from "../works/NavBar";
import Image from "next/image";
import { images } from "@/app/utils";
import WhiteBox from "../components/WhiteBox";
import Swapy from "../components/Swapy";
import Foot from "../Hero/Foot";
function Page() {
  return (
    <main className=" min-h-[100vh] bg-foreground w-full ">
      <div className=" w-full flex items-end bg-black justify-end pb-20 min-h-screen relative">
        <div className="w-full top-0 bg-black left-0 absolute ">
          <NavBar white={true} />
        </div>
        <Image
          src={images.nex}
          alt="background image"
          className="h-full w-[100vw] object-cover z-10 absolute top-0  "
        />
        <section className="w-full relative z-40 px-[21px] ">
          {/* bottom */}
          <div className="w-full  h-[109px] flex justify-between px-8 items-center text-white rounded-[15px] border-2 border-gray-400 border-dashed ">
            <div>
              <p>CLIENT: NEXGEN DIGITAL ACADEMY</p>
            </div>
            <div className="flex-center gap-[10px]">
              <WhiteBox title={"BRANDING"} />
              <WhiteBox title={"WEB DESIGN"} />
              <p className="text-[24px] font-semibold ">‘24</p>
            </div>
          </div>
        </section>
      </div>
      {/* second section */}
      <section className="grid bg-foreground px-[21px] py-4 grid-cols-2 h-[733px] gap-8">
        {/* text div */}
        <div className="w-auto  uppercase text-[27px]  flex items-start justify-between flex-col h-full ">
          <div className="w-full px-[33px] py-10 h-[408px] border ">
            <p className="flex">
              <span className="px-2 py-2 bg-black text-[40px] font-extrabold text-white text-center flex-center mr-2 ">
                I
              </span>
              <span>
                crafted the branding and led the web design, sprinkling in{" "}
              </span>
            </p>
            <div className="  ">
              <p className="stratosLight mt-4 font-semibold ">
                colors and sleek elements to reflect NexGen's innovative vibe. I
                teamed up with Laytex for some web design magic, and Dara
                brought it all to life on the development side. The result?
              </p>
            </div>
          </div>
          <div className="w-full p-8 flex-center h-[253px] border-2 border-solid border-black rounded-[20px] ">
            <div className="h-full w-full border-black border-2 rounded-[20px] flex-center text-center border-dashed ">
              <p className="text-[48px] stratosLight font-bold ">
                VISIT LIVE SITE
              </p>
            </div>
          </div>
        </div>

        {/* Image div */}
        <div className="w-auto relative  overflow-hidden h-full ">
          <Image
            src={images.nex}
            className="h-full w-full left-0 top-0 rounded-[20px] bg-cover absolute "
          />
          <div className="h-[50px] rounded-[10px] absolute bottom-2 right-3 px-3 flex-center text-center text-[24px] font-semibold bg-white text-black">
            GALLERY
          </div>
        </div>
      </section>
      <section className="w-full bg-foreground pt-[116px] ">
        <Swapy />
      </section>
      <div className="px-[21px] w-full sm:-translate-y-[32px] bg-foreground pt-[116px] ">
        <Foot />
      </div>
    </main>
  );
}

export default Page;
