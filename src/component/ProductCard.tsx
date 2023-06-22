import React from "react";
import styled from "styled-components";
import dummyImage from "../assets/bnbn.jpg";
import { useRecoilState } from "recoil";
import { CartItemAtom } from "../recoil/CartItemAtom";
import Image from "next/image";
import { Items } from "../types/itemType";

const ProductCard = ({ item }) => {
  const { id, title, description, price }: Items = item;

  // 아톰 불러오기
  const [cartItem, setCartItem] = useRecoilState(CartItemAtom);

  // 이미 장바구니에 들어있는지 확인
  // 여기서 e가 의미하는 것은 상품의 data, 즉 item을 의미힌다.
  const isAlreadyInCart = cartItem?.filter((e: Items) => e.id === id).length;

  /**
   * 장바구니에 있는지 확인후, 없을때만 아톰에 추가
   */
  const AddToCart = () => {
    console.log("click test");
    if (!isAlreadyInCart) {
      setCartItem((prev): any => [...prev, item]);
    }
  };

  console.log(cartItem);
  return (
    <Wrapper>
      <Image
        src={dummyImage}
        width={200}
        height={200}
        alt={`${id}의 bonobono`}
      />

      <Price>{price.toLocaleString()}원</Price>
      <Haeding>{title}</Haeding>
      <MaxLine1>{description}</MaxLine1>

      <Button onClick={AddToCart} disabled={isAlreadyInCart}>
        {isAlreadyInCart ? `장바구니에 추가됐습니다` : "장바구니에 추가"}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  width: 310px;
  height: 100%;
  border: 1px solid var(--line-gray);
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Price = styled.span`
  font-size: 20px;
  color: var(--font-black);
  font-weight: var(--bold);
`;

export const Haeding = styled.span`
  font-size: 18px;
  font-weight: var(--bold);
`;

const MaxLine1 = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Button = styled.button`
  padding: 8px;
  color: #fff;
  background-color: var(--main);
  &:disabled {
    background-color: var(--line-gray);
    color: var(--font-gray);
  }
`;

export default ProductCard;
