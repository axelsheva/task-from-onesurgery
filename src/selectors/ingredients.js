export const selectIngredientsByIds = (state, ids) =>
  ids.map(id => state.ingredients.find(ingredient => ingredient.id === id));
