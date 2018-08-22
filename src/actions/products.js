export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProduct = product => (dispatch, getState) => {
  const { products } = getState();
  const lastProduct = products[products.length - 1];
  const id = lastProduct.id + 1;

  dispatch({
    type: ADD_PRODUCT,
    payload: { ...product, id }
  });
};

export const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  payload: id
});
