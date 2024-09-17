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

  const [selectedProjects, setSelectedProjects] = useState(
    details.projectType ? [details.projectType] : []
  );

  const handleProjectSelect = (project) => {
    setSelectedProjects((prev) => {
      if (prev.includes(project)) {
        return prev.filter((item) => item !== project);
      } else {
        return [...prev, project];
      }
    });
  };

  const handleNextClick = () => {
    setDetails((prev) => ({
      ...prev,
      projectType: selectedProjects.join(", "),
    }));
    console.log(details);

    setActive(2);
  };

  return (
    <div className="flex flex-col justify-between h-full ">
      <div className="flex flex-col gap-4 ">
        <div className="text-[40px]">
          <h2 className="stratosBold font-bold">Bonjour,</h2>
          <h2 className="stratosBold font-bold">Got a Project?</h2>
        </div>
        <p className=" text-lg sm:text-2xl font-clash font-semibold uppercase mb-5">
          What would you like to do?
        </p>
      </div>
      <div className="sm:grid h-[300px] overflow-y-scroll no-scrollbar flex flex-col grid-cols-2 gap-4">
        {projectTypes.map((project, id) => (
          <div
            key={id}
            onClick={() => handleProjectSelect(project)}
            className={`w-auto flex gap-[22px] items-center h-[60px] px-[18px] py-[15px] flex-shrink-0 cursor-pointer bg-[#F5F2E8]`}
          >
            <div
              className={`h-[20px] w-[20px] border-[1px] ${
                selectedProjects.includes(project)
                  ? "bg-black border-white"
                  : "border-black"
              }`}
            ></div>
            <h2>{project.toUpperCase()}</h2>
          </div>
        ))}
      </div>
      <button
        disabled={selectedProjects.length == 0}
        onClick={handleNextClick}
        className={`mt-[27px] ${
          selectedProjects.length == 0 && "cursor-not-allowed"
        } rounded-[15px] text-3xl h-[70px] w-full text-white font-bold stratosBold flex sm:mb-0 mb-6 gap-2 justify-center items-center uppercase ${
          selectedProjects.length > 0 ? "bg-black" : "bg-black bg-opacity-[0.5]"
        }`}
      >
        Next
        <Image height={32} width={32} src={icons.right} alt="nav" />
      </button>
    </div>
  );
}

export default Sections1;
