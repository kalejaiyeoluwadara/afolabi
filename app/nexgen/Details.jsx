import Image from "next/image";
import React from "react";
import { images } from "@/app/utils";
function Details() {
  return (
    <main className="border-4 border-dashed rounded-[20px] border-black py-[70px] px-[50px] flex flex-col items-center   ">
      <div className="w-full h-[819px] rounded-[46px] overflow-hidden relative ">
        <Image
          src={images.branding}
          alt="branding"
          className="cover   scale-[1.1] h-full w-full z-20"
        />
      </div>

      <section className="mt-[180px]">
        <div>
          <h1 className="boldText">BRANDING AND WEB DESIGN</h1>
          <div className="mt-6 uppercase ">
            <p className="">
              Oyefeso was hired to invoke his creative approach to cook up a
              brand from scratch. During this project he found insight, deeper
              meaning, and became a more conscious designer as a whole.
            </p>
            <p className="mt-7  ">
              Journey with him as he creates a soon to be high grossing online
              academy, get some popcorn and drinks before you start scrolling,
              enjoy {"<3"}
            </p>
          </div>
        </div>

        {/* Branding */}
        <div className="mt-[180px]">
          <h1 className="boldText">LOGO FORMATION</h1>
          <div className="mt-6 uppercas ">
            <p className="">
              Nexgen’s stans in the online academy industry was a more tech
              refined approach, i decided to infuse that into the ideation
              process when i curated the brand’s logo.
            </p>
            <p className="mt-7 ">
              N+X were the major letters i focused on to ensure simplicity,
              eligibility and remains memorable.
            </p>
          </div>
          <div className="w-full mt-[180px] h-[519px] rounded-[46px] overflow-hidden relative ">
            <Image
              src={images.logo}
              alt="branding"
              className="cover h-full w-full z-20"
            />
          </div>
        </div>
        {/* logo iteration */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">LOGO Iterations</h1>
          <div className="mt-6 uppercas ">
            <p className="">
              Initially, i finalised on Logo A due to the fact that it embodied
              my guiding principle, simplicity, eligibility, story telling, and
              memorable. But, it still didn’t appeal to my sub-conscious,
              something wasn’t right. It felt almost like it was missing a very
              important part and i just couldn't figure out what that was.
            </p>
            <p className="mt-7 ">
              Was it too simple? I think deep down, i felt the logo was over
              simplified and barely told a story aside the N+ X , It didn’t
              embody what other academies strive for in a logo.
            </p>
          </div>
          <div className="w-full mt-[160px] h-[519px] rounded-[46px] overflow-hidden relative ">
            <Image
              src={images.iteration}
              alt="iteration"
              className="cover h-full w-full z-20"
            />
          </div>

          <p className="my-[180px]">
            So, I decided to go back to the drawing board. After a long day of
            sketching and testing multiple logo ideas, i came up with a logo
            mark i was sure would survive the test of time.
          </p>

          <div className="w-full h-[519px] rounded-[46px] overflow-hidden relative ">
            <Image
              src={images.iteration2}
              alt="iteration"
              className="cover h-full w-full z-20"
            />
          </div>
        </div>
        {/* Challenge */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">Challenge</h1>
          <div className="mt-6 ">
            <p className="">
              Finally, now we have a logo let’s address the problem nexgen aim’s
              to solve. The goal at nexgen is to create a seamless online
              education process were students can join communities, share
              resources, and learn, all from the comfort of their home.
            </p>
            <p className="my-7 ">
              Here is where i come in, i was tasked with designing a website
              that ensures the onboarding process for student is simple and
              informative.
            </p>
            <p>How did i go about it?</p>
          </div>
        </div>
        {/* Simplified user flow */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">Simplified user flow</h1>
          <div className="mt-6 ">
            <p className="">
              A simple flow highlighting the user’s onboarding journey, from
              opening the website to enrolling for one of the 6 courses Nexgen
              offers their students.
            </p>
            <div className="w-full mt-[160px] h-[533px] rounded-[46px] overflow-hidden relative ">
              <Image
                src={images.userflow}
                alt="iteration"
                className="cover   h-full w-full z-20"
              />
            </div>
          </div>
        </div>
        {/* landing page */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">landing PAGE</h1>
          <div className="mt-6  ">
            <p className="">
              The home page was meticulously crafted to ensure students have the
              best onboarding experience.
            </p>
          </div>
          <div className="w-full mt-[180px] h-[833px] rounded-[46px] overflow-hidden relative ">
            <Image
              src={images.landingpage}
              alt="iteration"
              className="cover h-full w-full z-20"
            />
          </div>
        </div>
        {/* course page */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">course PAGE</h1>
          <div className="mt-6 uppercas ">
            <p className="">
              Clear and consistent design, from the course details to the
              instructor details the page embodies my guiding principles.
            </p>
          </div>
          <div className="w-full mt-[180px] h-[797px] rounded-[46px] overflow-hidden relative ">
            <Image
              src={images.coursepage}
              alt="iteration"
              className="cover    h-full w-full z-20"
            />
          </div>
        </div>
        {/* PAYMENT & INVOICING  */}
        <div className="mt-[180px]">
          <h1 className="boldText uppercase ">course PAGE</h1>
          <div className="mt-6 ">
            <p className="">
              Payment to invoice uses a straight and direct payment method to
              ensure students have the best payment experience.
            </p>
          </div>
          <div className="w-full mt-[180px] h-[1020px] rounded-[46px] overflow-hidden relative ">
            <Image
              src={images.payment}
              alt="iteration"
              className="cover    h-full w-full z-20"
            />
          </div>
          <div className="w-full mt-[180px] h-[712px] rounded-[46px] overflow-hidden relative ">
            <Image
              src={images.plan}
              alt="iteration"
              className="cover h-full w-full z-20"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Details;
