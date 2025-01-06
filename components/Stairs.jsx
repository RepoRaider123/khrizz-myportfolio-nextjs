import { motion } from "framer-motion"; // Import motion for adding animations

// Animation configuration for the stairs
const stairAnimation = {
  initial: {
    top: "0%", // Start at the top position
  },
  animate: {
    top: "100%", // Move to the bottom position
  },
  exit: {
    top: ["100%", "0%"], // Move back to the top position
  },
};

// Function to calculate reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6; // Total number of steps (6 in this case)
  return totalSteps - index - 1; // Calculate reverse order for animation delay
};

// Stairs component: Creates a staggered animation effect for 6 steps
const Stairs = () => {
  return (
    <>
      {/* Create 6 divs representing the steps of the stairs */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index} // Unique key for each step (required when rendering lists)
          variants={stairAnimation} // Attach animation settings to each step
          initial="initial" // Start with the "initial" animation state
          animate="animate" // Move to the "animate" state
          exit="exit" // Transition to the "exit" state when removed
          transition={{
            duration: 0.4, // Animation duration (0.4 seconds)
            ease: "easeInOut", // Smooth easing for animation
            delay: reverseIndex(index) * 0.1, // Staggered delay based on reverse index
          }}
          className="h-full w-full bg-white relative" // Styling for each step
        />
      ))}
    </>
  );
};

export default Stairs; // Export the Stairs component so it can be used in other parts of the app
