import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Title } from "./Title";
import { Back } from "./Back";
import { mode } from "../App";
import "../css/Form.css";
import { useHistory, useParams } from "react-router";

function Edit() {
  const { theme, recipes, getRecipe } = useContext(mode);
  const { id } = useParams();
  const item = recipes.find((ele) => ele.id === id);
  const ingds = item.ingredients;
  const procedure = item.procedure;
  const imgLink = item.src;
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    fetch(`https://609e2ac333eed80017957e36.mockapi.io/recipe/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({
        name: data.name,
        ingredients: data.ingredients.split(", "),
        procedure: data.procedure.split(". "),
        src: data.image,
      }),
    })
      .then((rec) => rec.json())
      .then(() => getRecipe());

    alert("Recipe Updated!");
    history.goBack();
  };
  return (
    <div>
      {/* Header and go back to the main page section */}
      <div style={{ marginLeft: "10px" }}>
        <Back />
        <Title />
      </div>
      <form
        method="PUT"
        onSubmit={handleSubmit(onSubmit)}
        className="form edit-form"
      >
        <div>
          <label
            htmlFor="name"
            style={{ color: theme === "dark" ? "" : "#f5b876" }}
          >
            RECIPE NAME
          </label>
          <input
            name="name"
            placeholder="Abc Xyz"
            defaultValue={item.name}
            {...register("name", { required: true })}
          />
        </div>

        <div>
          <label
            htmlFor="ingredients"
            style={{ color: theme === "dark" ? "" : "#f5b876" }}
          >
            INGREDIENTS
          </label>
          <textarea
            name="ingredients"
            placeholder="Milk"
            defaultValue={ingds}
            {...register("ingredients", { required: true })}
          />
        </div>

        <div>
          <label
            htmlFor="procedure"
            style={{ color: theme === "dark" ? "" : "#f5b876" }}
          >
            PROCEDURE
          </label>
          <textarea
            name="procedure"
            defaultValue={procedure}
            placeholder="Steps to be followed..."
            {...register("procedure", { required: true })}
          />
        </div>

        <div>
          <label
            htmlFor="id"
            style={{ color: theme === "dark" ? "" : "#f5b876" }}
          >
            IMAGE LINK
          </label>
          <input
            name="id"
            defaultValue={imgLink}
            placeholder="abc-xyz"
            {...register("image", { required: true })}
          />
        </div>

        <input
          type="submit"
          style={{ filter: theme === "dark" ? "" : "grayscale(0.6)" }}
        />
      </form>
    </div>
  );
}

export default Edit;
