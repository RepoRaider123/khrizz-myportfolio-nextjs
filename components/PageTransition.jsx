"use client"; // This enables client-side rendering for the component

import { AnimatePresence, motion } from "framer-motion"; // Import animation tools from framer-motion
import { usePathname } from "next/navigation"; // Import hook to get the current route path

// PageTransition Component: Adds smooth transitions between pages
const PageTransition = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname (URL) of the page

  return (
    <AnimatePresence> {/* Wrapper to enable animations for components that enter/exit */}
      <div key={pathname}> {/* Key ensures a unique transition for each page */}
        {/* Background overlay animation */}
        <motion.div
          initial={{ opacity: 1 }} // Start fully visible
          animate={{
            opacity: 0, // Animate to invisible
            transition: { 
              delay: 1, // Wait 1 second before starting the animation
              duration: 0.4, // Animation lasts 0.4 seconds
              ease: "easeInOut", // Smooth easing effect for animation
            },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" 
          // Full-screen background that is fixed, with no pointer events (non-interactive)
        />
        {children} {/* Render the page's content */}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition; // Export the component so it can be used elsewhere
