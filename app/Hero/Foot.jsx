import Link from "next/link";
import React from "react";
import { icons } from "@/app/utils";
import { GoDotFill } from "react-icons/go";
import { GrLinkUp } from "react-icons/gr";
import Image from "next/image";
function Foot() {
  return (
    <footer
      className={`sm:min-h-[488px]  rounded-[20px] text-white mt-[38px] mb-[39px] w-full bg-black px-7 py-9 flex sm:items-start flex-center flex-col justify-between  `}
    >
      <div className="flex items-start justify-normal flex-center text-base font-normal flex-col mt-4 ">
        <p className=" uppercase text-base sm:text-[24px] ">
          OYEFESO Selected Work
        </p>
        <p className="text-base sm:text-[24px]">‘22 - ‘24</p>
      </div>
      <div className="w-full flex-center ">
        <h1 className="sm:text-[59px] sm:my-0 my-[34px] text-5xl uppercase text-center sm:leading-[80px] sm:w-[507px] font-semibold">
          Interested in worKING together?
        </h1>
      </div>
      <div className=" group w-full sm:px-0 px-4    flex-col flex-center  sm:mt-[49px] sm:mb-[71px] ">
        <p className="text-primary text-base group-hover:text-white  speed ">
          DROP AN EMAIL
        </p>
        <p className="sm:text-2xl text-base w-full sm:w-auto text-center group-hover:text-primary cursor-pointer speed underline uppercase ">
          Oyefesoafolabiteniola@gmail.com
        </p>
      </div>
      <div className="flex sm:flex-row flex-col-reverse  justify-between items-center w-full  ">
        <p className="text-[#747474] text-base ">MY AHA MOMENT</p>
        <div className=" hidden sm:flex uppercase text-[30px] items-center gap-4 ">
          <Link href={"/"} className="hover:text-primary speed ">
            instagram
          </Link>
          <GoDotFill size={10} />
          <Link href={"/"} className="hover:text-primary speed ">
            behance
          </Link>
          <GoDotFill size={10} />
          <Link href={"/"} className="hover:text-primary speed ">
            linkedin
          </Link>
          <GoDotFill size={10} />
          <Link href={"/"} className="hover:text-primary speed ">
            figma
          </Link>
        </div>
        <Link href={"#nav"}>
          <div className="h-[60px] sm:my-0 my-[39px] w-[60px] flex-center rounded-full group relative overflow-hidden bg-[#D9D9D9]  ">
            <div className="h-[85px] w-[85px] absolute  rounded-full top-20  group-hover:top-[-4px] group-hover:left-[-10px] bg-black speed " />
            <GrLinkUp
              size={20}
              className="z-20 group-hover:text-white text-black speed group-hover:translate-y-[-12px] "
            />
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default Foot;
