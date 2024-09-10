import React from "react";
import { icons } from "@/app/utils";
import Image from "next/image";

function InputField({ label, name, value, placeholder, onChange }) {
  return (
    <section>
      <p className=" text-lg sm:text-2xl font-bold stratosBold">
        {label.toUpperCase()}
      </p>
      <input
        type="text"
        className="w-full mt-[23px]  text-lg sm:text-2xl font-clash placeholder:font-clash placeholder:uppercase border-none outline-none bg-none"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </section>
  );
}

function Sections3({ active, setActive, details, setDetails }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const allFieldsFilled = details.start && details.summary;

  return (
    <main className="h-full flex justify-between flex-col">
      <div className="flex flex-col items-start h-full justify-center ">
        <h2 className="uppercase mb-6 font-clash font-semibold text-lg sm:text-2xl">
          What would you like to do?
        </h2>
        <div className="flex gap-4 flex-col">
          {[
            {
              label: "Project start",
              name: "start",
              placeholder: "What’s your timeline?",
            },
            {
              label: "Project summary",
              name: "summary",
              placeholder: "a little summary ",
            },
          ].map((field) => (
            <InputField
              key={field.name}
              label={field.label}
              name={field.name}
              value={details[field.name]}
              placeholder={field.placeholder}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>
      <div className=" flex flex-col sm:grid grid-cols-3 sm:h-[80px] mt-[32px] gap-[23px]">
        <button
          onClick={() => setActive(2)}
          className=" h-20 sm:h-full w-auto flex-center border-2 border-dashed text-3xl fs gap-2 border-black rounded-[15px] "
        >
          <Image height={32} width={32} src={icons.returnImg} alt="nav" />
          RETURN
        </button>
        <button
          disabled={!allFieldsFilled}
          onClick={() => allFieldsFilled && setActive(4)}
          className={` h-20 sm:h-full ${
            !allFieldsFilled
              ? "cursor-not-allowed bg-black bg-opacity-[0.5]"
              : " bg-black"
          } col-span-2  text-white  rounded-[15px] fs text-3xl  w-auto flex-center `}
        >
          NEXT
          <Image height={32} width={32} src={icons.right} alt="nav" />
        </button>
      </div>
    </main>
  );
}

export default Sections3;
