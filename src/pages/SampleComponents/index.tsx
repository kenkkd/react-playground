import CustomizedArrowNumberInput from "~/components/CustomizedArrowNumberInput";

const SampleComponents = () => {
  return (
    <CustomizedArrowNumberInput
      onChange={(e) => {
        console.log(e.target.value);
      }}
      suffix="%"
    />
  );
};

export default SampleComponents;
