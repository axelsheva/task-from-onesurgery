export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

export const addIngredient = ingredient => (dispatch, getState) => {
  const { ingredients } = getState();
  const lastIngredient = ingredients[ingredients.length - 1];
  const id = lastIngredient.id + 1;

  return dispatch({
    type: ADD_INGREDIENT,
    payload: { ...ingredient, id }
  });
};

export const removeIngredient = id => ({
  type: REMOVE_INGREDIENT,
  payload: id
});
