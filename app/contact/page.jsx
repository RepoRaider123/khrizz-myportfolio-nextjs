"use client"; // This marks the file to be executed on the client side (React component)

import { useState } from "react"; // Import React's useState hook for state management
import { Button } from "@/components/ui/button"; // Custom Button component for UI
import { Input } from "@/components/ui/input"; // Custom Input component for form fields
import { Textarea } from "@/components/ui/textarea"; // Custom Textarea component for the message
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Icons for contact details
import { motion } from "framer-motion"; // For adding animations to the section
import validator from "validator"; // Import validator to handle input validation (like email and phone)

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+63) 949 477 5263" }, // Static phone info
  { icon: <FaEnvelope />, title: "Email", description: "jkgaudielwork@gmail.com" }, // Static email info
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Imus City, Cavite" }, // Static address info
];

const Contact = () => {
  // State to store form field values
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // State to display success or error messages after form submission
  const [status, setStatus] = useState("");

  // Handle form input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target; // Get name and value from the input field
    setFormData((prevState) => ({ ...prevState, [name]: value })); // Update state with new value for the specific field
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setStatus("Sending..."); // Show "Sending..." message while form is being submitted

    // Check if email and message fields are filled
    if (!formData.email || !formData.message) {
      setStatus("The message and email field are required."); // Show error if required fields are empty
      return;
    }

    // Validate email format using the validator library
    if (!validator.isEmail(formData.email)) {
      setStatus("Invalid email address."); // Show error if the email is invalid
      return;
    }

    // Validate phone number format if provided
    if (formData.phone && !validator.isMobilePhone(formData.phone.trim(), "any")) {
      setStatus("Invalid phone number."); // Show error if phone number is invalid
      return;
    }

    // Try sending the form data to the backend API
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Set content type for JSON request
        body: JSON.stringify(formData), // Send form data as JSON to the backend
      });

      // Handle response from the backend
      if (!response.ok) {
        const errorText = await response.text(); // Read the error message from the response
        console.error("Error response:", errorText);
        setStatus(`Failed to send message: ${errorText}`);
        return;
      }

      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json(); // Parse the JSON response
        setStatus("Message sent successfully!"); // Show success message
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          subject: "",
          message: "", // Reset form fields after successful submission
        });
      } else {
        const errorText = await response.text();
        console.error("Expected JSON response, but got:", errorText);
        setStatus("An unexpected error occurred.");
      }
    } catch (error) {
      console.error("Error occurred while sending the message:", error);
      setStatus("An error occurred while sending the message."); // Show error message in case of network issues
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }} // Initial opacity for the animation effect
      animate={{
        opacity: 1, // Set the final opacity after the animation
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, // Set animation timing
      }}
      className="py-6" // Apply vertical padding to the section
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form Section */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-8 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit} // Handle form submission
              autoComplete="off" // Disable browser auto-complete for form fields
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60 text-justify">
                Looking to join a dynamic team! Reach out to discuss how my skills can contribute to your company's success.
              </p>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <div className="relative grid">
                  <span className="absolute top-[-20px] text-red-500 text-sm">*</span>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <span className="absolute top-[-20px] text-red-500 text-sm">*</span>
                <Textarea
                  className="h-[200px]"
                  name="message"
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-20">
                <Button className="w-40" size="md" type="submit">
                  Send message
                </Button>

                {/* Status Message */}
                {status && <p className="text-white">{status}</p>}
              </div>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
