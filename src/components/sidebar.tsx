"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Cloud,
  Code2,
  FileText,
  Home,
  LogOut,
  Menu,
  PhoneCall,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    href: "/nav/code-review",
  },
  {
    label: "Cloud Security",
    icon: <Cloud className="size-5" />,
    href: "/nav/security",
  },
  {
    label: "How to Use",
    icon: <FileText className="size-5" />,
    href: "/nav/guide",
  },
  {
    label: "Settings",
    icon: <Settings className="size-5" />,
    href: "/nav/settings",
  },
  {
    label: "Support",
    icon: <PhoneCall className="size-5" />,
    href: "/nav/support",
  },
  {
    label: "Logout",
    icon: <LogOut className="size-5" />,
    href: "/sign-in",
  },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const NavLinks = () => (
    <>
      {navItems
        .filter((item) => !["Support", "Logout"].includes(item.label))
        .map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center font-medium gap-3 whitespace-nowrap rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:hover:text-gray-50 ${
              pathName === item.href
                ? "bg-blue-600 text-white font-bold hover:bg-blue-700 hover:text-white"
                : "text-gray-500"
            }`}
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
            className="flex items-center font-medium gap-3 whitespace-nowrap rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
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
            <div className="flex items-center gap-2 px-2 whitespace-nowrap">
              <Image src="/logo.svg" alt="Logo" width={24} height={24} />
              <span className="font-semibold">CodeAnt AI</span>
            </div>
            <div className="px-2">
              <select className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                <option>omkardate</option>
                <option>omkardate</option>
                <option>omkardate</option>
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

      <div className="hidden fixed top-0 left-0 h-screen w-64 border-r md:block bg-white">
        <div className="flex h-full flex-col">
          <div className="flex h-[60px] items-center gap-2 px-6 whitespace-nowrap">
            <Image src="/logo.svg" alt="Logo" width={24} height={24} />
            <span className="font-semibold text-xl">CodeAnt AI</span>
          </div>
          <div className="px-3 py-2 mb-4">
            <select className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
              <option>omkardate</option>
              <option>omkardate</option>
              <option>omkardate</option>
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
