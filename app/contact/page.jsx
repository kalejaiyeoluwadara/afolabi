import React from "react";
import Nav from "../components/Nav";
import Foot from "./ContactFoot";
import PageWrapper from "../PageWrapper";

function Page() {
  return (
    <PageWrapper>
      <main>
        <Nav />
        <div className="px-[21px]">
          <Foot />
        </div>
      </main>
    </PageWrapper>
  );
}

export default Page;
