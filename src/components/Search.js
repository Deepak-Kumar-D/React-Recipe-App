import { useContext } from "react";
import { mode } from "../App";
import "../css/Search.css";

function Search({ setSearch }) {
  const { theme } = useContext(mode);

  return (
    <div className="search">
      <div>
        {/* Searchbar for the filter function */}
        <input
          type="text"
          placeholder="Search your delicacy here..."
          onChange={(event) => setSearch(event.target.value)}
          style={{
            backgroundColor: theme === "dark" ? "" : "#202020",
            color: theme === "dark" ? "" : "white",
            border: theme === "dark" ? "" : "1px solid #f5b876",
          }}
        ></input>
      </div>
    </div>
  );
}

export { Search };
