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
    errors: {
      firstName: [],
      lastName: [],
      email: [],
      password: [],
      repeatPassword: [],
    },
  });

  const validators = {
    firstName: (value: string) => {
      if (!value) {
        return "First name is required";
      }
      return "";
    },
    lastName: (value: string) => {
      if (!value) {
        return "Last name is required";
      }
      return "";
    },
    email: (value: string) => {
      if (!value) {
        return "Email is required";
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return "Invalid email address";
      }
      return "";
    },
    password: (value: string) => {
      if (!value) {
        return "Password is required";
      }
      if (value.length < 8) {
        return "Password must be at least 8 characters";
      }
      return "";
    },
    repeatPassword: (value: string) => {
      if (!value) {
        return "Password is required";
      }
      if (formState.data.password !== value) {
        return "Passwords must match";
      }
      return "";
    },
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState({
      ...formState,
      data: {
        ...formState.data,
        [event.target.name]: event.target.value,
      },
      errors: {
        ...formState.errors,
        [event.target.name]: [],
      },
    });
  }

  const validate = () => {
    const newErrors = {
      firstName: [] as string[],
      lastName: [] as string[],
      email: [] as string[],
      password: [] as string[],
      repeatPassword: [] as string[],
    };
    Object.keys(validators).forEach((field) => {
      const error = validators[field as keyof typeof validators](
        formState.data[field as keyof FormStateData]
      );
      if (error) {
        newErrors[field as keyof typeof newErrors].push(error);
      }
    });
    setFormState((prevState) => ({
      ...prevState,
      errors: newErrors,
    }));
    return Object.values(newErrors).every((errors) => errors.length === 0);
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
