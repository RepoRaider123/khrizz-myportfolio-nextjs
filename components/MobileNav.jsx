"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Import components for the mobile menu
import { usePathname } from "next/navigation"; // Import to get the current page URL
import Link from "next/link"; // Import Link to enable navigation between pages
import { CiMenuFries } from "react-icons/ci"; // Import menu icon for mobile view

// Array of navigation links with their names and paths
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

const MobileNav = () => {
  const pathname = usePathname(); // Get the current page URL to highlight the active link

  return (
    <Sheet>
      {/* The trigger button to open the mobile menu */}
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" /> {/* Menu icon */}
      </SheetTrigger>

      {/* The content of the mobile menu */}
      <SheetContent className="flex flex-col">
        
        {/* Logo Section */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Khrizz<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`
                  ${link.path === pathname && "text-accent border-b-2 border-accent"} 
                  text-xl capitalize hover:text-accent transition-all
                `}
              >
                {link.name} {/* Display the name of each link */}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
