import React, { useEffect } from "react";
import "@/globals.css";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { userStore } from "@/context/store";
import { usePathname } from "next/navigation";
const Footer = () => {
  const router = useRouter();
  const user = userStore((state: any) => state.user);
  const emailAddress = userStore((state: any) => state.emailAddress);
  const phoneNumber = userStore((state: any) => state.phoneNumber);
  const month = userStore((state: any) => state.month);
  const yeare = userStore((state: any) => state.yeare);
  const subscriptionType = userStore((state: any) => state.subscriptionType);

  const host = usePathname();

  const NextFile = () => {
    if (host === "/ui/PersonalInfo" && user && emailAddress && phoneNumber)
      router.push("/ui/SelectYourPlan");
    else if (
      host === "/ui/SelectYourPlan" && (month || yeare) && subscriptionType
    )
      router.push("/ui/PickAddOns");
    else if (host === "/ui/PickAddOns") router.push("/ui/FinishingUp");
    else if (host === "/ui/FinishingUp") router.push("/ui/ThankYouFile");
  };

  const BackFile = () => {
    if (host === "/ui/SelectYourPlan") router.push("/ui/PersonalInfo");
    else if (host === "/ui/PickAddOns") router.push("/ui/SelectYourPlan");
    console.log("dasds");
    
  };
   const back =useQuery({ queryKey: ["Back"], queryFn: BackFile });
   
  const { status, refetch, data } = useQuery({
    queryKey: ["Next"],
    queryFn: NextFile,
  });
  
  

  return (
    <div>
      {host === "ui/ThankYouFile" ? (
        <></>
      ) : (
        <div
          className={
            "futer flex justify-between items-center h-24  p-4 w-[100%]"
          }
        >
          <p
            onClick={() => BackFile()}
            className={`${
              host === "/ui/PersonalInfo" ? "text-white" : "text-black"
            }`}
          >
            Go Back
          </p>
          <button
            onClick={() => {
              refetch();
            }}
            className="button text-white p-3 rounded-md font-Ubuntu-Bold  "
          >
            {host === "/ui/FinishingUp" ? <p>Confirm</p> : <p>Next Step</p>}
          </button>
        </div>
      )}
    </div>
  );
};

export default Footer;
