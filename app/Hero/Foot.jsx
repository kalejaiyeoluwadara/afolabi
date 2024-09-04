import Link from "next/link";
import React from "react";
import { icons } from "@/app/utils";
import { GoDotFill } from "react-icons/go";
import { GrLinkUp } from "react-icons/gr";
import Image from "next/image";
function Foot() {
  return (
    <footer
      className={`min-h-[488px] rounded-[20px] text-white mt-[58px] mb-[39px] w-full bg-black px-7 py-9 flex  flex-col justify-between  `}
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
      <div className=" w-full flex-col flex-center  mt-[49px] mb-[71px] ">
        <p className="text-primary text-base ">DROP AN EMAIL</p>
        <p className="text-2xl underline uppercase ">
          Oyefesoafolabiteniola@gmail.com
        </p>
      </div>
      <div className="flex justify-between items-center w-full  ">
        <p className="text-[#747474] text-base ">MY AHA MOMENT</p>
        <div className="flex uppercase text-[30px] items-center gap-4 ">
          <Link href={"/"}>instagram</Link>
          <GoDotFill size={10} />
          <Link href={"/"}>behance</Link>
          <GoDotFill size={10} />
          <Link href={"/"}>linkedin</Link>
          <GoDotFill size={10} />
          <Link href={"/"}>figma</Link>
        </div>
        <Link href={"#nav"}>
          <div className="h-[60px] w-[60px] flex-center rounded-full group relative overflow-hidden bg-[#D9D9D9]  ">
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
