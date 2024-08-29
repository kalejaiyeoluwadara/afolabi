import React from "react";
import Nav from "../components/Nav";
import NavBar from "../works/NavBar";
import Image from "next/image";
import { images } from "@/app/utils";
function Page() {
  return (
    <main className=" min-h-[100vh] w-full ">
      <div className="px-[21px] w-full min-h-screen relative">
        <NavBar />
        <Image
          src={images.nex}
          alt="background image"
          className="h-full w-full object-cover z-10 absolute top-0 left-0 "
        />
      </div>
    </main>
  );
}

export default Page;
