import React from "react";
import "@/globals.css";

const NavBar = () => {
  return (
    <div className="navigation  w-[100%] h-[200px] flex justify-center items-center ">
      <div className="flex justify-evenly -mt-20 w-[50%]  ">
        {/* <button
          className={`buttonForNavigation ${
            window.location.pathname === "/ui/PersonalInfo"
              ? "text-purple-500 bg-white"
              : ""
          } border border-white rounded-full h-9 w-9 text-white font-bold text-center`}
        >
          1
        </button>
        <button
          className={`buttonForNavigation ${
            window.location.pathname === "/ui/SelectYourPlan"
              ? "text-purple-500 bg-white"
              : ""
          } border border-white rounded-full h-9 w-9 text-white font-bold text-center`}
        >
          2
        </button>
        <button
          className={`buttonForNavigation ${
            window.location.pathname === "/ui/PickAddOns"
              ? "text-purple-500 bg-white"
              : ""
          } border border-white rounded-full h-9 w-9 text-white font-bold text-center`}
        >
          3
        </button>
        <button
          className={`buttonForNavigation ${
            window.location.pathname === "/ui/FinishingUp"
              ? "text-purple-500 bg-white"
              : ""
          } border border-white rounded-full h-9 w-9 text-white font-bold text-center`}
        >
          4
        </button> */}
      </div>
    </div>
  );
};
export default NavBar;
