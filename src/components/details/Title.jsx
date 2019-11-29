import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet, View } from "react-native";

const Title = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16
  },
  text: {
    fontSize: 24
  }
});

export default Title;
