import { StatusBar } from "expo-status-bar";
import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Container, Header, CardImage} from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        {/* <BackButton onPress={() => {}} /> */}
      </Header>
      <CardImage>
      <ImageSlider
        imagesUrl={[
          "https://cdn.motor1.com/images/mgl/z2or8/s1/test-audi-rs-5-sportback-2020-facelift.jpg",
        ]}
      />
      </CardImage>
      
    </Container>
  );
}
