"use client";
import React, { useEffect, useState } from "react";
import { classNames } from "@/utils";
import { usePathname } from "next/navigation";

interface Tab {
  name: string;
  href: string;
  current: boolean;
}

const Tabs: React.FC = () => {
  const path = usePathname();
  const [tabs, setTabs] = useState<Tab[]>([
    {
      name: "About",
      href: "/",
      current: false,
    },
    {
      name: "Projects",
      href: "/projects",
      current: false,
    },
    {
      name: "Essays",
      href: "/essays",
      current: false,
    },
    {
      name: "Reading",
      href: "/reading",
      current: false,
    },
  ]);

  useEffect(() => {
    const updatedTabs = tabs.map((tab: Tab) => ({
      ...tab,
      current: tab.href === path,
    }));
    setTabs(updatedTabs);
  }, [path]);

  return (
    <nav className="flex flex-col" aria-label="Sidebar">
      <ul role="list" className="">
        {tabs.map((tab: Tab) => (
          <li key={tab.name}>
            <a
              href={tab.href}
              className={classNames(
                tab.current
                  ? "text-purple-800 opacity-70"
                  : "text-gray-700 hover:text-purple-800 hover:opacity-70",
                "group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold",
              )}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
