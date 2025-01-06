// Importing components used on the Home page
import Social from "@/components/Social"; // Component for social media icons
import Photo from "@/components/Photo"; // Component for displaying a profile photo
import Stats from "@/components/Stats"; // Component for displaying statistics
import Download from "@/components/Download"; // Component for a resume/download button

// Home Component: The main landing page of the portfolio
const Home = () => {
  return (
    <section className="h-full">
      {/* Full-page section container */}
      <div className="container mx-auto h-full">
        {/* Flex container for layout: text, photo, and other elements */}
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text content section */}
          <div className="text-center xl:text-left order-2 xl:order-none" style={{ cursor: 'default' }}>
            {/* Subtitle */}
            <span className="text-xl">IT Fresh Graduate</span>
            
            {/* Main heading */}
            <h1 className="h1 mb-6">
              Hello I'm <br /> 
              <span className="text-accent">Khrizz Gaudiel</span>
            </h1>
            
            {/* Introduction paragraph */}
            <p className="max-w-[500px] mb-9 text-white/80 text-justify">
              I am an IT graduate with a passion for crafting functional and visually engaging web solutions, <br />
              as well as software development. This portfolio showcases my projects and technical skills, 
              reflecting my dedication to creating user-friendly and innovative digital experiences. <br /> <br />
              Feel free to explore my work—I’m excited to collaborate and bring ideas to life!
            </p>
            
            {/* Download button and social media icons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Download /> {/* Button to download resume or relevant file */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6" // Styling for the social media container
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500" 
                  // Styling for individual social media icons
                />
              </div>
            </div>
          </div>
          
          {/* Profile photo section */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo /> {/* Displays the user's photo */}
          </div>
        </div>
      </div>
      
      {/* Statistics section */}
      <Stats /> {/* Displays statistics like projects completed, experience, etc. */}
    </section>
  );
};

export default Home; // Export the Home component for use in other parts of the app
