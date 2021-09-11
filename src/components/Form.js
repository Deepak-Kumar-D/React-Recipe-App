import { useForm } from "react-hook-form";
import { Title } from "./Title";
import { Back } from "./Back";
import { useContext } from "react";
import { mode } from "../App";
import "../css/Form.css";

function Form() {
  const { theme, getRecipe } = useContext(mode);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://609e2ac333eed80017957e36.mockapi.io/recipe", {
      method: "POST",
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

    alert("New Recipe Added!");
    reset();
  };

  return (
    <>
      {/* Header and go back to the main page section */}
      <div style={{ marginLeft: "10px" }}>
        <Back />
        <Title />
      </div>

      {/* Form to add a new recipe */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          border: theme === "dark" ? "" : "2px solid #f5b876",
          backgroundColor: theme === "dark" ? "" : "#797979",
          transition: "0.1s",
        }}
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
            {...register("name", { required: true })}
          />
        </div>
        {errors.name && <span>This field is required</span>}

        <div>
          <label
            htmlFor="ingredients"
            style={{ color: theme === "dark" ? "" : "#f5b876" }}
          >
            INGREDIENTS
          </label>
          <input
            name="ingredients"
            placeholder="Milk"
            {...register("ingredients", { required: true })}
          />
        </div>
        {errors.ingredients && <span>This field is required</span>}

        <div>
          <label
            htmlFor="procedure"
            style={{ color: theme === "dark" ? "" : "#f5b876" }}
          >
            PROCEDURE
          </label>
          <input
            name="procedure"
            placeholder="Steps to be followed..."
            {...register("procedure", { required: true })}
          />
        </div>
        {errors.procedure && <span>This field is required</span>}

        <div>
          <label
            htmlFor="id"
            style={{ color: theme === "dark" ? "" : "#f5b876" }}
          >
            IMAGE LINK
          </label>
          <input
            name="id"
            placeholder="abc-xyz"
            {...register("image", { required: true })}
          />
        </div>
        {errors.image && <span>This field is required</span>}

        <input
          type="submit"
          style={{ filter: theme === "dark" ? "" : "grayscale(0.6)" }}
        />
      </form>
    </>
  );
}

export { Form };
