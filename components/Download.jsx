"use client";

// Import the Button component from the UI library (custom UI button component)
import { Button } from "@/components/ui/button";
// Import the download icon (FiDownload) from react-icons for visual representation
import { FiDownload } from "react-icons/fi";

const Download = () => {
  // URL of the resume PDF file
  const resumeUrl = '/assets/JKCGaudiel_CV.pdf'; 

  // Function to handle the download action when the button is clicked
  const handleDownloadClick = () => {
    // Open the resume PDF in a new tab
    window.open(resumeUrl, '_blank');
  };

  return (
    // Render a button with specific styles and functionality
    <Button
      variant="outline"  // Apply the "outline" style variant (e.g., outlined border)
      size="lg"          // Set the button size to large
      className="uppercase flex items-center gap-2" // Apply custom classes for text transformation (uppercase), flexbox layout, and spacing
      onClick={handleDownloadClick} // Attach the click handler to trigger the download
    >
      {/* Button label */}
      <span>Download CV</span>
      {/* Icon for download (using react-icons) */}
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default Download;
