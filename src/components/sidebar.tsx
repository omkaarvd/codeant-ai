"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Home,
  Code2,
  Cloud,
  FileText,
  Settings,
  PhoneCall,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Repositories", icon: <Home className="size-5" />, href: "/" },
  {
    label: "AI Code Review",
    icon: <Code2 className="size-5" />,
    href: "/code-review",
  },
  {
    label: "Cloud Security",
    icon: <Cloud className="size-5" />,
    href: "/security",
  },
  {
    label: "How to Use",
    icon: <FileText className="size-5" />,
    href: "/guide",
  },
  {
    label: "Settings",
    icon: <Settings className="size-5" />,
    href: "/settings",
  },
  {
    label: "Support",
    icon: <PhoneCall className="size-5" />,
    href: "/support",
  },
  { label: "Logout", icon: <LogOut className="size-5" />, href: "/sign-in" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Repositories");

  const NavLinks = () => (
    <>
      {navItems
        .filter((item) => !["Support", "Logout"].includes(item.label))
        .map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center font-medium gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:hover:text-gray-50 ${
              selectedItem === item.label
                ? "bg-blue-600 text-white font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedItem(item.label)}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
    </>
  );

  const BottomNavLinks = () => (
    <>
      {navItems
        .filter((item) => ["Support", "Logout"].includes(item.label))
        .map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center font-medium gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
    </>
  );

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="px-2 md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <div className="flex h-full flex-col gap-4">
            <div className="flex items-center gap-2 px-2">
              <Image src="/logo.svg" alt="Logo" width={24} height={24} />
              <span className="font-semibold">CodeAnt AI</span>
            </div>
            <div className="px-2">
              <select className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                <option>Organization 1</option>
                <option>Organization 2</option>
                <option>Organization 3</option>
              </select>
            </div>
            <nav className="flex flex-1 flex-col gap-1">
              <NavLinks />
            </nav>
            <div className="px-2">
              <BottomNavLinks />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="hidden border-r bg-gray-100/40 md:block dark:bg-gray-800/40">
        <div className="flex h-full flex-col">
          <div className="flex h-[60px] items-center gap-2 px-6">
            <Image src="/logo.svg" alt="Logo" width={24} height={24} />
            <span className="font-semibold text-xl">CodeAnt AI</span>
          </div>
          <div className="px-3 py-2">
            <select className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
              <option>OmkarDate</option>
              <option>OmkarDate</option>
              <option>OmkarDate</option>
            </select>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-3">
            <NavLinks />
          </nav>
          <div className="px-3 py-4">
            <BottomNavLinks />
          </div>
        </div>
      </div>
    </>
  );
}
