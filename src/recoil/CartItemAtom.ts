import { atom, selector } from "recoil";

export const CartItemAtom = atom({
  key: "CartItemAtom",
  default: [],
});

export const QuantitySelector = selector({
  key: "QuantitySelector",
  get: ({ get }) => {
    const CurrentItem = get(CartItemAtom);
    return CurrentItem.length.toLocaleString();
  },
});
