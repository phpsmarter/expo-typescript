import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
import { FontAwesome, Ionicons, Feather, Octicons } from "@expo/vector-icons";
import Header from "../../components/backup/Header2";

const HeaderBar = (props: ILikeNumber) => {
  return (
    <View
      style={{
        width: "100%",
        marginTop: 30,
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: "rgba(158, 157, 167, 1.000)"
      }}
    >
      <Ionicons name="ios-menu" size={24} color="rgba(219, 225, 227, 1.000)" />
      <Text
        style={{
          alignSelf: "center",
          width: 100,
          fontSize: 18,
          color: "white",
          textAlign: "center"
        }}
      >
        Shopping
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <View
          style={{
            height: 50,
            width: 40,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Ionicons
            name="ios-heart"
            size={24}
            color="rgba(219, 225, 227, 1.000)"
          />
          <View
            style={{
              position: "absolute",
              top: 8,
              right: 5,
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: "rgba(255, 39, 68, 1.000)",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 8, color: "white" }}>
              {props.likeNumber}
            </Text>
          </View>
        </View>
        <Feather
          name="shopping-cart"
          size={20}
          color="rgba(219, 225, 227, 1.000)"
        />
      </View>
    </View>
  );
};

export default class Page4Component extends React.Component<
  Page2Props,
  Page2State
> {
  constructor(props: Page1Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
        <HeaderBar likeNumber={1} />
        <View
          style={{
            alignItems: "center",
            borderBottomWidth: 0,
            borderBottomColor: ""
          }}
        >
          <Text
            style={{
              marginTop: 10,
              marginBottom: 20,
              fontSize: 10,
              color: "rgba(92, 184, 241, 1.000)"
            }}
          >
            Mens's Shoes
          </Text>
          <Text> Camper Bone</Text>
          <Text style={{ marginBottom: 20 }}>Hight-top Sneaker</Text>

          <Image
            style={{ width: "100%", height: 200, alignItems: "center" }}
            source={require("../../../assets/liberty/page4_image1.png")}
          />
          <Text style={{ fontSize: 16, marginVertical: 20 }}>$139.00</Text>
        </View>
      </View>
    );
  }
}
