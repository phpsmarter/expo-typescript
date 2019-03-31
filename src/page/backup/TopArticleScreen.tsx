import * as React from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";

import {
  Zocial,
  Entypo,
  Octicons,
  Ionicons,
  FontAwesome
} from "@expo/vector-icons";

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
      <Ionicons name="ios-menu" size={size} color={color} />
      <Text style={{ fontSize: 18, color: "white" }}>Top Articles</Text>
      <Ionicons name="ios-search" size={size} color={color} />
    </View>
  );
};

const Category = () => {
  return (
    <View
      style={{
        marginTop: 400,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        paddingHorizontal: 20
      }}
    >
      <View
        style={{
          width: 70,
          backgroundColor: "rgba(255, 202, 59, 1.000)",
          height: 20,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 10 }}>FASHION</Text>
      </View>
      <Text
        style={{
          marginLeft: 10,
          fontSize: 12,
          color: "rgba(205, 205, 205, 1.000)"
        }}
      >
        12:10 pm ,13 Aug 2016
      </Text>
    </View>
  );
};

const From = () => {
  return (
    <View
      style={{
        width: "80%",
        alignSelf: "center",
        height: 40,
        borderWidth: 0.5,
        borderColor: "rgba(255, 255, 255, 1.000)",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <View style={{ flexDirection: "row", flex: 6, alignItems: "center" }}>
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 5
          }}
        >
          <Zocial name="google" size={20} color="black" />
        </View>
        <Text
          style={{
            marginLeft: 10,
            color: "rgba(255, 255, 255, 1.000)",
            fontSize: 14
          }}
        >
          The Guardian
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "row",
          height: 40,
          width: 100,
          alignItems: "center",
          flex: 4,
          justifyContent: "center"
        }}
      >
        <FontAwesome
          name="bookmark-o"
          size={24}
          color="rgba(255, 255, 255, 1.000)"
          style={{ marginRight: 30 }}
        />
        <FontAwesome
          name="share-alt"
          size={24}
          color="rgba(255, 255, 255, 1.000)"
        />
      </View>
    </View>
  );
};

export default class WeatherCastScreen extends React.Component<{}, {}> {
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
        <ImageBackground
          source={require("../../assets/topArticle_bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <StatusBar backgroundColor="black" barStyle="light-content" />

          <Header size={24} color={"white"} />
          <Category />
          <Text
            style={{
              marginTop: 10,
              paddingHorizontal: 10,
              fontSize: 26,
              color: "white",
              lineHeight: 32
            }}
          >
            Who Should Play Freddie Mercury in the Queen Biopic
          </Text>

          <View
            style={{
              marginTop: 40,
              flexDirection: "row",
              width: "100%",
              paddingHorizontal: 10,
              alignItems: "center",
              justifyContent: "flex-start",
              height: 40
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "rgba(242, 242, 242, 1.000)",
                marginRight: 5
              }}
            >
              30492 views
            </Text>
            <Entypo
              name="dot-single"
              size={14}
              color="rgba(242, 242, 242, 1.000)"
            />
            <Text
              style={{
                fontSize: 14,
                color: "rgba(242, 242, 242, 1.000)",
                marginLeft: 5
              }}
            >
              3 comments
            </Text>
          </View>
          <From />
        </ImageBackground>
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
