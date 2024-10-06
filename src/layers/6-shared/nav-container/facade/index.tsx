"use client";
import { Monitor } from "lucide-react";
import { useNavScroll } from "../hooks/use-nav-scroll";
import Link from "next/link";

interface NavContainerProps {
  desktopNavigationElement: React.ReactNode;
  mobileNavigationElement: React.ReactNode;
}

export const NavContainer = ({
  desktopNavigationElement,
  mobileNavigationElement,
}: NavContainerProps) => {
  const { visible } = useNavScroll();
  return (
    <nav
      className={`fixed w-full transition-transform duration-300 z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold flex items-center bg-gradient-to-r from-teal-500 to-indigo-500 text-transparent bg-clip-text"
            >
              <Monitor className="mr-2 h-6 w-6 text-teal-500" />
              ClipIt
            </Link>
            {desktopNavigationElement}
            {mobileNavigationElement}
          </div>
        </div>
      </div>
    </nav>
  );
};
