import { SubmitHandler, useForm, UseFormRegisterReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputsLogin } from "./styleinput";
import { LabelInputLogin } from "./styleinput";
interface IpropsInput {
  register: UseFormRegisterReturn<string>;
  errors?: any;
  label: string;
  type: string;
}
export const Input = ({ register, errors, label, type }: IpropsInput) => {
  return (
    <fieldset>
      <LabelInputLogin>{label}</LabelInputLogin>
      <InputsLogin type={type} {...register} />
      <p>{errors}</p>
    </fieldset>
  );
};
