"use client"; // Enables client-side rendering for this component

import { AnimatePresence, motion } from "framer-motion"; // Import framer-motion tools for animations
import { usePathname } from "next/navigation"; // Import hook to get the current route path

// Import the Stairs component (used for animated stairs effect)
import Stairs from "./Stairs";

// StairTransition component: Adds a smooth transition effect between pages
const StairTransition = () => {
  const pathname = usePathname(); // Get the current pathname (URL) of the page

  return (
    <>
      {/* AnimatePresence ensures animations for components that are added/removed */}
      <AnimatePresence mode="wait">
        {/* Unique key for transitions, triggered when the path changes */}
        <div key={pathname}>
          {/* Container for the Stairs component */}
          <div 
            className="h-screen w-screen fixed top-0 left-0 right-0 
            pointer-events-none z-40 flex"
          >
            {/* Render the Stairs component (animated stairs effect) */}
            <Stairs />
          </div>

          {/* Background overlay with fade-out animation */}
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" 
            // Full-screen fixed background, non-interactive
            initial={{ opacity: 1 }} // Start fully visible
            animate={{
              opacity: 0, // Fade out to invisible
              transition: { 
                delay: 1, // Wait 1 second before starting the fade
                duration: 0.4, // Fade lasts 0.4 seconds
                ease: "easeInOut", // Smooth easing for the fade effect
              },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition; // Export the component so it can be used elsewhere
