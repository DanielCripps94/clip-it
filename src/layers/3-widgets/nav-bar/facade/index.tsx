import { NavContainer } from "@/layers/6-shared/nav-container/facade";
import { DesktopNavigation } from "@/layers/4-features/desktop-navigation";
import { MobileNavigation } from "@/layers/4-features/mobile-navigation/facade";
import { navItems } from "@/layers/5-entities/nav-items";
import { UserAvatar } from "@/layers/4-features/user-avatar/facade";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "~/auth-settings";

interface NavBarProps {
  session: Session | null | undefined;
}

export async function NavBar() {
  // const session = await getServerSession(authOptions);
  return (
    <NavContainer
      desktopNavigationElement={
        <DesktopNavigation
          navItems={navItems}
          // avatarELement={session && <UserAvatar session={session} />}
        />
      }
      mobileNavigationElement={<MobileNavigation navItems={navItems} />}
    />
  );
}
