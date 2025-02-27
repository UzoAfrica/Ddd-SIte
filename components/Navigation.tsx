"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Community", path: "/community" }
  // Add other navigation items here
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Decagon</span>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}