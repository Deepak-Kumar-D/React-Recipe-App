import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useContext } from "react";
import { mode } from "../App";

function DeleteRecipe({ id }) {
  const { getRecipe } = useContext(mode);

  function deleteItem(id) {
    fetch(`https://609e2ac333eed80017957e36.mockapi.io/recipe/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => getRecipe());
  }

  return (
    <IconButton
      aria-label="delete"
      onClick={() => deleteItem(id)}
      className="remove-btn"
    >
      <DeleteIcon style={{ color: "#bb0d0d" }} fontSize="large" />
    </IconButton>
  );
}

export { DeleteRecipe };
