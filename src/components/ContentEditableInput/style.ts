import { styled } from "styled-components";

const EditableInput = styled.div<{ disabled?: boolean }>`
  border: 1px solid black;
  border-radius: 6px;
  padding: 8px;
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "white")};
`;

export { EditableInput };
