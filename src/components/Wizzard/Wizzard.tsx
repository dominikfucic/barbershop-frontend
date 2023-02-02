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

  return (
    <Provider
      value={{
        wizzardState,
        setWizzardState,
        currentDate: wizzardState.currentDate,
        currentStep: wizzardState.currentStep,
      }}
    >
      <Container>{children}</Container>
    </Provider>
  );
}

export default Wizzard;
