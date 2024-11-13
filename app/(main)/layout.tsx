"use client";
import { useUser } from "@clerk/nextjs";
import { BarLoader } from "react-spinners";
import { ReactNode } from "react";
import { BarChart, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/meetings", label: "Meeting", icon: Users },
  { href: "/availability", label: "Availability", icon: Clock },
];

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { isLoaded } = useUser();
  const pathName = usePathname();
  return (
    <>
      {!isLoaded && <BarLoader width="100%" color="#36d7b7" />}
      <div className="flex flex-col h-screen bg-blue-50 md:flex-row">
        <aside className="hidden md:block w-64 bg-white">
          <nav className="mt-8">
            <ul>
              {navItems.map(({ href, label, icon: Icon }) => {
                return (
                  <li key={href}>
                    <Link href={href} className={`${pathName === href ? "bg-blue-100" : ""} flex items-center p-4 text-gray-700 hover:bg-gray-100`}>
                      <Icon className="w-5 h-5 mr-3" />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <header className="flex justify-between items-center mb-4">
            <h2 className="text-5xl md:text-6xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full">{navItems.find((item) => item.label === pathName)?.label || "Dashboard"}</h2>
          </header>
          {children}
        </main>

        <nav className="md:hidden text-sm fixed bottom-0 left-0 right-0 bg-white shadow-md">
          <ul className="flex justify-around">
            {navItems.map(({ href, label, icon: Icon }) => {
              return (
                <li key={href}>
                  <Link href={href} className={`${pathName === href ? "text-blue-600" : "text-gray-600"} flex flex-col items-center py-2 px-4`}>
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default AppLayout;
