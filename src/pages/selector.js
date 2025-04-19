/* Achal Boniface Sood */
/* Nazmul Attaulla Khan */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/selector.css";

function Selector() {
  const navigate = useNavigate();

  const [useCase, setUseCase] = useState("");
  const [resolution, setResolution] = useState("");
  const [rayTracing, setRayTracing] = useState("any");
  const [budget, setBudget] = useState(1500);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results", {
      state: { useCase, resolution, rayTracing, budget }
    });
  };

  return (
    <div className="selector-container">
      <h1>Find the Right GPU</h1>
      <form onSubmit={handleSubmit} className="selector-form">
        <label>
          Primary Use Case:
          <select value={useCase} onChange={(e) => setUseCase(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="gaming">Gaming</option>
            <option value="videoEditing">Video Editing</option>
            <option value="3DRendering">3D Rendering</option>
            <option value="streaming">Streaming</option>
          </select>
        </label>

        <label>
          Preferred Resolution:
          <select value={resolution} onChange={(e) => setResolution(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="1080p">1080p</option>
            <option value="1440p">1440p</option>
            <option value="4k">4K</option>
          </select>
        </label>

        <label>
          Ray Tracing:
          <select value={rayTracing} onChange={(e) => setRayTracing(e.target.value)}>
            <option value="any">Doesn’t Matter</option>
            <option value="true">Required</option>
            <option value="false">Not Needed</option>
          </select>
        </label>

        <label>
          Max Budget: ${budget}
          <input
            type="range"
            min="200"
            max="2000"
            step="50"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </label>

        <button type="submit">Show Me the Best GPU</button>
      </form>
    </div>
  );
}

export default Selector;
