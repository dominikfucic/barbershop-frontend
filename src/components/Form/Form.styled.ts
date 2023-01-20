import styled from "styled-components";

export const FormStyle = styled.form`
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
`;

export const FormGroup = styled.div`
  span:last-child {
    margin-bottom:14px;
  }
`;

export const FormFieldLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
`;

export const FormFieldInput = styled.input`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: ${({ errors }: { errors: string[] }) => (errors.length > 0 ? 0 : "20px")};
`;

export const FormError = styled.span`
  display: block;
  font-size: small;
  color: red;
`;

export const FormTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 20px;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormButton = styled.button`
  background-color: ${({ variant }: { variant: ButtonVariantType }) => {
    switch (variant) {
      case "primary":
        return "#4CAF50";
      case "secondary":
        return "#767676";
    }
  }};
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: ${({ variant }: { variant: ButtonVariantType }) => {
      switch (variant) {
        case "primary":
          return "#3e8e41";
        case "secondary":
          return "#4e4e4e";
      }
    }};
  }
`;
