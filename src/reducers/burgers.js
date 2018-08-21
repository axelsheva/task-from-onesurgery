const initialState = [
  {
    id: 1,
    name: "Чикенбургер",
    img:
      "https://cdn.pizket.com/images/photo/256x256/3659fb4a6c2c9e345a4ed558024e0da1.jpg?1534268393",
    ingredientsIds: [1, 2, 3, 4, 5, 6, 7]
  },
  {
    id: 2,
    name: "Гамбургер",
    img:
      "https://cdn.pizket.com/images/photo/256x256/4fbe276b7f43a388065ab3b2524043bf.jpg",
    ingredientsIds: [9, 2, 10, 5, 11, 12]
  },
  {
    id: 3,
    name: "Бургер с сочной котлетой",
    img:
      "https://cdn.pizket.com/images/photo/256x256/5389923e674422d00de9adf1e44c0acf.jpg",
    ingredientsIds: [9, 2, 10, 5, 11, 12]
  },
  {
    id: 4,
    name: "Классический чизбургер",
    img:
      "https://cdn.pizket.com/images/photo/256x256/f279c5d79704e0165c643297af1e98d5.jpg",
    ingredientsIds: [9, 2, 10, 5, 11, 12]
  },
  {
    id: 5,
    name: "Бургер с курицей",
    img:
      "https://cdn.pizket.com/images/photo/256x256/e01af5129910a41c0bce1a58bfd1fcfb.jpg",
    ingredientsIds: [9, 2, 10, 5, 11, 12]
  }
];

export default function burgers(state = initialState) {
  return state;
}
