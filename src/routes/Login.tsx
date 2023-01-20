import { useNavigate } from "react-router-dom";
import Form, { FormField } from "../components/Form/Form";
import {
  FormButton,
  FormButtonContainer,
  FormTitle,
} from "../components/Form/Form.styled";

function Login() {
  const navigate = useNavigate();
  return (
    <Form>
      <FormTitle>Log In</FormTitle>
      <FormField type="email" name="email" label="Email:" />
      <FormField type="password" name="password" label="Password:" />
      <FormButtonContainer>
        <FormButton
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup");
          }}
        >
          Sign Up
        </FormButton>
        <FormButton variant="primary">Log In</FormButton>
      </FormButtonContainer>
    </Form>
  );
}

export default Login;
