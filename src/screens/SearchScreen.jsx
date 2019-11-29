import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { Container, SearchInput, List } from "../components/search";

const SearchScreen = ({ navigation }) => {
  return (
    <Container>
      <List />
    </Container>
  );
};

SearchScreen.navigationOptions = {
  // title: "Search"
  headerTitle: () => <SearchInput />
};

export default SearchScreen;
