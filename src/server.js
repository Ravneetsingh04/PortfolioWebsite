const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "ravneet4365@gmail.com",
    pass: "grui anfi ynwv qake"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error connecting to email service:", error);
  } else {
    console.log("Email service ready");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !message || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const name = `${firstName} ${lastName}`;

  const mail = {
    from: name,
    to: "ravneet4365@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Message Sent");
      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
