import { ChangeEvent } from "react";
import { EditableInput } from "./style";

interface ContentEditableInputProps {
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLDivElement>) => void;
}

const ContentEditableInput = (props: ContentEditableInputProps) => {
  return (
    <EditableInput
      contentEditable={!props.disabled}
      disabled={props.disabled}
      onInput={props.onChange}
    />
  );
};

export default ContentEditableInput;
