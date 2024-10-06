"use client";
import { NavContainer } from "@/layers/6-shared/nav-container/facade";
import { DesktopNavigation } from "@/layers/4-features/desktop-navigation";
import { MobileNavigation } from "@/layers/4-features/mobile-navigation/facade";
import { navItems } from "@/layers/5-entities/nav-items";
import { UserAvatar } from "@/layers/4-features/user-avatar/facade";

export function NavBar() {
  return (
    <NavContainer
      desktopNavigationElement={
        <DesktopNavigation navItems={navItems} avatarELement={<UserAvatar />} />
      }
      mobileNavigationElement={<MobileNavigation navItems={navItems} />}
    />
  );
}
