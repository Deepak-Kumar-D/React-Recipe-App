import { useContext } from "react";
import { mode } from "../App";
import "../css/AddNew.css";

function AddNew() {
  const { theme } = useContext(mode);

  return (
    // Add new Grid on the Main Page
    <div
      className="addNew"
      style={{ backgroundColor: theme === "dark" ? "" : "#797979" }}
    >
      <div className="add">
        <i
          style={{ color: theme === "dark" ? "" : "#202020" }}
          className="fas fa-plus-circle"
        ></i>
      </div>

      <div>
        <h3 style={{ color: theme === "dark" ? "" : "#202020" }}>
          add a new recipe
        </h3>
      </div>
    </div>
  );
}

export { AddNew };
