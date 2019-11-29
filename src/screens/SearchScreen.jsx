import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { SearchInput, List } from "../components/search";
import { Container } from "../components/shared";

const SearchScreen = () => {
  return (
    <Container>
      <List />
    </Container>
  );
};

SearchScreen.navigationOptions = {
  headerTitle: () => <SearchInput />
};

export default SearchScreen;
