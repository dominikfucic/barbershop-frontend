import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Error } from "../components/Error";
import Form, { FormField } from "../components/Form/Form";
import {
  FormButton,
  FormButtonContainer,
  FormGroup,
  FormTitle,
} from "../components/Form/Form.styled";
import { FormContext } from "../components/Form/FormProvider";
import {
  emailValidator,
  passwordValidator,
  repeatPasswordValidator,
  requiredValidator,
} from "../components/Form/Validators";

function SignUp() {
  const navigate = useNavigate();
  const formContext = React.useContext(FormContext)!;
  const { setFormState } = formContext;
  const { error } = React.useContext(AuthContext)!;


  useEffect(() => {
    return () => {
      setFormState((state) => {
        return {
          ...state,
          data: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: "",
          },
          errors: {},
          validators: {},
        };
      });
    };
  }, []);
  return (
    <Form>
      {error && <Error>{error.message}</Error>}
      <FormTitle>Sign Up</FormTitle>
      <FormField
        type="text"
        name="firstName"
        label="First Name:"
        validators={[requiredValidator]}
      />
      <FormField
        type="text"
        name="lastName"
        label="Last Name:"
        validators={[requiredValidator]}
      />
      <FormField
        type="email"
        name="email"
        label="Email:"
        validators={[requiredValidator, emailValidator]}
      />
      <FormField
        type="password"
        name="password"
        label="Password:"
        validators={[requiredValidator, passwordValidator]}
      />
      <FormField
        type="password"
        name="repeatPassword"
        label="Repeat Password:"
        validators={[requiredValidator, repeatPasswordValidator]}
      />
      <FormButtonContainer>
        <FormButton
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        >
          Back
        </FormButton>
        <FormButton variant="primary">Sign Up</FormButton>
      </FormButtonContainer>
    </Form>
  );
}

export default SignUp;
