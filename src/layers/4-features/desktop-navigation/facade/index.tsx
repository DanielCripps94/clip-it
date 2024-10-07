import { NavItem, NavItems } from "@/layers/5-entities/nav-items";
import Link from "next/link";

interface DesktopNavigationProps {
  avatarELement?: React.ReactNode;
  navItems: NavItems;
}

export const DesktopNavigation = ({
  navItems,
  avatarELement,
}: DesktopNavigationProps) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {navItems.map((item: NavItem) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-300 hover:text-white transition-colors"
        >
          <span>{item.label}</span>
        </Link>
      ))}
      {avatarELement}
    </div>
  );
};
