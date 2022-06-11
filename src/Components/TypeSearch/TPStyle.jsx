import styled from "styled-components";

export const DivMain = styled.div`
  position: fixed;
  top: 9.8vh;
  left: 14vw;
  width: 15vw;
  height: 24vh;
  border: 1px solid rgb(232, 230, 227);
  border-radius: 6px;
`;

export const DivSub = styled.div`
  height: 25%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(232, 230, 227);
  font-size: 90%;
  padding: 0 5%;
`;

export const BtnPage = styled.button`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 50%;
  margin: ${(props) => props.margin};
  filter: invert();
  border: none;
  cursor: pointer;
  &:hover {
    filter: invert(0.9);
  }
  &:active {
    filter: invert();
  }
`;

export const ActualPage = styled.p``;

export const SelectAmount = styled.select`
  background-color: #080a0d;
  color: rgb(232, 230, 227);
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: rgb(31, 34, 41);
  }
`;

export const Option = styled.option``;

export const Title = styled.p``;

export const Amount = styled.p`
  background-color: rgb(31, 34, 41);
  border-radius: 6px;
  padding: 2%;
`;

export const BtnAmount = styled.button`
  background-color: #080a0d;
  color: rgb(232, 230, 227);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 110%;
 &:hover{ background-color: rgb(31, 34, 41);
 border: none;
 }
 &:click{ background-color: #080a0d;}
`