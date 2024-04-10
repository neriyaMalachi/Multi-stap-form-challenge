import React, { useEffect } from "react";
import "@/globals.css";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { userStore } from "@/context/store";
import { usePathname } from "next/navigation";
const Footer = () => {
  const router = useRouter();
  const user = userStore((state: any) => state.user);
  const host = usePathname();

  const NextFile = () => {
    if (
      host === "/ui/PersonalInfo" &&
      user.name &&
      user.emailAddress &&
      user.phoneNumber
    )
      router.push("/ui/SelectYourPlan");
    else if (host === "/ui/SelectYourPlan" && user.subscriptionType)
      router.push("/ui/PickAddOns");
    else if (host === "/ui/PickAddOns" && (user.OnlineService || user.largerStorage || user.CustomizableProfile)){

     router.push("/ui/FinishingUp");
    }
     else if (host === "/ui/FinishingUp") router.push("/ui/ThankYouFile");

    return 1;
  };
  const BackFile = () => {
    if (host === "/ui/SelectYourPlan") router.push("/ui/PersonalInfo");
    else if (host === "/ui/PickAddOns") router.push("/ui/SelectYourPlan");
  };
  const { refetch } = useQuery({
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
