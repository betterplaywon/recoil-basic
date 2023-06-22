import { useRecoilValue } from "recoil";
import { CartItemAtom } from "../recoil/CartItemAtom";
import styled from "styled-components";
import CartItem from "../component/CartItem";
import { Items } from "@/types/itemType";
import Navbar from "@/component/Navbar";

const Cart = () => {
  const cartItem = useRecoilValue(CartItemAtom);
  // const TotalQuantity = useRecoilValue(QuantitySelector);
  // const TotalPrice = useRecoilValue(TotalPriceSelector);
  console.log({ cartItem });
  return (
    <>
      <Navbar />
      <span>장바구니</span>

      <div>
        {cartItem.length ? (
          cartItem.map((item: Items) => <CartItem data={item} key={item.id} />)
        ) : (
          <p>상품이 없습니다</p>
        )}
      </div>

      <div>
        <div>
          <span>총 갯수</span>
          <span>{`$개`}</span>
        </div>
        <div>
          <span>총 가격</span>
          <span>{`$원`}</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
