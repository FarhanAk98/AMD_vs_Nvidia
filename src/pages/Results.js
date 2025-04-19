/* Achal Boniface Sood */
/* Nazmul Attaulla Khan */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../data/data.json";
import recommendGPU from "../components/RecommendationEngine";
import "../CSS/selector.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

import nvidiaLogo from "../images/nvidia-logo.png";
import amdLogo from "../images/amd-logo.png";

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [bestMatch, setBestMatch] = useState(null);
  const [secondBest, setSecondBest] = useState(null);

  useEffect(() => {
    if (!state) return;
    const recommendations = recommendGPU(data.cards, state);
    setBestMatch(recommendations[0]);
    setSecondBest(recommendations[1]);
  }, [state]);

  if (!bestMatch) {
    return <div className="selector-container"><p>Finding your best match...</p></div>;
  }

  const useProductivity = state.useCase !== "gaming";

  const getPerformanceData = (gpu) => {
    if (useProductivity) {
      return [
        { name: "Video Editing", score: gpu.productivityPerformance.videoEditing },
        { name: "3D Rendering", score: gpu.productivityPerformance["3DRendering"] },
        { name: "Streaming", score: gpu.productivityPerformance.streaming },
        { name: "1440p Gaming", score: gpu.gamingPerformance["1440p"] }
      ];
    } else {
      return [
        { name: "Video Editing", score: gpu.productivityPerformance.videoEditing },
        { name: "1080p Gaming", score: gpu.gamingPerformance["1080p"] },
        { name: "1440p Gaming", score: gpu.gamingPerformance["1440p"] },
        { name: "4K Gaming", score: gpu.gamingPerformance["4k"] }
      ];
    }
  };

  const performanceData = getPerformanceData(bestMatch);
  const secondData = secondBest && getPerformanceData(secondBest);

  const bestBrand = bestMatch.brand.toLowerCase();
  const secondBrand = secondBest?.brand.toLowerCase();

  const brandColors = {
    nvidia: ["#1db954", "#158944"],
    amd: ["#f4511e", "#c73814"]
  };

  const logoSrc = bestBrand === "nvidia" ? nvidiaLogo : amdLogo;
  const brandClass = bestBrand === "nvidia" ? "green-theme" : "red-theme";
  const bestBarColor = brandColors[bestBrand]?.[0] || "#4caf50";
  const secondBarColor =
    bestBrand === secondBrand
      ? brandColors[bestBrand]?.[1] || "#388e3c"
      : brandColors[secondBrand]?.[0] || "#ff7043";

  return (
    <div className={`selector-container ${brandClass}`}>
      <h1>Best GPU for You</h1>
      <div className="selector-form">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src={logoSrc}
            alt={`${bestMatch.brand} logo`}
            style={{ height: "40px", width: "auto" }}
          />
          <h2>{bestMatch.model}</h2>
        </div>

        {bestMatch.image && (
          <img
            src={bestMatch.image}
            alt={`${bestMatch.model} GPU`}
            style={{
              width: "90%",
              maxHeight: "220px",
              objectFit: "contain",
              borderRadius: "12px",
              margin: "15px auto 10px",
              display: "block"
            }}
          />
        )}

        <div className="gpu-details">
          <p><strong>Brand:</strong> {bestMatch.brand}</p>
          <p><strong>Series:</strong> {bestMatch.series}</p>
          <p><strong>Memory:</strong> {bestMatch.memory}</p>
          <p><strong>Boost Clock:</strong> {bestMatch.boostClockMHz} MHz</p>
          <p><strong>Price:</strong> ${bestMatch.priceUSD}</p>
          <p><strong>Ray Tracing:</strong> {bestMatch.rayTracing ? "Yes" : "No"}</p>
        </div>

        <h3>Performance Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip
              contentStyle={{ backgroundColor: "#222", borderRadius: "8px", border: "none", color: "#fff" }}
              labelStyle={{ color: "#eee", fontWeight: "bold" }}
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
            />
            <Legend />
            <Bar dataKey="score" fill={bestBarColor} name={bestMatch.model} />
            {secondBest && (
              <Bar dataKey="score" data={secondData} fill={secondBarColor} name={secondBest.model} />
            )}
          </BarChart>
        </ResponsiveContainer>

        <button onClick={() => navigate('/selector')} style={{ marginTop: "30px" }}>
          🔄 Try Again
        </button>
      </div>
    </div>
  );
}

export default Results;