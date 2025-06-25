import React from "react";
import "./Contact.scss";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>
        Get in Touch{" "}
        <i className="envelope">
          <CiMail />
        </i>
      </h2>
      <p>If you'd like to reach out, feel free to email me. I'm ready!</p>
      <a href="mailto:looka2449@rocketmail.com" className="email-link">
        looka2449@rocketmail.com
      </a>
    </section>
  );
};

export default Contact;
