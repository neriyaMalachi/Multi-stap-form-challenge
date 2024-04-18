import Link from "next/link";
import React from "react";

const page = () => {
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
              <h1 className="font-Ubuntu-Bold">Arcade (Monthly)</h1>
              <Link
                href={"#"}
                className="text-blue-600 border-b border-blue-600 w-14"
              >
                Change
              </Link>
            </div>
            <p>$90/yr</p>
          </div>

          <div className="md:flex md:flex-col md:items-center md:justify-around md:mt-3 w-[100%] ">
            <div className="flex w-[100%]  justify-between md:w-[100%] md:mt-3 ">
              <h1 className="font-light">Online service</h1>
              <p>$9/mo</p>
            </div>{" "}
            <div className="flex w-[100%] justify-between md:w-[100%] md:mt-3">
              <h1 className="font-light">Arcade</h1>
              <p>$9/mo</p>
            </div>
          </div>
        </div>

        <div className="TotalPrice flex justify-between w-[75%] md:w-[100%] md:p-4">
          <p>Total (per year)</p>
          <p className="text-blue-800 font-Ubuntu-Bold">$120/yr</p>
        </div>
      </div>
    </>
  );
};

export default page;
