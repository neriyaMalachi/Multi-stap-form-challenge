import React from "react";
import "@/globals.css";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const host = usePathname();

  return (
    <div className="navigation  w-[100%] h-[200px] flex justify-center items-center ">
      <div className="flex justify-evenly -mt-20 w-[50%]  ">
        <button
          className={`buttonForNavigation ${
           host === "/ui/PersonalInfo"
              ? "text-purple-500 bg-white"
              : "text-white"
          } border border-white rounded-full h-9 w-9 font-bold text-center`}
        >
          1
        </button>
        <button
          className={`buttonForNavigation ${
           host === "/ui/SelectYourPlan"
              ? "text-purple-500 bg-white"
              : "text-white"
          } border border-white rounded-full h-9 w-9  font-bold text-center`}
        >
          2
        </button>
        <button
          className={`buttonForNavigation ${
            host === "/ui/PickAddOns"
              ? "text-purple-500 bg-white"
              : "text-white"
          } border border-white rounded-full h-9 w-9 font-bold text-center`}
        >
          3
        </button>
        <button
          className={`buttonForNavigation ${
           host === "/ui/FinishingUp"
              ? "text-purple-500 bg-white"
              : "text-white"
          } border border-white rounded-full h-9 w-9  font-bold text-center`}
        >
          4
        </button>
      </div>
    </div>
  );
};
export default NavBar;
