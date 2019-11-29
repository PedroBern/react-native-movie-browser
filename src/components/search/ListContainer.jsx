import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import connect from "../../store";
import RenderList from "./RenderList";

const Feedback = ({ children }) => (
  <Text style={styles.feddback}>{children}</Text>
);

const List = ({ error, totalResults, isLoading, page }) => {
  return (
    <View style={styles.container}>
      {isLoading && page === 1 ? (
        <Feedback>Loading...</Feedback>
      ) : error ? (
        <Feedback>{error}</Feedback>
      ) : (
        <View>
          <Feedback>
            {isLoading ? "Loading more results..." : `${totalResults} results`}
          </Feedback>
          <RenderList />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    width: "100%"
  },
  feddback: {
    fontSize: 16,
    width: "100%",
    textAlign: "center"
  }
});

export default connect(
  List,
  state => ({
    error: state.search.error,
    page: state.search.page,
    totalResults: state.search.totalResults,
    isLoading: state.search.isLoading
  }),
  null
);
