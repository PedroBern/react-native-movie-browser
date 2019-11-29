import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image } from "react-native";
import connect from "../../store";

const Item = React.memo(({ title, year, type, poster }) => {
  const [image, setImage] = React.useState(true);
  return (
    <View style={styles.item}>
      {image ? (
        <Image
          style={styles.poster}
          source={{ uri: poster }}
          onError={() => setImage(false)}
        />
      ) : (
        <View style={[styles.poster, styles.error]} />
      )}
      <View style={styles.description}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <Text style={styles.info}>{`${year} (${type})`}</Text>
      </View>
    </View>
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
  },
  poster: {
    width: 64,
    height: 64,
    marginRight: 16
  },
  error: {
    backgroundColor: "grey"
  }
});

export default connect(Item, null, null);
