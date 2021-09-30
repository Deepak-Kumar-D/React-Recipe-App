import { createContext, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./css/App.css";
import { MainPage } from "./components/MainPage";
import { More } from "./components/More";
import { Form } from "./components/Form";
import Edit from "./components/Edit";

const mode = createContext(null);

function App() {
  const [recipes, setRecipes] = useState([]);
  const [theme, setTheme] = useState("dark");

  function getRecipe() {
    // Fetching recipe data from the MOCK API
    fetch("https://db-recipe.herokuapp.com/get-recipe", {
      method: "GET",
    })
      .then((rec) => rec.json())
      .then((rec) => setRecipes(rec));
  }

  const shade = () => {
    setTheme(theme === "light" ? "dark" : "light");

    if (theme === "dark") {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "#202020";
    } else {
      document.body.style.backgroundImage = "";
    }
  };

  useEffect(() => {
    getRecipe();
  });

  return (
    <div className="app">
      <div className="bgContainer">
        <img src="images/Vector_BG.png" alt="" className="imgBG" />

        <button
          className="mode"
          style={{
            backgroundColor: theme === "dark" ? "#202020" : "white",
            color: theme === "dark" ? "#f5f5f5" : "#202020",
          }}
          onClick={shade}
        >
          {theme.toUpperCase()}
        </button>

        <mode.Provider value={{ theme, getRecipe, recipes }}>
          <Switch>
            {/* HOME Page with Recipes and searchbar */}
            <Route exact path="/">
              <MainPage />
            </Route>

            {/* Procedure Page which shows the ingredients and the procedure of the selected recipe from the pop-up window */}
            <Route path="/more/:id">
              <More />
            </Route>

            {/* Add a New Recipe Form Page */}
            <Route path="/addRecipe">
              <Form />
            </Route>

            {/* Edit a Recipe */}
            <Route path="/editRecipe/:id">
              <Edit />
            </Route>
          </Switch>
        </mode.Provider>
      </div>
    </div>
  );
}

export { App, mode };
