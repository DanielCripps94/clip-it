"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Monitor, Menu } from "lucide-react";
import { useSession } from "next-auth/react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/clips", label: "Clips" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible((prevVisible) => {
        const visible =
          prevScrollPos > currentScrollPos || currentScrollPos < 10;

        setPrevScrollPos(currentScrollPos);
        return visible;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  const { data: session, status } = useSession();

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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6 text-white" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-lg font-medium hover:text-primary text-teal-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
