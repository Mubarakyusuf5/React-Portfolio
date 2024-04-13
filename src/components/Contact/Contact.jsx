import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_aqda7uq", "template_xoup15j", form.current, {
        publicKey: "gEsmacOC8nUKG3yUC",
      })
      .then(
        (result) => {
          console.log("SUCCESS!");

          form.current.reset();
          setResult(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="c">
          <h5>Get in touch</h5>
          <h2>Contact me</h2>
          <p></p>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="user"
              name="from_name"
              placeholder="Enter your fullname"
            />
            <input
              type="email"
              className="user"
              name="from_email"
              placeholder="Enter your email"
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter your message..."
            ></textarea>
            <input type="submit" className="btn" value="Send message" />
            {result &&<div className="message">{result ? "Sent Successfully" : null}</div>}
          </form>
        </div>
      </section>
    </>
  );
};
