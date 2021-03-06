import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../actions/ingredients";

const initialState = [
  {
    id: 1,
    name: "котлета куриная",
    price: 10
  },
  {
    id: 2,
    name: "булка",
    price: 5
  },
  {
    id: 3,
    name: "бекон",
    price: 5
  },
  {
    id: 4,
    name: "салат",
    price: 3
  },
  {
    id: 5,
    name: "помидор",
    price: 4
  },
  {
    id: 6,
    name: "лук маринованный",
    price: 4
  },
  {
    id: 7,
    name: 'соус "Цезарь"',
    price: 4
  },
  {
    id: 8,
    name: "паприка",
    price: 4
  },
  {
    id: 9,
    name: "Котлета говяжья",
    price: 16
  },
  {
    id: 10,
    name: "лист салата",
    price: 4
  },
  {
    id: 11,
    name: "лук маринованный",
    price: 2
  },
  {
    id: 12,
    name: "огурец маринованный",
    price: 7
  }
];

const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return [...state, action.payload];
    case REMOVE_INGREDIENT:
      return state.filter(ingredient => ingredient.id !== action.payload);
    default:
      return state;
  }
};

export default ingredients;
