import React from "react";

import {
  ImageIndexs,
  ImageIndex,
  CardImageWrapper,
  CardImage,
  Container,
} from "./styles";

interface Props {
  imagesUrl: string[]
}

export function ImageSlider({imagesUrl}: Props) {
  return (
    <Container>
      <ImageIndexs>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexs>

      <CardImageWrapper>
        <CardImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CardImageWrapper>
    </Container>
  );
}
