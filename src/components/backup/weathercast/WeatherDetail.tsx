import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export interface WeatherDetailProps {
  location: string;
  weather: string;
  weather_image: string;
  temperature: number;
}

export interface WeatherDetailState {}

export default class WeatherDetailComponent extends React.Component<
  WeatherDetailProps,
  WeatherDetailState
> {
  constructor(props: WeatherDetailProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View
        style={{
          height: 200,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 0.6,
          borderBottomColor: "rgba(113, 115, 115, 1.000)"
        }}
      >
        <Text style={{ color: "white", marginBottom: 10 }}>
          {this.props.location}
        </Text>
        <Text
          style={{
            color: "rgba(205, 199, 193, 1.000)",
            fontSize: 10,
            marginBottom: 20
          }}
        >
          {this.props.weather}
        </Text>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 30,
            height: 50,
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <Image
            source={this.props.weather_image}
            style={{ width: 40, height: 40 }}
          />
          <Text style={{ fontSize: 45, color: "white", fontWeight: "bold" }}>
            {this.props.temperature} ℃
          </Text>
        </View>
      </View>
    );
  }
}
