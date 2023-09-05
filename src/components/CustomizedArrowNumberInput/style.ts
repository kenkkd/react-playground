import { styled } from "styled-components";

const InputNumberFieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 90% 5% 5%;
  align-items: center;
  border: 1px solid black;
  border-radius: 6px;
  padding: 5px;
  width: 500px;
`;

const InputNumber = styled.input`
  border: none;
  background: none;
  outline: none;
  appearance: none;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const Arrows = styled.div`
  display: flex;
  flex-direction: column;
`;

const Arrow = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const Suffix = styled.p``;

export { InputNumberFieldset, InputNumber, Arrows, Arrow, Suffix };
