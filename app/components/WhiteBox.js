import React from "react";

function WhiteBox({ title }) {
  return (
    <div className="h-[50px] px-3 flex-center text-center text-lg sm:text-[24px] font-semibold bg-white text-black ">
      {title}
    </div>
  );
}

export default WhiteBox;
