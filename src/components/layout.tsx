import Header from "@/components/header";
import Tabs from "@/components/tabs";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 sm:p-24">
      <div className="flex mx-auto justify-between w-6/12 min-w-[275px]">
        <Header />
        <Tabs />
      </div>
      {children}
    </main>
  );
};

export default Layout;
