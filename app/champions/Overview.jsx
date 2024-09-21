import React from "react";

function Overview() {
  return (
    <section className="py-10">
      <div className="   border-[3px] border-dashed border-black rounded-[20px] w-full h-auto  px-4 sm:px-[33px] py-10 ">
        <h1 className="text-5xl uppercase stratosBold ">Overview</h1>
        <p className="mt-6 ">
          Warp allows users to virtually travel back in time and experience
          historical moments firsthand. Whether it’s ancient Rome, the moon
          landing, or even personal memories from stored content, users can dive
          into these experiences through VR.
        </p>
        <p className="mt-6 ">
          The app integrates both entertainment and education, offering virtual
          guides, peer experiences, and purchasable content like new historical
          scenes, personalized tours, or premium headsets.
        </p>
      </div>
    </section>
  );
}

export default Overview;
