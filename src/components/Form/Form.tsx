import { isEmpty } from "lodash";
import React, { FormEvent } from "react";
import {
  FormError,
  FormFieldInput,
  FormFieldLabel,
  FormStyle,
} from "./Form.styled";
import { FormContext } from "./FormProvider";

export const FormField = (props: FormFieldProps) => {
  const formContext = React.useContext(FormContext)!;
  const { handleChange, formState } = formContext;

  return (
    <>
      <FormFieldLabel>{props.label}</FormFieldLabel>
      <FormFieldInput
        type={props.type}
        name={props.name}
        onChange={handleChange}
        value={formState.data[props.name as keyof FormStateData]}
        errors={
          formState.errors![props.name as keyof FormStateErrors]!.length > 0
            ? true
            : false
        }
      />
      {formState.errors![props.name as keyof FormStateErrors]!.length > 0 && (
        <FormError>
          {formState.errors![props.name as keyof FormStateErrors]!.join(", ")}
        </FormError>
      )}
    </>
  );
};

function Form({ children }: { children: React.ReactNode }) {
  const formContext = React.useContext(FormContext)!;
  const { handleSubmit } = formContext;
  return <FormStyle onSubmit={handleSubmit}>{children}</FormStyle>;
}

export default Form;
