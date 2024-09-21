import Image from "next/image";
import React from "react";
import { images } from "@/app/utils";
import Link from "next/link";
function Details() {
  return (
    <main className="border-[3px] border-dashed rounded-[20px] border-black py-8 sm:py-[70px] px-4 sm:px-[50px] flex flex-col items-center   ">
      <div className="w-full h-[677px] sm:h-[819px] rounded-[15px] sm:rounded-[46px] overflow-hidden relative ">
        <Image
          src={images.warpImg}
          alt="branding"
          className="cover   scale-[1.1] h-full w-full z-20"
        />
      </div>
      <div className="mt-[80px]  flex-center w-full ">
        <div className="sm:w-[542px] border-dashed flex-center sm:h-[149px] border-2 border-black py-2 px-2 rounded-[25px] ">
          <Link
            className="sm:w-[502px] flex-center px-4 py-3 border-dashed text-[25px] sm:text-[40px] font-light text-center sm:h-[105px] border-2 border-black rounded-[15px]"
            href={"https://nexgen-academy-nu.vercel.app/"}
            target="_blank"
          >
            VIEW FULL PROJECT
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Details;
