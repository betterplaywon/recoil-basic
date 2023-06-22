import React from "react";
import dummyImage from "../assets/bnbn.jpg";
import { useSetRecoilState } from "recoil";
import { CartItemAtom } from "../recoil/CartItemAtom";
import Image from "next/image";
import { Items } from "@/types/itemType";

const CartItem = ({ data }) => {
  const setCartItem = useSetRecoilState(CartItemAtom);
  const { id, title, description, price } = data;

  const removeFromCart = (e) => {
    setCartItem((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <li>
      <div>
        <Image src={dummyImage} alt={title} />
        <div>
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
      </div>
      <div>
        <h2>{`${price.toLocaleString()}원`}</h2>
        <button onClick={removeFromCart}>삭제</button>
      </div>
    </li>
  );
};

export default CartItem;
