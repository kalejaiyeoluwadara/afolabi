import React from "react";
import { icons } from "@/app/utils";
import Image from "next/image";
function InputField({ label, name, value, placeholder, onChange }) {
  return (
    <section>
      <p className="text-2xl font-bold stratosBold">{label.toUpperCase()}</p>
      <input
        type="text"
        className="w-full mt-[23px] text-2xl fs placeholder:text-2xl placeholder:font-bold placeholder:stratosBold border-none outline-none bg-none"
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

  return (
    <main className="h-full flex flex-col justify-between ">
      <main>
        <h2 className="uppercase mb-6 text-2xl">LET ME GET TO KNOW YOU</h2>
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
      <div className="grid grid-cols-3 h-[80px] mt-[32px] gap-[23px]  ">
        <button
          onClick={() => setActive(1)}
          className="h-full w-auto flex-center border-2 border-dashed  text-[32px] fs gap-2 border-black rounded-[15px] "
        >
          <Image height={32} width={32} src={icons.returnImg} alt="nav" />
          RETURN
        </button>
        <button
          onClick={() => setActive(3)}
          className="h-full col-span-2 bg-black text-white bg-opacity-[0.5] rounded-[15px] fs text-[32px]  w-auto  flex-center "
        >
          NEXT
          <Image height={32} width={32} src={icons.right} alt="nav" />
        </button>
      </div>
    </main>
  );
}

export default Sections2;
