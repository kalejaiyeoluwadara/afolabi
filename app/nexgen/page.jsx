import React from "react";
import Nav from "../components/Nav";
import NavBar from "../works/NavBar";
import Image from "next/image";
import { images } from "@/app/utils";
function Page() {
  return (
    <main className=" min-h-[100vh] bg-black w-full ">
      <div className=" w-full min-h-screen relative">
        <div className="w-full top-0 left-0 absolute ">
          <NavBar white={true} />
        </div>
        <Image
          src={images.nex}
          alt="background image"
          className="h-full w-full object-cover z-10 absolute top-0 -left-1 "
        />
      </div>
    </main>
  );
}

export default Page;
