import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SearchScreen, DetailsScreen } from "./src/screens";
import { Provider } from "./src/store";
import { initialState, reducer } from "./src/store/reducers";

const AppNavigator = createStackNavigator(
  {
    Home: SearchScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#000"
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <Provider reducer={reducer} initialState={initialState}>
      <AppContainer />
    </Provider>
  );
}

export default App;
