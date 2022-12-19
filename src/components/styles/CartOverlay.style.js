import styled from "styled-components";
import { Button } from "./Global";

const ActionButton = styled(Button)`
  padding: 10px 12px;
  margin-right: 5px;
  background: transparent;
  font-size: 1rem;
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  &hover {
    background-color: ${(props) => props.hoveredBackground};
    color: ${(props) => props.hoveredColor};
  }
`;
const Container = styled.div`
  padding: 1rem;
  img {
    width: 170px;
    object-fit: contain;
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

const Head = styled.div`
  padding: 1rem;
`;
const Foot = styled.div`
  background-color: #fff;
  position: sticky;
  bottom: 0;
  padding: 5px;
  box-shadow: 10px 5px 7px 5px #eee;
`;
export { Actions, Container, ActionButton, TotalAmount, Head, Foot };
