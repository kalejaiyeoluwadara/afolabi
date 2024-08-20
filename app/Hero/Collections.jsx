import React from "react";

const Container = ({ name }) => {
  return (
    <section className=" w-auto border flex justify-between items-center rounded-[20px] flex-col h-[218px] ">
      <p className="uppercase text-[32px] font-semibold w-full text-center mt-6 ">
        {name}
      </p>
      <div className="h-[119px] bg-black w-full rounded-[10px] "></div>
    </section>
  );
};
function Collections() {
  return (
    <main className=" w-full grid mt-[132px] mb-[41px] grid-cols-2 sm:grid-cols-4 gap-8 ">
      {["CASE STUDIES", "STRATEGIES", "BRANDING", "PRODUCT DESIGN"].map(
        (d, id) => {
          return <Container name={d} key={id} />;
        }
      )}
    </main>
  );
}

export default Collections;
