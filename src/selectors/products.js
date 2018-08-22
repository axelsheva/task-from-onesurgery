import { selectIngredientsByIds } from "./ingredients";

export const selectProducts = state =>
  state.products.map(product => {
    const ingredients = selectIngredientsByIds(state, product.ingredientsIds);
    const price = ingredients.reduce((prev, cur) => prev + cur.price, 0);

    return {
      ...product,
      ingredients,
      price
    };
  });

export const selectProductById = (state, id) => {
  const product = state.products.find(
    product => product.id === parseInt(id, 10)
  );
  const ingredients = selectIngredientsByIds(state, product.ingredientsIds);
  const price = ingredients.reduce((prev, cur) => prev + cur.price, 0);

  return {
    ...product,
    ingredients,
    price
  };
};
