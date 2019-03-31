import * as React from "react";
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Demo from "./src/Root";
import * as Expo from "expo";

import { Provider } from "react-redux";
import { connect } from "react-redux";
import configureStore from "./src/redux/store";
import { getProducts } from "./src/redux/store/shop/actions";

const store = configureStore();

// const sendMessage = (message: string) => {
//    return({
//     user: 'user123',
//     message: message,
//     timestamp: new Date().getTime()
//    })

// };

export default class App extends Component {
  render() {
    //store.dispatch({ type: "SEND_MESSAGE", payload: "HHH" });

    return (
      <Provider store={store}>
        <Demo />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
