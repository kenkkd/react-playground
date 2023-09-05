import { ChangeEvent, MutableRefObject, useRef } from "react";
import { TbChevronUp, TbChevronDown } from "react-icons/tb";
import {
  Arrow,
  Arrows,
  InputNumber,
  InputNumberFieldset,
  Suffix,
} from "./style";

interface CustomizedArrowNumberInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  suffix?: string;
}

const CustomizedArrowNumberInput = (props: CustomizedArrowNumberInputProps) => {
  const numberInputRef = useRef(null);

  const createChangeEvent = (current: MutableRefObject<null>) => {
    const event = new Event("input", { bubbles: true });
    current.dispatchEvent(event);
  };

  const increment = () => {
    if (!numberInputRef.current) return;
    numberInputRef.current.stepUp();
  };

  const decrement = () => {
    if (!numberInputRef.current) return;
    numberInputRef.current.stepDown();
  };

  const handleArrow = (callback: () => void) => {
    if (!numberInputRef.current) return;
    callback();
    createChangeEvent(numberInputRef.current);
  };

  return (
    <InputNumberFieldset>
      <InputNumber
        type="number"
        ref={numberInputRef}
        onChange={props.onChange}
      />
      <Suffix>{props.suffix}</Suffix>
      <Arrows>
        <Arrow onClick={() => handleArrow(increment)}>
          <TbChevronUp />
        </Arrow>
        <Arrow onClick={() => handleArrow(decrement)}>
          <TbChevronDown />
        </Arrow>
      </Arrows>
    </InputNumberFieldset>
  );
};

export default CustomizedArrowNumberInput;
