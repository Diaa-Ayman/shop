import styled, { keyframes } from "styled-components";

export const slide_Left = keyframes`
   from {
    opacity: 0;
    transform:  translateX(6rem)
  }
  to {
    opacity: 1;
    transform:  translateX(0)
  }
`;
export const slide_Right = keyframes`
   from {
    opacity: 0;
    transform:  translateX(-6rem)
  }
  to {
    opacity: 1;
    transform:  translateX(0)
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  overflow: hidden;
  flex-wrap: wrap;
`;
export const ProductGallery = styled.div`
  display: flex;
  animation: ${slide_Right} 800ms ease-out forwards;
`;
export const GalleryImage = styled.img`
  object-fit: cover;
  object-position: top;
  margin-bottom: 20px;
  padding: 2px;
  width: 80px;
  height: 80px;
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

export const Availables = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 0.3px solid #eee;
  padding-right: 10px;
  max-height: 400px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Image = styled.img`
  margin: 0 3.5rem 0 1rem;
  width: 550px;
  height: 500px;
  object-fit: contain;
  object-position: top;

  @media (max-width: 750px) {
    width: 400px;
    height: 350px;
  }
  @media (max-width: 550px) {
    width: 350px;
    height: 300px;
  }
`;
///////////////////////////////////////////////////////////////
export const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  animation: ${slide_Left} 800ms ease-out forwards;
`;

export const AttributesContainer = styled.div`
  margin: 1rem 0;
`;

export const LineDiv = styled.div`
  border-bottom: 1px solid #eee;
  margin: 2rem 0 1rem 0;
  height: 0.8px; ;
`;

export const ProductTitle = styled.div`
  margin: 0.7rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.div`
  font-family: sans-serif, arial;
  color: #6a6e6b;
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
