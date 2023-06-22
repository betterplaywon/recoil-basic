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

export const TotalPriceSelector = selector({
  key: "TotalPriceSelector",
  get: ({ get }) => {
    const CurrentItem = get(CartItemAtom);
    return CurrentItem.reduce(
      (acc, curr: any) => acc + curr.price,
      0
    ).toLocaleString();
  },
});
