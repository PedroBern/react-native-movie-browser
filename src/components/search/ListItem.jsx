import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { Image } from "../shared";

const Item = React.memo(({ title, imdbID, year, type, poster, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.push("Details", {
          title,
          imdbID,
          uri: poster
        })
      }
    >
      <Image uri={poster} />
      <View style={styles.description}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <Text style={styles.info}>{`${year} (${type})`}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  item: {
    padding: 8,
    flexDirection: "row",
    flex: 1
  },
  description: {
    flex: 1,
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 16,
    flexWrap: "wrap",
    fontWeight: "bold"
  },
  info: {
    fontSize: 12
  }
});

export default withNavigation(Item);
