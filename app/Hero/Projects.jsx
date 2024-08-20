import React from "react";

function Projects() {
  return (
    <main className="flex flex-col items-center gap-[32px] ">
      {/* Time warp */}
      <section className="w-full flex items-end justify-start px-[29px] py-[46px] h-[404px] rounded-[20px] bg-primary  ">
        <div className="">
          <h2>TIMEWARP</h2>
          <h4>PRODUCT DESIGN</h4>
        </div>
      </section>

      {/* unito and log */}
      <section className="grid grid-cols-2 gap-[31px] justify-between w-full ">
        <div className="h-[404px]  bg-primary rounded-[20px] w-auto  px-6  ">
          <div className=" h-[404px] flex items-end justify-start w-full ">
            <div className="mb-10">
              <h2>TIMEWARP</h2>
              <h4>PRODUCT DESIGN</h4>
            </div>
          </div>
        </div>
        <div className="h-[404px]  bg-primary rounded-[20px] w-auto px-6 ">
          <div className=" h-[404px] flex items-start justify-start w-full ">
            <div className="mt-10">
              <h2>TIMEWARP</h2>
              <h4>PRODUCT DESIGN</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Pewton and Tim */}
      <section className="grid   grid-cols-3 w-full  gap-[31px]">
        <div className="h-[404px] col-span-2 bg-primary rounded-[20px] w-auto  px-6  ">
          <div className=" h-full flex items-end justify-end w-[692px] ">
            <div className="mb-10">
              <h2>TIMEWARP</h2>
              <h4>PRODUCT DESIGN</h4>
            </div>
          </div>
        </div>
        <div className="h-[404px]  bg-primary rounded-[20px] w-auto px-6 ">
          <div className="flex h-full items-start justify-end w-full ">
            <div className="mt-10">
              <h2>TIMEWARP</h2>
              <h4>PRODUCT DESIGN</h4>
            </div>
          </div>
        </div>
      </section>
      {/* last grid */}
      <section className="grid grid-cols-4 relative  grid-rows-2 w-full h-auto gap-[31px]  ">
        <div className="h-[404px] w-auto bg-primary rounded-[20px] "></div>
        <div className="h-[404px] col-span-2 w-auto bg-primary rounded-[20px] "></div>
        <div className="h-[559px] w-auto row-span-2 bg-primary rounded-[20px] "></div>
        <div className="h-[404px] w-auto col-span-3  bg-primary rounded-[20px] "></div>
        <div className="h-[250px] absolute bottom-0 right-0 w-[290px] bg-black rounded-[20px] "></div>
      </section>
    </main>
  );
}

export default Projects;
