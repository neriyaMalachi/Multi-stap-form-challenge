"use client";
import React, { useEffect } from "react";
import "@/globals.css";
import { userStore } from "@/context/store";
import axios from "axios";

const page = () => {
  const user = userStore((state: any) => state.user);
  const UpdateName = userStore((state: any) => state.updateName);

  const {users}:any = axios.get("/api/users");
  console.log({users});
  return (
    <>
      <div className="h-[30%]  flex flex-col p-6">
        <h1 className="font-Ubuntu-Bold text-2xl md:text-4xl">Personal info</h1>
        <p className="mt-4 text-slate-400 md:text-xl">
          Please provide your name, email addres, and phne number.
        </p>
      </div>
      <div className="inputs flex flex-col justify-evenly items-center h-[60%] md:items-start md:justify-between md:h-[65%] md:p-6">
        <div className="input">
          <p>Name</p>
          <input
            value={user.name}
            type="text"
            placeholder="e.g Stefhan King"
            className="border border-zinc-500 p-2 rounded-md w-[300px] md:w-[280%]"
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
            type="email"
            placeholder="e.g Stefhanking@lorem.com"
            className="border border-zinc-500 p-2 rounded-md w-[300px] md:w-[280%]"
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
            type="number"
            placeholder="e.g.+1 234 567 890"
            className="border border-zinc-500 p-2 rounded-md w-[300px] md:w-[280%]"
            onChange={(e: any) => {
              UpdateName({
                phoneNumber: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default page;
