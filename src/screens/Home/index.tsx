import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

export function Home() {
  const carData = {
    thumbnail: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
    brand: "audi",
    name: "RS 5 couple",
    rent: {
      period: "ao dia",
      price: 120,
    },
  };
  const carData2 = {
    thumbnail:
      "https://cdn.motor1.com/images/mgl/z2or8/s1/test-audi-rs-5-sportback-2020-facelift.jpg",
    brand: "audi",
    name: "RS 5 couple",
    rent: {
      period: "ao dia",
      price: 120,
    },
  };
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}
