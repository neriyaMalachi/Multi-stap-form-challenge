import React from "react";

const page = () => {
  return (
    <div className="body flex justify-center bg-slate-200 h-[573px] -mt-6 ">
      <div className="card bg-white w-[90%] h-[420px] rounded-xl -mt-[19%]">
        <div className="h-[30%]  flex flex-col p-6">
          <h1 className="font-Ubuntu-Bold text-2xl">Finishing up</h1>
          <p className="mt-4 text-slate-400">
            Double-check evriting look OK before confirming.
          </p>
        </div>
        <div className="typesSelecte flex flex-col justify-between items-center  h-[60%]">
          <div className="flex flex-col items-center w-[85%] h-44 bg-slate-100 p-3 rounded-md   hover:border-blue-600">
            <div className="flex justify-between  w-[100%]  ml-3">
              <div className="flex flex-col">
                <h1 className="font-Ubuntu-Bold">Arcade (Monthly)</h1>
                <p className="text-slate-400">Change</p>
              </div>
              <p>$90/yr</p>
            </div>
            <div className="divide-y divide-red-900"/>
            
            <div className="flex w-[100%] justify-between">
              <h1 className="font-light">Online service</h1>
              <p>$9/mo</p>
            </div>{" "}
            <div className="flex w-[100%] justify-between">
              <h1 className="font-light">Arcade</h1>
              <p>$9/mo</p>
            </div>
            <div></div>
          </div>

          <div className="TotalPrice flex justify-between w-[75%]">
            <p>Total (per year)</p>
            <p className="text-blue-800 font-Ubuntu-Bold">$120/yr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
