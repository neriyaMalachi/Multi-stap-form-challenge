"use client";
import React, { useEffect, useState } from "react";
import "@/globals.css";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const host = usePathname();
  const steps = [
    {
      number: 1,
      stepTitle: "YOUR INFO",
      numberSteps: "STEP 1",
      host: host === "/ui/PersonalInfo",
    },
    {
      number: 2,
      stepTitle: "SELECT PLAN",
      numberSteps: "STEP 2",
      host: host === "/ui/SelectYourPlan",
    },
    {
      number: 3,
      stepTitle: "ADD-ONS",
      numberSteps: "STEP 3",
      host: host === "/ui/PickAddOns",
    },
    {
      number: 4,
      stepTitle: "SUMMARY",
      numberSteps: "STEP 4",
      host: host === "/ui/FinishingUp" || host === "/ui/ThankYouFile",
    },
  ];
  const windowS = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div
      className="navigation  
    w-[100%] h-[200px] flex justify-center items-center 
   md:m-3 md:w-[24%] md:h-[700px] md:items-start md:justify-start "
    >
      <div
        className="flex justify-evenly -mt-20 w-[50%]
       md:flex-col md:w-72 md:h-[50%] md:items-center md:mt-3 "
      >
        {steps.map((step) => {
          return (
            <div
              key={step.number}
              className="md:flex md:justify-evenly md:w-52 md:items-center "
            >
              <button
                className={`buttonForNavigation ${
                  step.host ? "text-purple-500 bg-white" : "text-white"
                } border border-white rounded-full h-9 w-9 font-bold text-center hover:cursor-default`}
              >
                {step.number}
              </button>
              {windowS && (
                <div className="text-white w-28">
                  <h1 className="font-Ubuntu-Bold ">{step.stepTitle}</h1>
                  <p>{step.numberSteps}</p>
                </div>
              ) }
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NavBar;
