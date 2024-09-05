"use client";
import React, { useState } from "react";
import { icons } from "@/app/utils";
import Image from "next/image";

function Sections1({ setActive, details, setDetails }) {
  const projectTypes = [
    "Branding",
    "Web Design",
    "Marketing",
    "App Development",
    "Consulting",
  ];
  const [selectedProject, setSelectedProject] = useState(details.projectType);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setDetails((prev) => ({ ...prev, projectType: project }));
  };

  return (
    <div className="flex flex-col justify-between h-full pb-8">
      <div className="flex flex-col gap-4 ">
        <div className="text-[40px]">
          <h2 className="stratosBold font-bold">Bonjour,</h2>
          <h2 className="stratosBold font-bold">Got a Project?</h2>
        </div>
        <p className="text-2xl uppercase mb-5">What would you like to do?</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {projectTypes.map((project, id) => (
          <div
            key={id}
            onClick={() => handleProjectSelect(project)}
            className={`w-auto flex gap-[22px] items-center h-[60px] px-[18px] py-[15px] cursor-pointer bg-[#F5F2E8]`}
          >
            <div
              className={`h-[20px] w-[20px] border-[1px] ${
                selectedProject === project
                  ? "bg-black border-white"
                  : "border-black"
              }`}
            ></div>
            <h2>{project.toUpperCase()}</h2>
          </div>
        ))}
      </div>
      <button
        onClick={() => setActive(2)}
        className="mt-[27px] rounded-[15px] text-[32px] h-[70px] w-full text-white font-bold stratosBold flex gap-2 justify-center items-center uppercase bg-black bg-opacity-[0.5]"
      >
        Next
        <Image height={32} width={32} src={icons.right} alt="nav" />
      </button>
    </div>
  );
}

export default Sections1;
