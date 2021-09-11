import { useHistory } from "react-router";
import { useContext } from "react";
import { mode } from "../App";
import "../css/Back.css";

function Back() {
  const back = useHistory();
  const { theme } = useContext(mode);

  // Go back button using useHistory Hook
  return (
    <button
      className="back-btn"
      onClick={() => back.goBack()}
      style={{ filter: theme === "dark" ? "" : "grayscale(0.6)" }}
    >
      GO BACK
    </button>
  );
}

export { Back };
