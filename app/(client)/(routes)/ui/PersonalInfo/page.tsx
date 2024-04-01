"use client";
import React from "react";
import "@/globals.css";
import { userStore } from "@/context/store";
const page = () => {
  const user = userStore((state: any) => state.user);
  const UpdateName = userStore((state: any) => state.updateName);
  const UpdateEmailAddress = userStore(
    (state: any) => state.UpdateEmailAddress
  );
  const UpdatePhoneNumber = userStore((state: any) => state.UpdatePhoneNumber);
  console.log(user);

  return (
    <div className="body flex justify-center bg-slate-200 h-[573px] -mt-6 ">
      <div className="card bg-white w-[90%] h-[470px] rounded-xl -mt-[19%]">
        <div className="h-[30%]  flex flex-col p-6">
          <h1 className="font-Ubuntu-Bold text-2xl">Personal info</h1>
          <p className="mt-4 text-slate-400">
            Please provide your name, email addres, and phne number.
          </p>
        </div>
        <div className="inputs flex flex-col justify-evenly items-center h-[60%]">
          <div className="input">
            <p>Name</p>
            <input
              value={user.name}
              type="text"
              placeholder="e.g Stefhan King"
              className="border border-zinc-500 p-2 rounded-md w-[300px]"
              onChange={(e: any) => {
                UpdateName({
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="input">
            <p>Email Address</p>
            <input
              value={user.emailAddress}
              type="text"
              placeholder="e.g Stefhanking@lorem.com"
              className="border border-zinc-500 p-2 rounded-md w-[300px]"
              onChange={(e: any) => {
                UpdateName({
                  emailAddress: e.target.value,
                });
              }}
            />
          </div>
          <div className="input">
            <p>Phone Number</p>
            <input
              value={user.phoneNumber}
              type="text"
              placeholder="e.g.+1 234 567 890"
              className="border border-zinc-500 p-2 rounded-md w-[300px]"
              onChange={(e: any) => {
                UpdateName({
                  phoneNumber: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
