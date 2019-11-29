import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, View } from "react-native";
import connect from "../../store";
import { onChangeInputValue } from "../../store/actions";

const SearchInput = React.memo(({ inputValue, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={inputValue}
        onChangeText={onChangeText}
        selectTextOnFocus
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 16,
    paddingRight: 16
  },
  input: {
    flex: 1,
    width: "100%",
    fontSize: 24,
    justifyContent: "center"
  }
});

export default connect(
  SearchInput,
  state => ({ inputValue: state.search.inputValue }),
  dispatch => ({
    onChangeText: text => dispatch(onChangeInputValue(text, dispatch))
  })
);
