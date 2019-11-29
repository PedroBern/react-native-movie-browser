import React from "react";
import { View, Text, StyleSheet } from "react-native";
import connect from "../../store";
import { getMovieDetails } from "../../store/actions";

const Details = ({
  id,
  getMovieDetails,
  plot,
  currentMovie,
  year,
  runtime
}) => {
  React.useEffect(() => {
    getMovieDetails(id);
  }, []);

  if (id !== currentMovie) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      <View style={styles.info}>
        <Text>{`Duration ${runtime}`}</Text>
        <Text>{`Year: ${year}`}</Text>
      </View>
      <Text>{plot}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default connect(
  Details,
  state => ({
    plot: state.movie.plot,
    year: state.movie.year,
    runtime: state.movie.runtime,
    currentMovie: state.movie.imdbID
  }),
  dispatch => ({
    getMovieDetails: id => dispatch(getMovieDetails(id, dispatch))
  })
);
