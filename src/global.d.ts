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

  interface Service {
    id: number;
    name: string;
    desc: string;
    price: number;
    duration: number;
  }

  interface Barber {
    id: number;
    firstName: string;
    lastName: string;
  }

  interface Appointment {
    service?: Service;
    barber?: Barber;
    startDateTime?: Date;
    endDateTime?: Date;
    valid?: boolean;
  }

  interface User {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    repeatPassword?: string;
  }

  interface AuthContext {
    login: () => void;
    logout: () => void;
    register: (user: User) => void;
    user: User | null;
  }

  interface AppointmentContext {
    appointment: Appointment | null;
    setAppointment: React.Dispatch<React.SetStateAction<Appointment | null>>;
  }

  interface WizzardContext {
    wizzardState: WizzardState;
    setWizzardState: React.Dispatch<React.SetStateAction<WizzardState>>;
    currentDate: Date;
    currentStep: number;
    services: Service[];
    barbers: Barber[];
  }

  interface WizzardState {
    currentDate: Date;
    currentStep: number;
  }

  interface DayProps {
    active?: boolean;
    selected?: boolean;
  }
}

