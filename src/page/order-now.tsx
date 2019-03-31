import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableWithoutFeedback
} from "react-native";

export interface OrderNowProps {}

export interface OrderNowState {
  imageUrl: string;
  subtitle: string;
  title: string;
  description: string;
}

export default class OrderNowComponent extends React.Component<
  OrderNowProps,
  OrderNowState
> {
  constructor(props: OrderNowProps) {
    super(props);
    this.state = {
      imageUrl: require("../../assets/coffee.png"),
      subtitle: "The summer of 2015",
      title: "New Flavour",
      description:
        "Capture the last moments of summer drinking our latest espresso"
    };
  }

  public render() {
    return (
      <ImageBackground
        source={this.state.imageUrl}
        style={{ width: "100%", height: "100%", alignItems: "center" }}
      >
        <View
          style={{
            alignSelf: "center",
            marginTop: 50,
            width: "64%",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "rgba(210, 210, 210, 1.000)",
              marginBottom: 10
            }}
          >
            {this.state.subtitle}
          </Text>

          <Text style={{ fontSize: 16, marginBottom: 20 }}>
            {this.state.title}
          </Text>
          <View
            style={{
              width: 40,
              height: 3,
              backgroundColor: "rgba(81, 81, 81, 1.000)",
              marginBottom: 20
            }}
          />

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgba(140, 142, 147, 1.000)",
              lineHeight: 20
            }}
          >
            {this.state.description}
          </Text>
          <TouchableWithoutFeedback>
            <View
              style={{
                marginTop: 500,
                width: 100,
                height: 32,
                backgroundColor: "rgba(71, 140, 186, 1.000)",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 2
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 12, color: "white" }}
              >
                Order now
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    );
  }
}
