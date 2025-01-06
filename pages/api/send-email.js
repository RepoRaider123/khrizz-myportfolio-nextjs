import nodemailer from "nodemailer"; // Import nodemailer for sending emails
import dotenv from "dotenv"; // Import dotenv for managing environment variables securely
import validator from "validator"; // Import validator for sanitization and validation

dotenv.config(); // Load environment variables from a .env file

// Handle incoming POST request to send the email
export default async function handler(req, res) {
  if (req.method === "POST") { // Only handle POST requests
    const { firstname, lastname, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!email || !message) {
      return res.status(400).json({ success: false, message: "Email and message fields are required." });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format." });
    }

    // Validate phone number if provided
    if (phone && !validator.isMobilePhone(phone, 'any')) {
      return res.status(400).json({ success: false, message: "Invalid phone number format." });
    }

    // Sanitize input data to prevent injection attacks
    const sanitizedFirstname = validator.escape(firstname);
    const sanitizedLastname = validator.escape(lastname);
    const sanitizedEmail = validator.escape(email);
    const sanitizedPhone = validator.escape(phone);
    const sanitizedSubject = validator.escape(subject);
    const sanitizedMessage = validator.escape(message);

    try {
      // Set up the email transporter using Gmail SMTP
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Gmail SMTP host
        port: 587, // SMTP port
        secure: false, // Use TLS/STARTTLS
        auth: {
          user: process.env.EMAIL_USER, // Email user (from .env)
          pass: process.env.EMAIL_PASS, // App-specific password (from .env)
        },
      });

      // Set up the email content
      const mailOptions = {
        from: `"${sanitizedFirstname} ${sanitizedLastname}" <${sanitizedEmail}>`, // Sender
        to: process.env.EMAIL_USER, // Recipient email (your email)
        subject: `Message from ${sanitizedFirstname} ${sanitizedLastname}: ${sanitizedSubject}`, // Subject
        text: `Name: ${sanitizedFirstname} ${sanitizedLastname}\nEmail: ${sanitizedEmail}\nPhone: ${sanitizedPhone}\nSubject: ${sanitizedSubject}\n\nMessage:\n${sanitizedMessage}`, // Email body
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);

      console.log("Email sent:", info.messageId); // Log the email message ID
      res.status(200).json({ success: true, message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error); // Log errors
      res.status(500).json({ success: false, message: "Failed to send email." }); // Internal server error
    }
  } else {
    res.status(405).json({ message: "Method not allowed" }); // Handle unsupported HTTP methods
  }
}
