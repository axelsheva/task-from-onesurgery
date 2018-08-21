export const selectProducts = state =>
  state.products.map(product => {
    const ingredients = product.ingredientsIds.map(ingredientId =>
      state.ingredients.find(ingredient => ingredient.id === ingredientId)
    );

    const price = ingredients.reduce((prev, cur) => prev + cur.price, 0);

    return {
      ...product,
      ingredients,
      price
    };
  });
