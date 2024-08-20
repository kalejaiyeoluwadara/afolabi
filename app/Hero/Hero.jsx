import React from "react";

function Hero() {
  return (
    <main className="flex-center w-screen overflow-x-hidden ">
      <div className="flex-center mt-16 flex-col ">
        <h1 className="uppercase font w-[952px] leading-[80px] text-center text-black ">
          product designer, CREATIVE DIRECTOR, INTERACTIVE DESIGNER BASED IN
          NIGERIA.
        </h1>
        <div className="w-[265px] mb-8 mt-4 h-[80px] border-black rounded-full border-[1.5px] flex-center border-dashed ">
          <div className=" font-medium w-[242px] border rounded-full h-[60px] flex-center ">
            MY COLLECTIONS
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
