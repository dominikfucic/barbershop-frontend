import React from "react";
import styled from "styled-components";
export const WizzardContext = React.createContext<WizzardContext | null>(null);

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 425px) {
    width: 425px;
  }
`;

const { Provider } = WizzardContext;

function Wizzard({ children }: { children: React.ReactNode }) {
  const [wizzardState, setWizzardState] = React.useState<WizzardState>({
    currentDate: new Date(),
    currentStep: 1,
  });

  const [services, setServices] = React.useState<Service[]>([
    {
      id: 1,
      name: "Haircut",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at tincidunt mauris.",
      price: 30,
      duration: 45,
    },
    {
      id: 2,
      name: "Haircut",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at tincidunt mauris.",
      price: 30,
      duration: 45,
    },
    {
      id: 3,
      name: "Haircut",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at tincidunt mauris.",
      price: 30,
      duration: 45,
    },
  ]);

  const [barbers, setBarbers] = React.useState<Barber[]>([
    {
      id: 1,
      firstName: "Test",
      lastName: "Barber",
    },
  ]);

  return (
    <Provider
      value={{
        wizzardState,
        setWizzardState,
        currentDate: wizzardState.currentDate,
        currentStep: wizzardState.currentStep,
        services,
        barbers,
      }}
    >
      <Container>{children}</Container>
    </Provider>
  );
}

export default Wizzard;
