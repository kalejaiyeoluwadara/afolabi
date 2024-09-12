import Link from "next/link";
import React from "react";
import { icons } from "@/app/utils";
import { GoDotFill } from "react-icons/go";
import { GrLinkUp } from "react-icons/gr";
import Image from "next/image";
function Foot() {
  return (
    <footer
      className={`sm:min-h-[594px] h-[500px] rounded-[20px] text-white mt-[67px] sm:mt-[58px]  w-full bg-black px-7 pb-[71px] pt-10 sm:pt-[111px] flex  flex-col  `}
    >
      <div className="w-full flex-center ">
        <h1 className="sm:text-[59px] sm:my-0 my-[34px] text-5xl uppercase text-center sm:leading-[80px] sm:w-[507px] font-semibold">
          Interested in worKING together?
        </h1>
      </div>
      <div className=" group w-full flex-col flex-center  sm:mt-[49px] sm:mb-[71px] ">
        <p className="text-primary text-base group-hover:text-white  speed ">
          DROP AN EMAIL
        </p>
        <p className="sm:text-2xl text-base group-hover:text-primary cursor-pointer speed underline uppercase ">
          Oyefesoafolabiteniola@gmail.com
        </p>
      </div>
      <div className=" sm:mt-0 mt-10 flex-center w-full  ">
        <div className="flex uppercase text-sm sm:text-[30px] items-center gap-2 sm:gap-4 ">
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
      </div>
    </footer>
  );
}

export default Foot;
