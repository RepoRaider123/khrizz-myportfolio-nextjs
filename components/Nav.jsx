"use client";

import Link from "next/link"; // Import Link component from Next.js for navigation between pages
import { usePathname } from "next/navigation"; // Import usePathname hook to get the current page URL

// Array of navigation links with names and their corresponding paths
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname(); // Get the current page URL to highlight the active link

  return (
    <nav className="flex gap-8">
      {/* Loop through the links array to create navigation links */}
      {links.map((link, index) => {
        return (
          <Link
            href={link.path} // Link to the page specified by the path
            key={index} // Use index as the key for each link
            className={`
              ${link.path === pathname && "text-accent border-b-2 border-accent"} 
              capitalize font-medium hover:text-accent transition-all
            `}
          >
            {link.name} {/* Display the name of the link */}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
