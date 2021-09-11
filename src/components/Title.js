import { useContext } from "react";
import { mode } from "../App";
import "../css/Title.css";

function Title() {
  const { theme } = useContext(mode);

  return (
    // Header of the website
    <header>
      <div className={theme === "dark" ? "" : "dark"}>
        <h2>Just</h2>
        <h1>RECIPE</h1>
      </div>
    </header>
  );
}

export { Title };
