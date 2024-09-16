import React from "react";
import Foot from "../Hero/Foot";
import Overview from "./Overview";
import Content from "./Content";
import "./play.css";
import Nav from "../components/Nav";
import NavBar from "../works/NavBar";
function Page() {
  return (
    <main className="px-5">
      <NavBar />
      <div className="flex flex-col-reverse sm:flex-col ">
        <Content />
        <Overview />
      </div>
      <Foot />
    </main>
  );
}

export default Page;
