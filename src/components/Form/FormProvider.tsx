import { isEmpty } from "lodash";
import React from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const FormContext = React.createContext<FormContextType | null>(null);

const { Provider } = FormContext;

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [formState, setFormState] = React.useState<FormState>({
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    errors: {},
  });

  const authContext = React.useContext(AuthContext)!;
  const { register } = authContext;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setFormState({
      ...formState,
      data: {
        ...formState.data,
        [name]: value,
      },
      errors: {
        ...formState.errors,
        [name]: [],
      },
    });
  }

  const validate = () => {
    const { data, validators } = formState;
    const newErrors = {} as FormStateErrors;
    Object.entries(validators!).forEach(([key, validators]) => {
      if (validators) {
        const errors = validators.reduce((acc, validator) => {
          const validatorError = validator(
            formState.data[key as keyof FormStateData],
            data.password
          );
          if (validatorError.length) {
            validatorError.forEach((error) => {
              if (error.trim() !== "") acc = [...acc, error];
            });
          }
          return acc;
        }, [] as string[]);
        if (errors.length) {
          newErrors[key as keyof FormStateErrors] = errors;
        }
      }
    });

    if (isEmpty(newErrors)) return true;

    setFormState({
      ...formState,
      errors: newErrors,
    });

    return false;
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (validate()) {
      register(formState.data);
      document.location.href = "/";
    }
  }

  return (
    <Provider value={{ formState, setFormState, handleChange, handleSubmit }}>
      {children}
    </Provider>
  );
}
