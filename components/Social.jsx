// Importing necessary components and icons
import Link from "next/link"; // For navigation links
import { FaGithub, FaLinkedin, FaInstagram, FaViber, FaEnvelope } from "react-icons/fa"; // Social media icons

// Array containing social media data (icon and path)
const socials = [
  { 
    icon: <FaGithub />, // GitHub icon
    path: "https://github.com/RepoRaider123", // Link to GitHub profile
  },
  { 
    icon: <FaLinkedin />, // LinkedIn icon
    path: "https://www.linkedin.com/in/jan-khrizztiane-gaudiel-7a6274335", // Link to LinkedIn profile
  },
  { 
    icon: <FaInstagram />, // Instagram icon
    path: "https://www.instagram.com/jnkhne", // Link to Instagram profile
  },
  { 
    icon: <FaViber />, // Viber icon
    path: "viber://chat?number=%2B639494775263", // Link to initiate a Viber chat
  },
  { 
    icon: <FaEnvelope />, // Email icon
    path: "https://mail.google.com/mail/?view=cm&fs=1&to=jkgaudielwork@gmail.com", // Link to open Gmail with the recipient's email prefilled
  },
];

// Social Component: Renders a list of social media links
// Props:
// - containerStyles: CSS classes for the container styling
// - iconStyles: CSS classes for individual icon styling
const Social = ({ containerStyles, iconStyles }) => {
  return (
    // Container for all social media icons
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link 
            key={index} // Unique key for each item in the array
            href={item.path} // URL for the social media link
            passHref // Ensures the `href` prop is passed correctly
            className={iconStyles} // Apply custom styles to the icon
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security by preventing access to `window.opener`
          >
            {item.icon} {/* Render the corresponding social media icon */}
          </Link>
        );
      })}
    </div>
  );
};

export default Social; // Export the Social component for use in other parts of the app
