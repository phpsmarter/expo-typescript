import * as React from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ImageBackground
} from "react-native";

import { Octicons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { SearchBar } from "../components/featurescreen1/SearchBar";
import { FeatureList } from "../components/featurescreen1/FeatureList";

export interface HeaderProps {
  size: number;
  color: string;
}

/** define Comments type  is  Array of Comment interface */

//type Comments=Comment[];
/** define Article interface */

const Header = (props: HeaderProps) => {
  const { size, color } = { ...props };
  return (
    <View
      style={{
        height: 40,
        flexDirection: "row",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 30,
        backgroundColor: "transparent",
        borderBottomWidth: 0.6,
        borderBottomColor: "rgba(233, 233, 233, 0.5)"
      }}
    >
      <Ionicons name="md-menu" size={size} color={color} />
      <Image
        source={require("../../assets/reader_icon.png")}
        style={{ width: 20, height: 20 }}
      />
      <Ionicons name="ios-search" size={size} color={color} />
    </View>
  );
};

export default class FeatureScreen extends React.Component<{}, DemoState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <StatusBar backgroundColor="black" barStyle="light-content" />

        <Header size={24} color={"black"} />
        <SearchBar
          placeholder="search by name"
          borderColor="rgba(255, 79, 32, 1.000)"
        />
        <FeatureList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  }
});
