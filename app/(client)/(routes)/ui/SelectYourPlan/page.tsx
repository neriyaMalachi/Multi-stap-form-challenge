"use client";
import Image from "next/image";
import React, { useState } from "react";
import Arcadeicon from "@/assets/images/icon-arcade.svg";
import Advancedicon from "@/assets/images/icon-advanced.svg";
import Proicon from "@/assets/images/icon-pro.svg";
import { userStore } from "@/context/store";
const Page = () => {
  const UpdateUser = userStore((user: any) => user.updateName);
  const user = userStore((user: any) => user.user);
  type TP = {
    title: String;
    icon: any;
    priceMonth: Number;
    priceYeare: Number;
  };
  const [Plans, setPlans] = useState<TP[]>([
    {
      title: "Arcade",
      icon: Arcadeicon,
      priceMonth: 9,
      priceYeare: 90,
    },
    {
      title: "Advenced",
      icon: Advancedicon,
      priceMonth: 12,
      priceYeare: 120,
    },
    {
      title: "pro",
      icon: Proicon,
      priceMonth: 15,
      priceYeare: 150,
    },
  ]);

  return (
    <div className="body flex justify-center bg-slate-200 h-[573px] -mt-6 md:bg-white 
    md:mt-0 md:w-[120%] md:h-[95vh] md:items-start ">
      <div className="card w-[90%] h-[620px] rounded-xl -mt-[19%]
      md:mt-0 md:w-[60%]   ">
        <div className="h-[20%]  flex flex-col p-9 ">
          <h1 className="font-Ubuntu-Bold text-2xl">Select your plan</h1>
          <p className="mt-4 text-slate-400">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="typesSelecte flex flex-col justify-evenly items-center h-[60%] md:flex-row md:h-[40%] md:w-[95%] ">
          {Plans.map((plan, index) => {
            return (
              <div
                key={index}
                onClick={async () => {
                  if (user.month) {
                    await UpdateUser({
                      subscriptionType: plan.title,
                      Price: plan.priceMonth,
                    });
                  } else {
                  await  UpdateUser({
                      subscriptionType: plan.title,
                      Price: plan.priceYeare,
                    });
                  }
                }}
                className={`flex items-center w-[85%] h-[29%] md:w-[25%] md:h-[80%] md:flex-col md:items-start md:justify-between  p-2 rounded-lg border border-slate-400  hover:border-blue-600 hover:bg-blue-50`}
              >
                <div className="h-16 ">
                  <Image src={plan.icon} alt="icon" />
                </div>
                <div className="flex flex-col ml-3 h-16">
                  <h1 className="font-Ubuntu-Bold">{plan.title}</h1>
                  {user.month ? (
                    <p>${plan.priceMonth.toString()}/mo</p>
                  ) : (
                    <p>${plan.priceYeare.toString()}/yr</p>
                  )}
                  {user.yeare ? (
                    <p className="text-xs">2 months free</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })}
          {/* nonth or year */}
        </div>
        <div className="flex flex-col items-center md:items-start md:ml-6 ">
          <label className="w-[85%] md:w-[90%] p-3 rounded-lg mt-4 inline-flex items-center justify-around cursor-pointer bg-slate-100 ">
            <p className={`${user.month ? "font-bold" : ""}`}>Monthly</p>
            <input
              onClick={() => {
                if (user.month === true) {
                  UpdateUser({
                    month: false,
                    yeare: true,
                    subscriptionType:"",
                    Price:0,
                  });
                } else {
                  UpdateUser({
                    month: true,
                    yeare: false,
                    subscriptionType:"",
                    Price:0,
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
            <p className={`${user.month ? "" : "font-bold"}`}>yearly</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Page;
