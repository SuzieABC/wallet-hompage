import React from "react";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-w-[320px] overflow-x-hidden min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
