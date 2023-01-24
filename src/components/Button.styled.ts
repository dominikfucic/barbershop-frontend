import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 22px;
  background-color: #002df8;
  font-weight: 500;
  color: #fff;
  border-radius: 4px;
  &:disabled {
    background-color: #0021b6;
    color: #eeeeee
  }
`;

export const CalendarButton = styled(Button)`
padding: 0.5rem 1rem;
background-color: #d9d9d9;
color: #000;
&:disabled {
    background-color: #acacac;
    color: #6e6e6e
  }
`
