import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z
    .string()
    .max(20, { message: "20文字以下で入力してください。" })
    .nullable()
    .transform((v) => (v === "" ? null : v)),
  type: z
    .number()
    .int()
    .nullable()
    .transform((v) => (v === 0 ? null : Number(v))),
});
type Form = z.infer<typeof formSchema>;

const SampleForm = () => {
  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<Form>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<Form> = async (values) => {
    console.log("values");
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          maxWidth: 500,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: 8,
        }}
      >
        <h1>Form</h1>
        <div>
          <label htmlFor="name">name:</label>
          <input type="text" {...register("name")} />
          {errors.name?.message && (
            <ErrorMessage message={errors.name.message} />
          )}
        </div>
        <div>
          <label htmlFor="type">type:</label>
          <select {...register("type", { valueAsNumber: true })}>
            <option value="0">Select</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
          {errors.type?.message && (
            <ErrorMessage message={errors.type.message} />
          )}
        </div>
        <div>
          <button disabled={!isValid}>SUBMIT</button>
        </div>
      </div>
    </form>
  );
};

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <p style={{ color: "red" }}>{message}</p>
);

export default SampleForm;
