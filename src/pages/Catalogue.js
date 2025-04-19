//Achal Boniface Sood
//Farhan Akthar
import { useParams } from "react-router-dom";
import { useState } from "react";
import CardOption from "../components/CardOption";
import data from "../data/data.json";
import "../CSS/cardoptions.css";

function Catalogue() {
  const { card } = useParams();
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("none");

  // Fetching the data from json file
  let filtered = data.cards.filter(
    (gpu) =>
      gpu.brand.toLowerCase() === card.toLowerCase() &&
      gpu.model.toLowerCase().includes(query.toLowerCase())
  );

  //Handling the order of the data.
  if (sortBy === "price") {
    filtered.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (sortBy === "performance") {
    filtered.sort((a, b) => {
      const aScore = (a.gamingPerformance?.["1080p"] || 0) + (a.productivityPerformance?.["videoEditing"] || 0);
      const bScore = (b.gamingPerformance?.["1080p"] || 0) + (b.productivityPerformance?.["videoEditing"] || 0);
      return bScore - aScore;
    });
  }

  return (
    <div>
      <CardOption />

      {/* Inputs for filtering the data */}
      <div className="catalogue-controls">
        <input
          type="text"
          placeholder="Search by model..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-bar"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="search-bar"
          style={{ marginLeft: "10px" }}
        >
          <option value="none">Sort By</option>
          <option value="price">Price (Low to High)</option>
          <option value="performance">Performance (High to Low)</option>
        </select>
      </div>

      {/* Displaying the data */}
      <div id={`${card}Cat`} className="catalogue-container">
        {filtered.length > 0 ? (
          filtered.map((gpu, index) => (
            <div key={index} className={"catalogue-card"}>
              {gpu.image && (
                <img
                  src={gpu.image}
                  alt={gpu.model}
                  style={{ width: "100%", height: "auto", borderRadius: "10px", marginBottom: "10px" }}
                />
              )}
              <h3>{gpu.model}</h3>
              <p><strong>Memory:</strong> {gpu.memory}</p>
              <p><strong>Boost Clock:</strong> {gpu.boostClockMHz} MHz</p>
              <p><strong>Price:</strong> ${gpu.priceUSD}</p>
              <p><strong>Ray Tracing:</strong> {gpu.rayTracing ? "Yes" : "No"}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No GPUs found for {card}.</p>
        )}
      </div>
    </div>
  );
}

export default Catalogue;
