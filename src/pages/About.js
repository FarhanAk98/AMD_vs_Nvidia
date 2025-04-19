/* Tulsi Patel */
import React from "react";
import "../CSS/selector.css";

function About() {
  return (
    <div className="selector-container">
      <div className="selector-form">
        <h1>About Us</h1>

        <p>
          Welcome to <strong>GPU Advisor</strong> — your intelligent assistant for selecting the ideal GPU!
          Whether you're a hardcore gamer, a content creator, or a data science enthusiast,
          we provide tailored GPU recommendations based on your unique preferences and budget.
        </p>

        <p>
          Our tool analyzes graphics cards across gaming and productivity workloads, including
          resolution scaling, ray tracing, video editing, and rendering tasks. It breaks down the numbers into
          visual comparisons that are easy to understand and insightful to explore.
        </p>

        <p>
          Built with ❤️ using React and Recharts, <strong>GPU Advisor</strong> is the result of collaborative teamwork
          and a shared passion for clean design and smart data-driven guidance.
        </p>

        <div style={{ marginTop: "30px", fontStyle: "italic" }}>
          <p>Created by:</p>
          <ul>
            <li>Achal Boniface Sood</li>
            <li>Tulsi Patel</li>
            <li>Mohammed Farhan Parvez Akhtar</li>
            <li>Nazmul Attaulla Khan</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
