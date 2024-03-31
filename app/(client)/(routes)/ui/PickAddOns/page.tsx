"use client";
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
const page = () => {
  const [onlineService, setOnlineService] = useState(false);
  return (
    <div className="body flex justify-center bg-slate-200 h-[573px] -mt-6 ">
      <div className="card bg-white w-[90%] h-[380px] rounded-xl -mt-[19%]">
        <div className="h-[30%]  flex flex-col p-6">
          <h1 className="font-Ubuntu-Bold text-2xl">Pick add-ons</h1>
          <p className="mt-4 text-slate-400">
            Add ons help enhance your gaming experience.
          </p>
        </div>
        <div className="typesSelecte flex flex-col justify-evenly mt-4 items-center h-[65%]">
          {/* Online service */}
          <div
            onClick={() => {
              onlineService ? setOnlineService(false) : setOnlineService(true);
            }}
            className={`${
              onlineService ? "border-blue-600" : "border-slate-400"
            }flex items-center w-[93%] p-3 rounded-md border border-slate-400  hover:border-blue-600`}
          >
            <div className="flex justify-between  w-full items-center">
              <div className="flex items-center ">
                <button
                  className={`${
                    onlineService ? " bg-blue-800 text-white " : "bg-white text-white border"
                  } p-1 rounded-md font-Ubuntu-Bold`}
                >
                  <IoMdCheckmark />
                </button>
              </div>
              <div className="w-[60%]">
                <h1 className="font-Ubuntu-Bold text-sm">Online service</h1>
                <p className="text-xs text-slate-400">
                  Access to multiplayer games
                </p>
              </div>
              <div className="">
                <p className="text-sm">+$1/mo</p>
              </div>
            </div>
          </div>
          {/* larger storage */}
          <div className="flex items-center w-[93%] p-3 rounded-md border border-slate-400  hover:border-blue-600">
            <div className="flex justify-between  w-full items-center">
              <div className="flex items-center ">
                <button className="text-white bg-blue-800 p-1 rounded-md font-Ubuntu-Bold ">
                  <IoMdCheckmark />
                </button>
              </div>
              <div className="  w-[60%]">
                <h1 className="font-Ubuntu-Bold text-sm">larger storage</h1>
                <p className="text-xs text-slate-400">
                  Extra 1TB of cloud save
                </p>
              </div>
              <div className="">
                <p className="text-sm">+$2/mo</p>
              </div>
            </div>
          </div>
          {/*Customizable profile  */}
          <div className="flex items-center w-[93%] p-3 rounded-md border border-slate-400  hover:border-blue-600">
            <div></div>
            <div className="flex justify-between  w-full items-center">
              <div className="flex items-center ">
                <button className="text-white bg-blue-800 p-1 rounded-md font-Ubuntu-Bold ">
                  <IoMdCheckmark />
                </button>
              </div>
              <div className="w-[60%]">
                <h1 className="font-Ubuntu-Bold text-sm">
                  Customizable profile
                </h1>
                <p className="text-xs text-slate-400">
                  Custom theme on your profile
                </p>
              </div>
              <div className="">
                <p className="text-sm">+$2/mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
