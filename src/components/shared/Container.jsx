import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, ScrollView } from "react-native";

const Container = ({ children, scroll }) => {
  return scroll ? (
    <ScrollView
      style={[styles.root, styles.padding]}
      contentContainerSyle={styles.layout}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.root, styles.layout]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  layout: {
    alignItems: "center",
    justifyContent: "flex-start"
  },
  padding: {
    padding: 16
  }
});

export default Container;
