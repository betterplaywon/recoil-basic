import styled from "styled-components";

const Logo = ({ image }) => {
  return (
    <>
      <LogoImg src={image.src} />
    </>
  );
};

const LogoImg = styled.img`
  width: 48px;
`;
export default Logo;
