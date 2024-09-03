import React from "react";

function Details() {
  return (
    <main className="border-4 border-dashed rounded-[20px] border-black py-[70px] px-[60px] flex flex-col items-center   ">
      <div className="w-full h-[519px] rounded-xl border-black border-2 border-dashed"></div>

      <section className="mt-[180px]">
        <div>
          <h1 className="boldText">BRANDING AND WEB DESIGN</h1>
          <div className="mt-6 uppercase text-[32px] ">
            <p>
              Oyefeso was hired to invoke his creative approach to cook up a
              brand from scratch. During this project he found insight, deeper
              meaning, and became a more conscious designer as a whole.
            </p>
            <p className="mt-7">
              Journey with him as he creates a soon to be high grossing online
              academy, get some popcorn and drinks before you start scrolling,
              enjoy {"<3"}
            </p>
          </div>
        </div>

        {/* Branding */}
        <div className="mt-[180px]">
          <h1 className="boldText">LOGO FORMATION</h1>
          <div className="mt-6 uppercase text-[32px] ">
            <p>
              Nexgen’s stans in the online academy industry was a more tech
              refined approach, i decided to infuse that into the ideation
              process when i curated the brand’s logo.
            </p>
            <p className="mt-7">
              N+X were the major letters i focused on to ensure simplicity,
              eligibility and remains memorable.
            </p>
          </div>
        </div>
        {/* logo iteration */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">LOGO Iterations</h1>
          <div className="mt-6 uppercase text-[32px] ">
            <p>
              Initially, i finalised on Logo A due to the fact that it embodied
              my guiding principle, simplicity, eligibility, story telling, and
              memorable. But, it still didn’t appeal to my sub-conscious,
              something wasn’t right. It felt almost like it was missing a very
              important part and i just couldn't figure out what that was.
            </p>
            <p className="mt-7">
              Was it too simple? I think deep down, i felt the logo was over
              simplified and barely told a story aside the N+ X , It didn’t
              embody what other academies strive for in a logo.
            </p>
          </div>
        </div>
        {/* Challenge */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">Challenge</h1>
          <div className="mt-6 uppercase text-[32px] ">
            <p>
              Finally, now we have a logo let’s address the problem nexgen aim’s
              to solve. The goal at nexgen is to create a seamless online
              education process were students can join communities, share
              resources, and learn, all from the comfort of their home.
            </p>
            <p className="mt-7">
              Here is where i come in, i was tasked with designing a website
              that ensures the onboarding process for student is simple and
              informative. How did i go about it?
            </p>
          </div>
        </div>
        {/* Simplified user flow */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">Simplified user flow</h1>
          <div className="mt-6 uppercase text-[32px] ">
            <p>
              A simple flow highlighting the user’s onboarding journey, from
              opening the website to enrolling for one of the 6 courses Nexgen
              offers their students.
            </p>
          </div>
        </div>
        {/* landing page */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">landing PAGE</h1>
          <div className="mt-6 uppercase text-[32px] ">
            <p>
              The home page was meticulously crafted to ensure students have the
              best onboarding experience.
            </p>
          </div>
        </div>
        {/* course page */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">course PAGE</h1>
          <div className="mt-6 uppercase text-[32px] ">
            <p>
              Clear and consistent design, from the course details to the
              instructor details the page embodies my guiding principles.
            </p>
          </div>
        </div>
        {/* PAYMENT & INVOICING  */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">course PAGE</h1>
          <div className="mt-6 uppercase text-[32px] ">
            <p>
              Payment to invoice uses a straight and direct payment method to
              ensure students have the best payment experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Details;
