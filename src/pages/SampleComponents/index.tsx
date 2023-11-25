import ContentEditableInput from "~/components/ContentEditableInput";
import CustomizedArrowNumberInput from "~/components/CustomizedArrowNumberInput";

const SampleComponents = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <CustomizedArrowNumberInput
        onChange={(e) => {
          console.log(e.target.value);
        }}
        suffix="%"
      />
      <ContentEditableInput
        onChange={(e) => {
          console.log(e.target.textContent);
        }}
      />
    </div>
  );
};

export default SampleComponents;
