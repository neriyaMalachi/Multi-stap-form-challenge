"use client";
import "tailwindcss/tailwind.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "@/app/(client)/NavBar";
import Footer from "@/app/(client)/Footer";
import "@/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <NavBar />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        {window.location.pathname === "/ui/ThankYouFile" ? <></> : <Footer />}
      </body>
    </html>
  );
}
