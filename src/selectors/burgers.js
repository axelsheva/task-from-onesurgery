export const selectBurgers = state =>
  state.burgers.map(burger => {
    const ingredients = burger.ingredientsIds.map(ingredientId =>
      state.ingredients.find(ingredient => ingredient.id === ingredientId)
    );

    return {
      ...burger,
      ingredients
    };
  });
