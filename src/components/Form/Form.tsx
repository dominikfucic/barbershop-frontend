import { isEmpty } from "lodash";
import React, { FormEvent } from "react";
import {
  FormError,
  FormFieldInput,
  FormFieldLabel,
  FormGroup,
  FormStyle,
} from "./Form.styled";
import { FormContext } from "./FormProvider";

export const FormField = (props: FormFieldProps) => {
  const formContext = React.useContext(FormContext)!;
  const { handleChange, formState, setFormState } = formContext;

  const { data, errors } = formState;

  React.useEffect(() => {
    setFormState((state) => {
      return {
        ...state,
        validators: {
          ...state.validators,
          [props.name]: props.validators,
        },
      };
    });
  }, []);

  return (
    <FormGroup>
      <FormFieldLabel>{props.label}</FormFieldLabel>
      <FormFieldInput
        type={props.type}
        name={props.name}
        onChange={handleChange}
        value={data[props.name as keyof FormStateData]}
        errors={errors?.[props.name as keyof FormStateErrors] ?? []}
      />
      {errors![props.name as keyof FormStateErrors]?.map((error) => (
        <FormError>{error}</FormError>
      ))}
    </FormGroup>
  );
};

function Form({ children }: { children: React.ReactNode }) {
  const formContext = React.useContext(FormContext)!;
  const { handleSubmit } = formContext;
  return <FormStyle onSubmit={handleSubmit}>{children}</FormStyle>;
}

export default Form;
