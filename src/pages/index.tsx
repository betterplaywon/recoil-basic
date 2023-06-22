import Image from "next/image";
import styled from "styled-components";
import { dummyData } from "../model/dummyData";
import ProductCard from "./../component/ProductCard";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <ListWrapper>
        {dummyData.map((item) => {
          return <li key={item.id}>{<ProductCard item={item} />}</li>;
        })}
      </ListWrapper>
    </>
  );
};

const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export default Home;
