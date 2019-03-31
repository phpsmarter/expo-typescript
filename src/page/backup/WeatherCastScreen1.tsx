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

import { Entypo, Octicons, Ionicons, FontAwesome } from "@expo/vector-icons";

import WeatherDetailComponent, {
  WeatherDetailProps
} from "../components/weathercast/WeatherDetail";
import WeatherChartComponent, {
  IWeatherItem
} from "../components/weathercast/WeatherChart";

export interface HeaderProps {
  size: number;
  color: string;
}

export interface IWeatherCastState {
  weatherDetail: WeatherDetailProps;
  weatherChartData: IWeatherItem[];
}
const weatherDetailData: WeatherDetailProps = {
  location: "South Wilfridside",
  weather: "sunny",
  weather_image: require("../../assets/weather_icon1.png"),
  temperature: 18
};

const weatherChartData: IWeatherItem[] = [
  {
    time: "now",
    weatherImage: require("../../assets/weather_icon2.png"),
    temperature: 18
  },
  {
    time: "12:00",
    weatherImage: require("../../assets/weather_icon3.png"),
    temperature: 24
  },
  {
    time: "01:00",
    weatherImage: require("../../assets/weather_icon4.png"),
    temperature: 0
  },
  {
    time: "02:00",
    weatherImage: require("../../assets/weather_icon5.png"),
    temperature: -20
  },
  {
    time: "03:00",
    weatherImage: require("../../assets/weather_icon6.png"),
    temperature: 16
  }
];

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
      <Text style={{ fontSize: 12, color: "white" }}>Today,28 Mar 2016</Text>
      <Entypo name="dots-three-horizontal" size={size} color={color} />
    </View>
  );
};

export default class WeatherCastScreen extends React.Component<
  {},
  WeatherCastState
> {
  constructor(props) {
    super(props);
    this.state = {
      weatherDetail: weatherDetailData,
      weatherChartData: weatherChartData
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ImageBackground
          source={require("../../assets/weather_bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <StatusBar backgroundColor="black" barStyle="light-content" />

          <Header size={24} color={"white"} />
          <WeatherDetailComponent {...this.state.weatherDetail} />
          <WeatherChartComponent
            weatherChartData={this.state.weatherChartData}
          />
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
