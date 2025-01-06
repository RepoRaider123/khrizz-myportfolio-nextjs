"use client"; // Enables client-side rendering for this component

import CountUp from "react-countup"; // Import CountUp for animated number counting

// Stats data: Array of objects, each containing a number and its description
const stats = [
  {
    num: 0, // The number to display
    text: "Years of experience", // Description for the number
  },
  {
    num: 6,
    text: "Projects completed",
  },
  {
    num: 5,
    text: "Technologies mastered",
  },
  {
    num: 117,
    text: "Code commits",
  },
];

// Stats Component: Displays statistical information with animated counters
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0"> 
      {/* Section with padding at the top and bottom */}
      <div className="container mx-auto"> 
        {/* Centered container to hold the stats */}
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none" style={{ cursor: 'default' }}>
          {/* Loop through each item in the stats array */}
          {stats.map((item, index) => {
            return (
              <div
                key={index} // Unique key for each stat item
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                // Flex container for responsive alignment and spacing
              >
                {/* Animated counter for the number */}
                <CountUp
                  end={item.num} // Final number to count up to
                  duration={5} // Duration of the animation in seconds
                  delay={2} // Delay before starting the animation
                  className="text-4xl xl:text-6xl font-extrabold"
                  // Styling for the number (large and bold)
                />
                {/* Description text for the number */}
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                  // Dynamically adjust the maximum width based on text length
                >
                  {item.text} {/* Display the description */}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats; // Export the Stats component for use in other parts of the app
