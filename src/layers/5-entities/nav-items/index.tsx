type NavItem = {
  readonly href: string;
  readonly label: string;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/clips", label: "Clips" },
] as const satisfies readonly NavItem[];

// const navItems = [
//   { href: "/", label: "Home" },
//   { href: "/games", label: "Games" },
//   { href: "/clips", label: "Clips" },
// ];

type NavItems = typeof navItems;

export { navItems };
export type { NavItems, NavItem };
