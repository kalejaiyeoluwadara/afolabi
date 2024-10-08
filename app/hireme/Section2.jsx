import React from "react";
import { icons } from "@/app/utils";
import Image from "next/image";

function InputField({ label, name, value, placeholder, onChange }) {
  return (
    <section>
      <p className=" text-xl sm:text-2xl font-bold stratosBold">
        {label.toUpperCase()}
      </p>
      <input
        type="text"
        className="w-full mt-[23px]  text-xl sm:text-2xl font-clash placeholder:font-clash placeholder:uppercase border-none outline-none bg-none"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </section>
  );
}

function Sections2({ active, setActive, details, setDetails }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const allFieldsFilled = details.name && details.email && details.companyName;

  return (
    <main className="h-full flex flex-col justify-between ">
      <main>
        <h2 className="uppercase font-clash font-semibold mb-6 text-lg sm:text-2xl">
          What would you like to do?
        </h2>
        <div className="flex gap-4 flex-col">
          {[
            { label: "Name", name: "name", placeholder: "Richard Hendricks" },
            {
              label: "Email",
              name: "email",
              placeholder: "RICHARD@EXAMPLE.COM",
            },
            {
              label: "Company Name",
              name: "companyName",
              placeholder: "ADRESS 124",
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
      </main>
      <div className=" flex flex-col sm:grid grid-cols-3 sm:h-[80px] mt-[32px] gap-4 sm:gap-[23px]  ">
        <button
          onClick={() => setActive(1)}
          className="  h-[60px]  sm:h-full w-auto flex-center border-2 border-dashed text-xl sm:text-3xl fs gap-2 border-black rounded-[15px] "
        >
          <Image height={32} width={32} src={icons.returnImg} alt="nav" />
          RETURN
        </button>
        <button
          disabled={!allFieldsFilled}
          onClick={() => allFieldsFilled && setActive(3)}
          className={`  h-[60px] sm:mb-0 mb-6 sm:h-full ${
            !allFieldsFilled
              ? "cursor-not-allowed bg-black bg-opacity-[0.5]"
              : " bg-black"
          } sm:col-span-2  text-white rounded-[15px] fs text-xl sm:text-3xl  w-auto flex-center `}
        >
          NEXT
          <Image height={32} width={32} src={icons.right} alt="nav" />
        </button>
      </div>
    </main>
  );
}

export default Sections2;
