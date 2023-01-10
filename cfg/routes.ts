export const routes: Route[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Our Work",
    href: "/our-work",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export interface Route {
  name: string;
  href: string;
  current?: boolean;
}
