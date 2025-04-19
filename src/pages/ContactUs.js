/* Tulsi Patel */
import React from "react";
import "../CSS/selector.css";

function ContactUs() {
  return (
    <div className="selector-container">
      <div className="selector-form">
        <h1>Contact Us</h1>

        <p>
          Have a question, suggestion, or feedback? We're here to help!
          Our team is committed to building tools that make GPU selection easier and smarter for everyone.
          Feel free to connect with us via any of the methods below — we’d love to hear from you.
        </p>

        <h3 style={{ marginTop: "20px" }}>Reach Out</h3>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:teamgpuadvisor@gmail.com"
              className="contact-link"
            >
              teamgpuadvisor@gmail.com
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/FarhanAk98/AMD_vs_Nvidia#"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/teamgpuadvisor
            </a>
          </li>
        </ul>

        <h3 style={{ marginTop: "30px" }}>Where We’re From</h3>
        <p>
          Our project was developed as part of our coursework at Conestoga College,
          blending our passion for data visualization, user-centered design, and cutting-edge technology.
        </p>

        <h3 style={{ marginTop: "30px" }}>Meet the Team</h3>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
          <li>Achal Boniface Sood</li>
          <li>Tulsi Patel</li>
          <li>Mohammed Farhan Parvez Akhtar</li>
          <li>Nazmul Attaulla Khan</li>
        </ul>

        <p style={{ marginTop: "20px", fontStyle: "italic" }}>
          We typically respond to inquiries within 24–48 hours.
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
