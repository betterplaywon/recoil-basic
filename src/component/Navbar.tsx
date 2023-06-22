import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";
import logoElem from "../assets/bnbn.jpg";

const Navbar = () => {
  return (
    <Header>
      <Wrapper>
        <Link href={"/"} aria-label="홈으로 이동">
          <Logo image={logoElem} />
        </Link>
        <Nav>
          <Link href={"/"} aria-label="홈으로 이동">
            홈
          </Link>
          <Link href={"/Cart"} aria-label="장바구니로 이동">
            장바구니
          </Link>
        </Nav>
      </Wrapper>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #ccc;
  /* position: fixed;
  top: 0; */
  /* z-index: 9999; */
  background-color: #fff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
const Nav = styled.nav`
  max-width: 1024px;
  display: flex;
  justify-content: right;
  gap: 36px;
  align-items: center;
  > span {
    font-weight: bold;
    cursor: pointer;
  }
`;
export default Navbar;
