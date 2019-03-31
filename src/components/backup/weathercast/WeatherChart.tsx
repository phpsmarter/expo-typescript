import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { LineChart, Grid } from "react-native-svg-charts";

export interface IWeatherItem {
  time: string;
  weatherImage: string;
  temperature: number;
}

export interface WeatherChartProps {
  weatherChartData: IWeatherItem[];
}

export interface WeatherChartState {}

const WeatherChartItem = (props: IWeatherItem) => {
  return (
    <View style={{ width: 60, height: 100 }}>
      <Text style={{ fontSize: 12, color: "white", marginBottom: 10 }}>
        {props.time}
      </Text>
      <Image
        source={props.weatherImage}
        style={{
          height: 40,
          width: 40,
          resizeMode: "contain",
          marginBottom: 10
        }}
      />
      <Text style={{ fontSize: 14, color: "white" }}>{props.temperature}℃</Text>
    </View>
  );
};

export default class WeatherChartComponent extends React.Component<
  WeatherChartProps,
  WeatherChartState
> {
  constructor(props: WeatherChartProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { weatherChartData } = { ...this.props };
    console.log(weatherChartData);
    return (
      <View
        style={{
          alignItems: "center",
          marginTop: 20,
          width: "100%",
          height: 200
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            paddingHorizontal: 20,
            borderWidth: 0,
            borderColor: "yellow"
          }}
        >
          {weatherChartData.map((item: IWeahterItem, index: number) => {
            return <WeatherChartItem {...item} key={index} />;
          })}
        </View>
      </View>
    );
  }
}
