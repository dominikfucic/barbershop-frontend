import React from "react";
import { useNavigate } from "react-router-dom";
import Form, { FormField } from "../components/Form/Form";
import {
  FormButton,
  FormButtonContainer,
  FormTitle,
} from "../components/Form/Form.styled";

function SignUp() {
  const navigate = useNavigate();
  return (
    <Form>
      <FormTitle>Sign Up</FormTitle>
      <FormField type="text" name="firstName" label="First Name:" />
      <FormField type="text" name="lastName" label="Last Name:" />
      <FormField type="email" name="email" label="Email:" />
      <FormField type="password" name="password" label="Password:" />
      <FormField
        type="password"
        name="repeatPassword"
        label="Repeat Password:"
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
