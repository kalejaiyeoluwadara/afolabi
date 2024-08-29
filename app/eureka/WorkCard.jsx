import React from "react";

function WorkCard() {
  return (
    <div className=" h-[654px] border-2 border-solid border-black flex-shrink-0 w-[1081px] rounded-[65px] bg-primary p-[34px] ">
      <div className="h-full w-full px-[90px] border-[4px] border-dashed flex-col flex-center rounded-[30px] border-black ">
        <p className="text-[64px] font-bold ">ZUMBOX TECHNOLOGIES</p>
        <p className="text-[32px] uppercase ">From mar 2024 - NOW</p>
        <p className="text-[48px] font-semibold mt-[39px] ">CREATIVE LEAD</p>
        <p className="text-[32px] uppercase text-center mb-[21px] flex-center ">
          I oversee the entire creative process, ensuring our work aligns with
          the brand's vision. Collaborating with various departments, I drive my
          team to push boundaries ensuring exceptional creative results.
        </p>
      </div>
    </div>
  );
}

export default WorkCard;
