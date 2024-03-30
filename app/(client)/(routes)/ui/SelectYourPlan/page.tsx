import Image from "next/image";
import React from "react";
import Arcadeicon from "@/assets/images/icon-arcade.svg";
import Advancedicon from "@/assets/images/icon-advanced.svg";
import Proicon from "@/assets/images/icon-pro.svg";

const page = () => {
  return (
    <div className="body flex justify-center bg-slate-200 h-[573px] -mt-6 ">
      <div className="card bg-white w-[90%] h-[470px] rounded-xl -mt-[19%]">
        <div className="h-[30%]  flex flex-col p-6">
          <h1 className="font-Ubuntu-Bold text-2xl">Select your plan</h1>
          <p className="mt-4 text-slate-400">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="inputs flex flex-col justify-evenly items-center h-[60%]">
          <div className="flex items-center w-[85%] p-3 rounded-md border border-slate-400  hover:border-blue-600">
            <div>
              <Image src={Arcadeicon} alt="icon" />
            </div>
            <div className="flex flex-col ml-3">
              <h1 className="font-Ubuntu-Bold">Arcade</h1>
              <p>$9/mo</p>
            </div>
          </div>
          <div className="flex items-center w-[85%] p-3 rounded-md border border-slate-400  hover:border-blue-600">
            <div>
              <Image src={Advancedicon} alt="icon" />
            </div>
            <div className="flex flex-col ml-3">
              <h1 className="font-Ubuntu-Bold">Advanced</h1>
              <p>$12/mo</p>
            </div>
          </div>
          <div className="flex items-center w-[85%] p-3 rounded-md border border-slate-400  hover:border-blue-600">
            <div>
              <Image src={Proicon} alt="icon" />
            </div>
            <div className="flex flex-col ml-3">
              <h1 className="font-Ubuntu-Bold">Pro</h1>
              <p>$15/mo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
