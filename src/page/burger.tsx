import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableWithoutFeedback
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export interface BurgerProps {}

export interface BurgerState {
  imageUrl: string;
  subtitle: string;
  title: string;
  description: string;
  time: string;
  step: number;
  rating: number;
}

const Rating = (props: any) => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          position: "absolute",
          right: -5,
          top: 100,
          width: 80,
          height: 32,
          backgroundColor: "rgba(236, 194, 10, 1.000)",
          alignItems: "center",

          borderRadius: 6,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.6,
          shadowRadius: 1,
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <FontAwesome name="star-o" size={20} color="white" />
        <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
          {props.rating}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default class BurgerComponent extends React.Component<
  BurgerProps,
  Burgertate
> {
  constructor(props: BurgerProps) {
    super(props);
    this.state = {
      imageUrl: require("../../assets/burger.png"),
      subtitle: "Step by step recipe",
      title: "Mystery Box Burger",
      description:
        "After making the rice burn place above the smoked bacon and wrap it",
      step: 5,
      rating: 4.8,
      time: "20min"
    };
  }

  public render() {
    return (
      <View>
        <ImageBackground
          source={this.state.imageUrl}
          style={{
            marginTop: -40,
            width: "100%",
            height: "98%",
            alignItems: "flex-start"
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              marginTop: 80,
              width: "64%",
              alignItems: "flex-start",
              paddingLeft: 20
            }}
          >
            <Text style={{ fontSize: 24, color: "white", marginBottom: 10 }}>
              {this.state.title}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "rgba(197, 221, 238, 1.000)",
                marginBottom: 20
              }}
            >
              {this.state.subtitle}
            </Text>
            <Text style={{ fontSize: 14, color: "rgba(188, 235, 144, 1.000)" }}>
              ~{this.state.time}
            </Text>
          </View>
          <Rating rating={this.state.rating} />
        </ImageBackground>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            justifyContent: "center"
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "rgba(139, 191, 87, 1.000)",
              marginRight: 20
            }}
          >
            <Text style={{ fontSize: 24, color: "rgba(139, 191, 87, 1.000)" }}>
              {this.state.step}
            </Text>
          </View>
          <Text
            style={{
              width: 210,
              fontSize: 14,
              color: "rgba(128, 130, 136, 1.000)",
              marginRight: 20
            }}
          >
            {this.state.description}
          </Text>
          <Ionicons
            name="ios-arrow-forward"
            size={30}
            color="rgba(192, 193, 196, 1.000)"
          />
        </View>
      </View>
    );
  }
}
