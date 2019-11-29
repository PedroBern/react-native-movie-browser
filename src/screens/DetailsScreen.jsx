import React from "react";
import { StyleSheet, Text, View } from "react-native";

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>This is my detail screen</Text>
    </View>
  );
}

DetailsScreen.navigationOptions = {
  title: "Details"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DetailsScreen;
