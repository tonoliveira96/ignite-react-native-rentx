import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import {
  Container,
  Header,
  CardImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
} from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>{/* <BackButton onPress={() => {}} /> */}</Header>
      <CardImage>
        <ImageSlider
          imagesUrl={[
            "https://cdn.motor1.com/images/mgl/z2or8/s1/test-audi-rs-5-sportback-2020-facelift.jpg",
          ]}
        />
      </CardImage>

      <Content>
        <Details>
          <Description>
            <Brand>Ferrari</Brand>
            <Name>Ferrari nova</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120</Price>
          </Rent>
        </Details>

        <About>
          O empenho em analisar a contínua expansão de nossa atividade promove a
          alavancagem dos conhecimentos estratégicos para atingir a excelência.
        </About>
      </Content>
    </Container>
  );
}
