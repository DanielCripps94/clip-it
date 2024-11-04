type NavItem = {
  readonly href: string;
  readonly label: string;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/clips", label: "Clips" },
] as const satisfies readonly NavItem[];

const loggedInNavItems = [
  { href: "/profile", label: "Profile" },
  { href: "/upload", label: "Upload" },
  { href: "/logout", label: "Logout" },
];

// const navItems = [
//   { href: "/", label: "Home" },
//   { href: "/games", label: "Games" },
//   { href: "/clips", label: "Clips" },
// ];

type NavItems = typeof navItems;

export { navItems };
export type { NavItems, NavItem };
