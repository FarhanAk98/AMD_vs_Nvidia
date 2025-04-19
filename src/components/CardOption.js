// Farhan Akthar
import "../CSS/cardoptions.css";
import { Link, useParams } from "react-router-dom";

function CardOption() {
  const { card } = useParams();

  return (
    <div id="options" className={card === "nvidia" ? "green" : "red"}>
      <Link
        to="/catalogue/nvidia"
        id={card === "nvidia" ? "selected" : "notselected"}
      >
        Nvidia
      </Link>
      <Link
        to="/catalogue/amd"
        id={card === "amd" ? "selected" : "notselected"}
      >
        AMD
      </Link>
    </div>
  );
}

export default CardOption;
