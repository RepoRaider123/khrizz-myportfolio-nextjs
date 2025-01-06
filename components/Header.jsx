import Link from "next/link"; // Import the Link component from Next.js for navigation
import { Button } from "./ui/button"; // Import the Button component for the "Hire Me" button

// components
import Nav from "./Nav"; // Import the desktop navigation component
import MobileNav from "./MobileNav"; // Import the mobile navigation component

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      {/* Main container for the header */}
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo section */}
        <Link href="/">
          {/* This is the site logo. Clicking it will take you back to the homepage */}
          <h1 className="text-4xl font-semibold">
            Khrizz<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation and Hire Me button */}
        <div className="hidden xl:flex items-center gap-8">
          {/* Nav component for desktop */}
          <Nav />

          {/* Link to the contact page with a button to hire */}
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Navigation (visible only on smaller screens) */}
        <div className="xl:hidden">
          {/* Mobile navigation menu */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
