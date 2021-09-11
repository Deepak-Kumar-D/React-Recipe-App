import { useState } from "react";
import { ImageBlock } from "./ImageBlock.js";
import { Popup } from "./PopUp.js";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { AddNew } from "./AddNew";
import { DeleteRecipe } from "./DeleteRecipe";
import { useContext } from "react";
import { mode } from "../App";
import "../css/MainPage.css";

function MainPage() {
  const { theme, recipes } = useContext(mode);
  const [searchRecipe, setSearch] = useState("");
  const [recName, setRecName] = useState("");
  const [ingds, setIngds] = useState([]);

  // Function for the pop-up window to open
  const open = (name, ingredients) => {
    setRecName(name);
    setIngds(ingredients);
  };

  const contents = [...ingds];

  // Function for the pop-up window to close
  const close = (btn) => {
    btn.stopPropagation();
    setRecName("");
  };

  return (
    <div>
      {/* Title and the search bar Component */}
      <Header setSearch={setSearch} />

      {/* List of Recipes on the Main Page */}
      <div className="container">
        {/* To filter in the searchbar and display the required recipes */}
        {recipes
          .filter((list) => {
            if (searchRecipe === "") {
              return list;
            } else if (
              list.name.toUpperCase().includes(searchRecipe.toUpperCase())
            ) {
              return list;
            }
          })
          .map((elements) => {
            const { id, name, src, ingredients } = elements;

            return (
              <div
                className="food"
                style={{
                  backgroundColor: theme === "dark" ? "" : "#202020",
                  border: theme === "dark" ? "" : "1px solid #f5b876",
                }}
                key={id}
                onClick={() => open(name, ingredients)}
              >
                {/* Recipe image and name Component */}
                <ImageBlock id={id} name={name} src={src} />

                {/* Pop-up window section */}
                <div
                  className="popup"
                  style={{ display: recName === name ? "flex" : "none" }}
                >
                  <div
                    className="foodContent"
                    style={{
                      backgroundColor: theme === "dark" ? "" : "#202020",
                      border: theme === "dark" ? "" : "1px solid #f5b876",
                    }}
                  >
                    {/* Pop-up component which contains the pop-up window requirements */}
                    <Popup
                      close={close}
                      recName={recName}
                      contents={contents}
                    />

                    {/* Delete section for removing a recipe */}
                    <DeleteRecipe close={close} id={elements.id}></DeleteRecipe>

                    {/* Link to open the procedure page */}
                    <Link to={`/more/${id}`}>
                      <button
                        className="more-btn"
                        style={{
                          color: theme === "dark" ? "" : "#202020",
                        }}
                      >
                        PROCEDURE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

        {/* Link to add a new recipe form */}
        <Link to={`/addRecipe`}>
          <AddNew />
        </Link>
      </div>
    </div>
  );
}

export { MainPage };
