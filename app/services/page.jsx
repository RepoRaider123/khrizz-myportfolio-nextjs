"use client"; // This line ensures the component is used in a client-side rendered context in Next.js

// Importing necessary libraries
import Link from "next/link"; // Link component from Next.js for navigation
import { motion } from "framer-motion"; // Motion component for animations

// Defining the services array, each object contains details about a service
const services = [
  {
    num: "01", // Service number to display
    title: "Web Development", // Title of the service
    description: 
      "Building responsive and visually appealing websites using modern frameworks like React, Next.js, and other front-end technologies.", // Service description
    href: "" // Placeholder for the service page link (if any)
  },
  {
    num: "02",
    title: "Responsive Design",
    description: 
      "Ensuring your websites and apps work flawlessly on all screen sizes (from mobile to desktop) using techniques like CSS Grid, Flexbox, and media queries.",
    href: ""
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: 
      "Designing user-friendly and aesthetically pleasing user interfaces to ensure a great user experience.",
    href: ""
  },
  {
    num: "04",
    title: "Website Optimization",
    description: 
      "Improving website performance through code optimization, image compression, and minimizing loading times.",
    href: ""
  },
  {
    num: "05",
    title: "Website Maintenance & Support",
    description: 
      "Providing ongoing support to ensure your client’s website stays updated, secure, and running smoothly.",
    href: ""
  },
];

const Services = () => {
  return (
    <section className="min-h-[130vh] flex flex-col justify-center py-12 xl:py-0">
      {/* Main container for the services section */}
      <div className="container mx-auto">
        
        {/* Framer-motion component for animation effect */}
        <motion.div
          initial={{ opacity: 0 }} // Initial opacity (invisible)
          animate={{
            opacity: 1, // Final opacity (visible)
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, // Animation settings: delay, duration, easing
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" style={{ cursor: 'default' }} // Responsive grid layout (1 column on small screens, 2 columns on medium screens and up)
        >
          {/* Loop through the services array to display each service */}
          {services.map((service, index) => {
            return (
              <div 
                key={index} 
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* Service number, displayed in large font */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline 
                  text-transparent group-hover:text-outline-hover transition-all 
                  duration-500">
                    {service.num} {/* Display service number */}
                  </div>
                </div>

                {/* Service title */}
                <h2 className="text-[42px] font-bold leading-none text-white
                  group-hover:text-accent transition-all duration-500">
                  {service.title} {/* Display service title */}
                </h2>

                {/* Service description */}
                <p className="text-white/60">{service.description}</p>

                {/* Border line to visually separate services */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services; // Exporting the Services component for use in other parts of the app
