import * as React from "react";
import { View, Text } from "react-native";
//import { createBottomTabNavigator, createAppContainer } from "react-navigation";
//import ReaderScreen1 from "./page/language-learning-screen1";
//import ReaderScreen2 from "./page/language-learning-screen2";
//import ReaderScreen3 from "./page/language-learning-screen3";
//import ReaderScreen4 from "./page/language-learning-screen4";
//import ReaderScreen5 from "./page/order-now";
//import FoodScreen1 from "./page/burger";
//import ChatScreen from "./page/chat";
//import CalendarScreen from "./page/calendar";
//import AppleCredit from "./page/apple-credit";

//import Slider from "./page/slider";
//import ProfileScreen from "./page/kino/profile3";

//import PageScreen from "./page/liberty/Page4";
import PageScreen from "./page/apartment/apartment2";

export interface APPProps {}
export interface APPState {
  text: string;
}

export default class APP extends React.Component<APPProps, APPState> {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
  }
  public render() {
    return (
      <View
        style={{
          borderWidth: 0,
          borderColor: "blue",
          flex: 1,

          backgroundColor: "white"
        }}
      >
        <PageScreen />
      </View>
    );
  }
}
