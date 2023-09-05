import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const SampleTest = () => {
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText("");
    toast.success("送信しました");
  };

  return (
    <>
      <h1>Sample Test Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="入力"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
    </>
  );
};

export default SampleTest;
