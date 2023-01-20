import React from "react";

export {};

declare global {
  type ButtonVariantType = "primary" | "secondary";

  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariantType;
  }

  interface FormFieldProps {
    label: string;
    type: string;
    name: string;
    validators?: Validator[];
  }

  type FormStateData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
  };

  interface FormContextType {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formState: FormState;
    setFormState: React.Dispatch<React.SetStateAction<FormState>>;
    handleSubmit: (event: React.FormEvent) => void;
  }

  type FormStateErrors = {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    password?: string[];
    repeatPassword?: string[];
  };

  type Validator = (value: string, password?: string) => string[];

  type FormStateValidators = {
    firstName?: Validator[];
    lastName?: Validator[];
    email?: Validator[];
    password?: Validator[];
    repeatPassword?: Validator[];
  };

  interface FormState {
    data: FormStateData;
    errors: FormStateErrors;
    validators?: FormStateValidators;
  }
}
