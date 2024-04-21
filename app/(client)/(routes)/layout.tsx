"use client";
import "tailwindcss/tailwind.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "@/app/(client)/NavBar";
import Footer from "@/app/(client)/Footer";
import "@/globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
const host =usePathname();
  return (
    <html lang="en">
      <body className="md:flex md:items-center">
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <div>
            <div className={`body ${host === "/ui/ThankYouFile" ? ('h-[79vh] '):''} flex justify-center bg-slate-200 h-[570px] -mt-6 md:bg-white md:mt-0 md:h-[90vh] md:w-[100%] md:items-center`}>
              <div className={`card bg-white w-[90%]  rounded-xl -mt-[19%] md:w-[60%] ${host === "/ui/PersonalInfo"?('h-[70%]'):host === "/ui/SelectYourPlan" ? ('h-[100%] md:h-[65%]'):host === "/ui/PickAddOns" ? ('h-[70%] md:h-[67%]'):host === "/ui/FinishingUp" ? ('h-[100%] md:h-[65%]'):host === "/ui/ThankYouFile" ? ('h-[70%] '):''}`}>
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
