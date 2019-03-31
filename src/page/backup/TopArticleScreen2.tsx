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
      <Text style={{ fontSize: 18, color: "white" }}>Today, 28 Mar 2016</Text>
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

export default class NumberOfDayScreen2 extends React.Component<{}, {}> {
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
          source={require("../../assets/numberDay_bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <StatusBar backgroundColor="black" barStyle="light-content" />

          <Header size={20} color={"white"} />
          <View
            style={{
              marginTop: -100,
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <Text style={{ marginBottom: 20, fontSize: 24, color: "white" }}>
              Number of Day
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 100,
                color: "rgba(253, 202, 75, 1.000)",
                marginBottom: 20
              }}
            >
              $8.3m
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: "white",
                paddingHorizontal: 20,
                lineHeight: 30
              }}
            >
              amount promised by Japan to compensate South Korea for the sexual
              slavery of Korean "comfort women" during World War II
            </Text>
          </View>
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
