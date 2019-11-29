import React from "react";
import PropTypes from "prop-types";
import { View, Image, StyleSheet } from "react-native";

const MyImage = ({ uri, wallpaper }) => {
  const [image, setImage] = React.useState(true);
  return image ? (
    <Image
      style={wallpaper ? styles.wallpaper : styles.poster}
      source={{ uri }}
      onError={() => setImage(false)}
    />
  ) : (
    <View style={[styles.poster, styles.error]} />
  );
};

MyImage.defaultProps = {
  wallpaper: false
};

MyImage.propTypes = {
  wallpaper: PropTypes.bool,
  uri: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  poster: {
    width: 64,
    height: 64,
    marginRight: 16
  },
  wallpaper: {
    width: "100%",
    padding: 16,
    alignSelf: "center",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "black"
  },
  error: {
    backgroundColor: "grey"
  }
});

export default MyImage;
