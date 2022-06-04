import React from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";

import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateValue,
  DateTitle,
  Content,
  Footer,
} from "./styles";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton color={theme.colors.shape} onPress={() => {}} />

        <Title>
          Escolha uma{`\n`}
          data de início e {`\n`}
          fim do aluguel{`\n`}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De:</DateTitle>
            <DateValue selected={true}>18/06/2022</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>Até:</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>

      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
