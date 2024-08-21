import React from "react";
import Nav from "./components/Nav";

function NotFound() {
  return (
    <>
      <Nav />
      <div className="flex-center h-auto py-20 w-full  ">
        <p className=" w-[1037px] font-medium leading-tight text-[64px] text-center ">
          This page wandered off. Let’s get you back to inspiration.
        </p>
      </div>
    </>
  );
}

export default NotFound;
