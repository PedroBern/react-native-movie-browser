import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import connect from "../../store";
import ListItem from "./ListItem";

import { addNextPage } from "../../store/actions";

const RenderList = React.memo(
  ({ data, text, page, addNextPage, shouldAddNextPage }) => {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem {...item} />}
        keyExtractor={(item, index) => item.imdbID + index}
        onEndReached={() =>
          shouldAddNextPage ? addNextPage(text, page + 1) : null
        }
      />
    );
  }
);

export default connect(
  RenderList,
  state => ({
    text: state.search.inputValue,
    page: state.search.page,
    data: state.search.data,
    shouldAddNextPage: state.search.totalResults / state.search.page > 10
  }),
  dispatch => ({
    addNextPage: (text, page) => dispatch(addNextPage(text, dispatch, page))
  })
);
