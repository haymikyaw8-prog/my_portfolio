
import { useState } from "react"
import emailjs from "@emailjs/browser"
function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  


async function handleSubmit(event) {
  event.preventDefault();
  setError("");
  setSuccess("");

  if (message.trim().length < 10) {
    setError("Message must be at least 10 characters! 💌");
    return;
  }

  try {
    await emailjs.send(
      "service_jxbn6fe",
      "template_ml9l5xb",
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      {
        publicKey: "UYCOBR0veF0kGswYQ",
      }
    );

    setSuccess("Email sent successfully! 💗");
    setName("");
    setEmail("");
    setMessage("");
 } catch (err) {
  console.error("EmailJS error:", err);
  console.error("Status:", err?.status);
  console.error("Details:", err?.text);

  setError(
    `Email failed: ${err?.text || "Please check the browser console."}`
  );
}
}



  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me 💌</h2>
      <p>Let's connect and create something lovely!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          placeholder="Write your message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          rows={5}
        />

        <button type="submit">Send Message 🎀</button>
      </form>

     {error && <p className="error-message">{error}</p>}

     {success && <p className="success-message">{success}</p>}
    </section>
    
  )
}

export default Contact
