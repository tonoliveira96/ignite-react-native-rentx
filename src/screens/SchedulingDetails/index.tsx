import React from "react";
import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Feather } from "@expo/vector-icons";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

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
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import { Button } from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

export function SchedulingDetails() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
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

        <Acessories>
          <Acessory name="350Km/h" icon={speedSvg} />
          <Acessory name="3.2s" icon={accelerationSvg} />
          <Acessory name="800hp" icon={forceSvg} />
          <Acessory name="Gasolina" icon={gasolineSvg} />
          <Acessory name="Auto" icon={exchangeSvg} />
          <Acessory name="2 pessoas" icon={peopleSvg} />
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>04/06/2022</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(24)}
            color={theme.colors.shape}
          />
          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>08/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x 3</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
