import { useContext } from "react";
import { mode } from "../App";
import "../css/PopUp.css";

function Popup({ close, recName, contents }) {
  const { theme } = useContext(mode);

  return (
    <>
      {/* Close button to close the pop-up window */}
      <button className="close-btn" onClick={close}>
        X
      </button>

      {/* Recipe name of the selected recipe */}
      <h2 style={{ color: theme === "dark" ? "" : "#f5b876" }}>{recName}</h2>

      <p className="ing" style={{ color: theme === "dark" ? "" : "#f5b876" }}>
        Ingredients
      </p>
      <hr />

      {/* List of Ingredients of the selected recipe */}
      <ul>
        {contents.map((detail, index) => {
          return (
            <li
              key={index}
              style={{ color: theme === "dark" ? "" : "#f5b876" }}
            >
              {detail}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export { Popup };
