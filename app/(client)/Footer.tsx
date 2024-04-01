import React, { useEffect } from "react";
import "@/globals.css";
import { useRouter } from "next/navigation";
const Footer = () => {
  const host = window.location.pathname;
  const router = useRouter();
  console.log(host);
  useEffect(()=>{
    NextFile
    BackFile
  })
  const NextFile = () => {
    if (host === "/ui/PersonalInfo") router.push("/ui/SelectYourPlan");
    else if (host === "/ui/SelectYourPlan") router.push("/ui/PickAddOns");
    else if (host === "/ui/PickAddOns") router.push("/ui/FinishingUp");
    else if (host === "/ui/FinishingUp") router.push("/ui/ThankYouFile");
  };
  const BackFile = () => {
    if (host === "/ui/SelectYourPlan") router.push("/ui/PersonalInfo");
    else if (host === "/ui/PickAddOns") router.push("/ui/SelectYourPlan");
  };
  return (
    <div className="futer flex justify-between items-center h-24 p-4  w-[100%]">
      <p
        onClick={BackFile}
        className={`${
          host === "/ui/PersonalInfo" ? "text-white" : "text-black"
        }`}
      >
        Go Back
      </p>
      <button
        onClick={NextFile}
        className="button text-white p-3 rounded-md font-Ubuntu-Bold  "
      >
        {host === "/ui/FinishingUp" ? <p>Confirm</p> : <p>Next Step</p>}
      </button>
    </div>
  );
};

export default Footer;
