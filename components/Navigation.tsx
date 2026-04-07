"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Us", path: "/contact" },
    { name: "Our Team", path: "/team" },
    { name: "Registration", path: "/register" },
    { name: "Top Scores", path: "/scores" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white py-6 border-b">
      <h1 className="text-5xl font-bold text-center mb-6">STEMgage</h1>
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex justify-around transition-all duration-300 ease-out">
          {tabs.map((tab) => {
            const isActive = pathname === tab.path;
            return (
              <Link
                key={tab.path}
                href={tab.path}
                className={`py-2 px-4 transition-all duration-300 ease-out transform ${
                  isActive
                    ? "border-b-2 border-black font-bold text-black opacity-100 scale-105"
                    : "text-gray-500 hover:text-gray-900 hover:opacity-100 opacity-80"
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
