"use client";
import Link from "next/link";
import React from "react";
import { userStore } from "@/context/store";
import axios from "axios";
const page = () => {
  const user = userStore((state: any) => state.user);
  axios.post("/api/users",{
    user
  });
  return (
    <>
      <div className="h-[30%]  flex flex-col p-6 md:p-0">
        <h1 className="font-Ubuntu-Bold text-2xl">Finishing up</h1>
        <p className="mt-4 text-slate-400">
          Double-check evriting look OK before confirming.
        </p>
      </div>
      <div className="typesSelecte flex flex-col justify-between items-center  h-[60%]">
        <div className="flex flex-col items-center w-[85%] h-44 bg-slate-100 p-3 rounded-md md:w-[100%] md:justify-evenly divide-y   hover:border-blue-600">
          <div className="flex justify-between  w-[100%]  ml-3 md:m-0">
            <div className="flex flex-col">
              <h1 className="font-Ubuntu-Bold">{user.subscriptionType}  {user.yeare ? <>(Yearly)</> : <>(Monthly)</>}</h1>
              <Link
                href={"/ui/SelectYourPlan"}
                className="text-blue-600 border-b border-blue-600 w-14"
              >
                Change
              </Link>
            </div>
            <p>
              ${user.Price}/{user.yeare ? <>yr</> : <>mo</>}
            </p>
          </div>

          <div className="md:flex md:flex-col md:items-center md:justify-around md:mt-3 w-[100%] ">
            {user.OnlineService ? (
              <div className="flex w-[100%]  justify-between md:w-[100%] md:mt-3 ">
                <h1 className="font-light">Online service</h1>
                <p>
                  ${user.yeare ? <>10</> : <>1</>}/
                  {user.yeare ? <>yr</> : <>mo</>}
                </p>
              </div>
            ) : (
              <></>
            )}
            {user.largerStorage ? (
              <div className="flex w-[100%] justify-between md:w-[100%] md:mt-3">
                <h1 className="font-light">larger storage</h1>
                <p>
                  ${user.yeare ? <>20</> : <>2</>}/
                  {user.yeare ? <>yr</> : <>mo</>}
                </p>
              </div>
            ) : (
              <></>
            )}
             {user.CustomizableProfile ? (
              <div className="flex w-[100%] justify-between md:w-[100%] md:mt-3">
                <h1 className="font-light">Customizable profile</h1>
                <p>
                  ${user.yeare ? <>20</> : <>2</>}/
                  {user.yeare ? <>yr</> : <>mo</>}
                </p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="TotalPrice flex justify-between w-[75%] md:w-[100%] md:p-4">
          <p>Total {user.yeare?<>(per year)</>:<>(per month)</>}</p>
          <p className="text-blue-800 font-Ubuntu-Bold">${user.Price}/ {user.yeare ? <>yr</> : <>mo</>}</p>
        </div>
      </div>
    </>
  );
};

export default page;
