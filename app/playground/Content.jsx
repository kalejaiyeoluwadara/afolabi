import React from "react";

function Content() {
  return (
    <main className="overflow-x-scroll no-scrollbar gap-8  w-full px-0 flex sm:flex-row flex-col items-center  ">
      {[1, 2, 3, 4, 5].map((d, id) => {
        return (
          <div
            key={id}
            className="h-[507px] flex-center flex-shrink-0 w-[90vw] bg-black "
          >
            <p className=" font-clashb text-4xl sm:text-6xl text-white upper">
              IMAGE/VIDEO
            </p>
          </div>
        );
      })}
    </main>
  );
}

export default Content;
