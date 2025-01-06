"use client";

import { useSwiper } from "swiper/react"; // Hook to control the Swiper instance
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"; // Icons for navigation buttons

/**
 * A component for custom Swiper navigation buttons.
 *
 * @param {string} containerStyles - Classes for the button container's styles.
 * @param {string} btnStyles - Classes for individual button styles.
 * @param {string} iconsStyles - Classes for the icon styles inside buttons.
 * @returns JSX element rendering navigation buttons for Swiper.
 */
const ProjectSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper(); // Access the current Swiper instance

  return (
    <div className={containerStyles}>
      {/* Button to slide to the previous item */}
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>

      {/* Button to slide to the next item */}
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default ProjectSliderBtns;

