"use client";

import { motion } from "framer-motion"; // Import motion from framer-motion for adding animations
import Image from "next/image"; // Import Image from Next.js for optimized image handling

// Photo component definition
const Photo = () => {
  return (
    // Main container for the photo and animations
    <div className="w-full h-full relative">
      {/* Motion wrapper to fade in the photo and animations */}
      <motion.div
        initial={{ opacity: 0 }} // Start invisible (opacity 0)
        animate={{
          opacity: 1, // Fade in (opacity 1)
          transition: { delay: 2, duration: 0.4, ease: "easeIn" }, // Delay and smooth fade effect
        }}
      >
        {/* Wrapper for the image animation */}
        <motion.div
          initial={{ opacity: 0 }} // Start invisible (opacity 0)
          animate={{
            opacity: 1, // Fade in (opacity 1)
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }, // Slightly delayed fade-in
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute" // Image container styling
        >
          {/* Display an optimized image using Next.js Image */}
          <Image
            src="/assets/mypicture2.png" // Path to the image file
            priority // Load this image before others for better performance
            quality={100} // Highest image quality
            fill // The image will fill the container dimensions
            alt="" // Alt text (should describe the image for accessibility)
            className="object-contain" // Ensure the image fits within the container without cropping
          />
        </motion.div>

        {/* Wrapper for the animated circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" // Set the size of the SVG
          fill="transparent" // Transparent fill inside the circle
          viewBox="0 0 506 506" // Define the coordinate system for the SVG
          xmlns="http://www.w3.org/2000/svg" // Required namespace for SVG
        >
          {/* Circle inside the SVG with animation */}
          <motion.circle
            cx="253" // X-axis center of the circle
            cy="253" // Y-axis center of the circle
            r="250" // Radius of the circle
            stroke="#00ff99" // Starting color of the circle's outline
            strokeWidth="4" // Thickness of the circle's outline
            strokeLinecap="round" // Rounded edges of the circle outline
            strokeLinejoin="round" // Rounded corners for the circle outline
            initial={{
              strokeDasharray: "24 10 0 0", // Dashed line pattern for the outline
              stroke: "#00ff99", // Initial outline color (green)
            }}
            animate={{
              // Animate the dashed pattern and rotation
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], // Cycle through patterns
              rotate: [120, 360], // Continuous rotation effect
              stroke: ["#00ff99", "#FFD700"], // Transition the outline color from green to gold
            }}
            transition={{
              duration: 20, // Total time for one animation cycle
              repeat: Infinity, // Repeat the animation forever
              repeatType: "reverse", // Reverse direction each time the animation completes
              ease: "easeInOut", // Smooth transition for the animation
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

// Export the Photo component so it can be used in other files
export default Photo;
