import { useContext } from "react";
import { mode } from "../App";
import "../css/ImageBlock.css";

function ImageBlock({ id, name, src }) {
  const { theme } = useContext(mode);

  return (
    <>
      {/* Image grid of the recipes on the Main Page */}
      <div className="image">
        <img src={src} alt={id} />
      </div>

      {/* Recipe name under Image on the Main Page */}
      <div>
        <p
          style={{
            color: theme === "dark" ? "" : "#f5b876",
            letterSpacing: theme === "dark" ? "" : "1px",
          }}
        >
          {name}
        </p>
      </div>
    </>
  );
}

export { ImageBlock };
