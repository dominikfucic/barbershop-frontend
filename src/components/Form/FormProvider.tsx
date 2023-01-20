import React from "react";

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
  // as keyof FormStateData]

  const validate = () => {
    const { data, validators } = formState;
    const newErrors = {} as FormStateErrors;
    Object.entries(validators!).forEach(([key, validators]) => {
      if (validators) {
        const errors = validators.reduce((acc, validator) => {
          const validatorError = validator(formState.data[key as keyof FormStateData], data.password);
          if (validatorError.length) {
            validatorError.forEach(error => {
              if(error.trim() !== '') acc = [...acc, error]
            })
          }
          return acc;
        }, [] as string[]);
        if (errors.length) {
          newErrors[key as keyof FormStateErrors] = errors;
        }
      }
    });

    setFormState({
      ...formState,
      errors: newErrors,
    });

    return false;
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (validate()) console.log(formState);
    console.log("unvalidated");
  }

  return (
    <Provider value={{ formState, setFormState, handleChange, handleSubmit }}>
      {children}
    </Provider>
  );
}
