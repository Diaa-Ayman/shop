import styled from "styled-components";
import { Button } from "./Global";
import { slide_Right, slide_Left } from "./productDetails.style";
const Center = styled.h1`
  display: grid;
  place-items: center;
  font-family: "arial", sans-serif;
  padding-top: 5rem;
`;

const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eee;
  margin-top: 4rem;
  margin-bottom: 2rem;
  padding-top: 1rem;
`;
const Image = styled.img`
  object-fit: cover;
  object-position: top;
  width: 260px;
  height: 280px;
  @media (max-width: 700px) {
    object-fit: contain;
    width: 200px;
  }
`;

const ActionButton = styled(Button)`
  display: grid;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: transparent;
  color: #000;
  padding: 8px;
  font-size: 18px;
  transition: 0.5s;
  border: 0.8px solid #000;
  &:hover {
    background-color: #0f0f0f;
    color: #fff;
  }
  ${({ overlay }) =>
    overlay &&
    `
    padding: 3px;
    width: 25px;
    height: 25px;
  `}
`;
const Element = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding: 1rem 0;
`;
const ElementData = styled.div`
  width: 30%;
  animation: ${slide_Right} 800ms ease-out forwards;
`;
const ElementGallery = styled.div`
  display: flex;
  animation: ${slide_Left} 800ms ease-out forwards;
`;

const AttributeContainer = styled.div`
  margin: 1rem 0;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Amount = styled.h5`
  font-size: 20px;
  padding: 8px;
  width: 30px;
  text-align: center;
`;
const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
`;
const ArrowsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const Arrow = styled.img`
  width: 20px;
  height: 20px;
  margin: 4px;
  cursor: pointer;
`;
export {
  Image,
  ActionButton,
  Element,
  ElementData,
  ElementGallery,
  AttributeContainer,
  PriceContainer,
  Amount,
  Actions,
  Center,
  OrderBox,
  Title,
  ImageContainer,
  ArrowsContainer,
  Arrow,
};
