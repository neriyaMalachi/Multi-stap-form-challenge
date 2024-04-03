"use client";
import Image from "next/image";
import React from "react";
import Arcadeicon from "@/assets/images/icon-arcade.svg";
import Advancedicon from "@/assets/images/icon-advanced.svg";
import Proicon from "@/assets/images/icon-pro.svg";
import { userStore } from "@/context/store";
const page = () => {
  const UpdateUser = userStore((user: any) => user.updateName);
  const user = userStore((user: any) => user.user);

  return (
    <div className="body flex justify-center bg-slate-200 h-[573px] -mt-6 ">
      <div className="card bg-white w-[90%] h-[470px] rounded-xl -mt-[19%]">
        <div className="h-[30%]  flex flex-col p-6">
          <h1 className="font-Ubuntu-Bold text-2xl">Select your plan</h1>
          <p className="mt-4 text-slate-400">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="typesSelecte flex flex-col justify-between items-center h-[60%]">
          {/* Arcade */}
          <div
            onClick={() => {
              UpdateUser({
                subscription: "Arcade",
              });
            }}
            className="flex items-center w-[85%] p-3 rounded-md border border-slate-400  hover:border-blue-600"
          >
            <div>
              <Image src={Arcadeicon} alt="icon" />
            </div>
            <div className="flex flex-col ml-3">
              <h1 className="font-Ubuntu-Bold">Arcade</h1>
              <p>$9/mo</p>
            </div>
          </div>
          {/* Advanced */}
          <div
            onClick={() => {
              UpdateUser({
                subscription: "Advenced",
              });
            }}
            className="flex items-center w-[85%] p-3 rounded-md border border-slate-400  hover:border-blue-600"
          >
            <div>
              <Image src={Advancedicon} alt="icon" />
            </div>
            <div className="flex flex-col ml-3">
              <h1 className="font-Ubuntu-Bold">Advanced</h1>
              <p>$12/mo</p>
            </div>
          </div>
          {/* Pro */}
          <div
            onClick={() => {
              UpdateUser({
                subscription: "Pro",
              });
            }}
            className="flex items-center w-[85%] p-3 rounded-md border border-slate-400  hover:border-blue-600"
          >
            <div>
              <Image src={Proicon} alt="icon" />
            </div>
            <div className="flex flex-col ml-3">
              <h1 className="font-Ubuntu-Bold">Pro</h1>
              <p>$15/mo</p>
            </div>
          </div>
          {/* nonth or year */}
          <label className="w-[65%] mt-4 inline-flex items-center justify-around cursor-pointer">
            <p>Monthly</p>
            <input
              onClick={() => {
                if (user.month === true){

                  UpdateUser({
                    month: false,
                    yeare: true,
                  });
                }else{
                  UpdateUser({
                    month: true,
                    yeare: false,
                  });
                }
              }}
              type="checkbox"
              className="sr-only peer"
            />
            <div
              className="relative
           w-10 h-5 bg-gray-200 
           peer-focus:outline-none 
           peer-focus:ring-4 
           rounded-full peer 
           dark:bg-blue-500 
           peer-checked:after:translate-x-full 
           rtl:peer-checked:after:-translate-x-full 
           peer-checked:after:border-white 
           after:content-[''] 
           after:absolute after:top-[2px] 
           after:start-[4px] 
           after:bg-white 
           after:rounded-full 
           after:h-4 
           after:w-4 
           after:transition-all 
           "
            ></div>
            <p>yearly</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default page;
