import Link from "next/link";
import React from "react";

function Foot() {
  return (
    <footer
      className={`h-[488px] rounded-[20px] text-white mt-[58px] w-full bg-black px-7 py-4 flex  flex-col justify-between  `}
    >
      <div className="flex text-base font-normal flex-col mt-4 ">
        <p className=" uppercase ">OYEFESO Selected Work</p>
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
        <div className="flex gap-4 ">
          {[
            { title: "INSTAGRAM", link: "link" },
            { title: "BEHANCE", link: "link" },
            { title: "LINKEDIN", link: "link" },
            { title: "FIGMA", link: "link" },
          ].map((d, id) => {
            return (
              <Link className="text-3xl font-semibold " href={d.link} key={id}>
                {d.title}
              </Link>
            );
          })}
        </div>
        <div className="h-[60px] w-[60px] rounded-full bg-gray-300  "></div>
      </div>
    </footer>
  );
}

export default Foot;
