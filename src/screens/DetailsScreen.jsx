import React from "react";
import { Title, Details } from "../components/details";
import { Image, Container } from "../components/shared";

const DetailsScreen = ({ navigation }) => {
  return (
    <Container scroll>
      <Image wallpaper uri={navigation.getParam("uri")} />
      <Title>{navigation.getParam("title")}</Title>
      <Details id={navigation.getParam("imdbID")} />
    </Container>
  );
};

DetailsScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("title")
  };
};

export default DetailsScreen;
