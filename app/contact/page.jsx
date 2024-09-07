import React from "react";
import Nav from "../components/Nav";
import Foot from "./ContactFoot";

function Page() {
  return (
    <main>
      <Nav />
      <div className="px-[21px]">
        <Foot />
      </div>
    </main>
  );
}

export default Page;
