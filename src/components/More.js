import { useParams } from "react-router";
import { Title } from "./Title";
import { Back } from "./Back";
import { useContext } from "react";
import { mode } from "../App";
import { Link } from "react-router-dom";
import "../css/More.css";
import "../css/Back.css";

function More() {
  const { theme, recipes } = useContext(mode);

  const { id } = useParams();
  const item = recipes.find((ele) => ele.id === id);
  const ingds = item.ingredients;
  const procedure = item.procedure;

  let count = 1;

  return (
    <div className="more">
      <div className="more-top">
        <div className="more-block1">
          <div className="image-block1">
            <img src={item.src} alt={item.name}></img>
          </div>
        </div>

        {/* Header and go back to main page section */}
        <header>
          <section className="more-midblock">
            <Title />
            <hr />
            <h1>{item.name.toUpperCase()}</h1>
            <hr />
            <div className="back">
              <Back />
              <Link to={`/editRecipe/${id}`}>
                <button
                  className="back-btn"
                  style={{ filter: theme === "dark" ? "" : "grayscale(0.6)" }}
                >
                  EDIT
                </button>
              </Link>
            </div>
          </section>
        </header>
      </div>

      <hr></hr>
      {/* Ingredients section in the procedure page */}
      <div className={theme === "dark" ? "more-block2" : "more-block2 dark"}>
        <h3>Ingredients</h3>

        <hr></hr>

        <ul>
          {ingds.map((ingredients, index) => {
            return <li key={index}>{ingredients}</li>;
          })}
        </ul>
      </div>

      {/* Shows the procedure the selected recipe */}
      <div className={theme === "dark" ? "more-block2" : "more-block2 dark"}>
        <h3>Procedure</h3>

        <hr></hr>

        {procedure.map((steps, index) => {
          return (
            <p key={index}>
              <b>Step {count++}:</b> {steps}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export { More };
