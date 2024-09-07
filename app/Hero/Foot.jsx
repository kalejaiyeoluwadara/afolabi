import Link from "next/link";
import React from "react";
import { icons } from "@/app/utils";
import { GoDotFill } from "react-icons/go";
import { GrLinkUp } from "react-icons/gr";
import Image from "next/image";
function Foot() {
  return (
    <footer
      className={`min-h-[488px] rounded-[20px] text-white mt-[58px] w-full bg-black px-7 py-9 flex  flex-col justify-between  `}
    >
      <div className="flex text-base font-normal flex-col mt-4 ">
        <p className=" uppercase text-[24px] ">OYEFESO Selected Work</p>
        <p>‘22 - ‘24</p>
      </div>
      <div className="w-full flex-center ">
        <h1 className="text-[59px] uppercase text-center leading-[80px] w-[507px] font-semibold">
          Interested in worKING together?
        </h1>
      </div>
      <div className=" group w-full flex-col flex-center  mt-[49px] mb-[71px] ">
        <p className="text-primary text-base group-hover:text-white  speed ">
          DROP AN EMAIL
        </p>
        <p className="text-2xl group-hover:text-primary cursor-pointer speed underline uppercase ">
          Oyefesoafolabiteniola@gmail.com
        </p>
      </div>
      <div className="flex-center w-full  ">
        <div className="flex uppercase text-[30px] items-center gap-4 ">
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
