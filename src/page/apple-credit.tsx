import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { LinearGradient } from "expo";

export interface AppleCreditProps {}

export interface AppleCreditState {}
const arr = [1, 2, 3, 4, 5, 6];
const SimItem = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["rgba(171, 170, 170, 1.000)", "rgba(203, 203, 203, 1.000)"]}
      style={{
        width: 21,
        height: 10,

        borderWidth: 1,
        borderColor: "rgba(152, 152, 152, 1.000)",
        marginHorizontal: 4,
        marginBottom: 1,
        marginTop: 2,
        borderRadius: 4
      }}
    />
  );
};

const Sim = () => {
  return (
    <View
      style={{
        marginTop: -20,
        width: 70,
        height: 50,
        borderRadius: 14,
        backgroundColor: "rgba(180, 177, 177, 1.000)",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5
      }}
    >
      {arr.map(index => {
        return <SimItem key={index} />;
      })}
    </View>
  );
};

export default class AppleCreditComponent extends React.Component<
  AppleCreditProps,
  AppleCreditState
> {
  constructor(props: AppleCreditProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View
        style={{
          height: 200,
          width: 350,
          backgroundColor: "rgb(238, 237, 238)",
          borderRadius: 12,
          shadowOffset: { width: -6, height: 6 },
          shadowOpacity: 1,
          shadowColor: "rgba(90, 89, 90, 1.000)",
          shadowRadius: 3
        }}
      >
        <Image
          source={require("../../assets/apple_logo.png")}
          style={{ position: "absolute", left: 30, top: 30 }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 80,

            alignSelf: "center",
            height: 80,
            width: "84%",

            borderWidth: 0,
            borderColor: "red"
          }}
        >
          <Text
            style={{
              color: "rgba(109, 109, 109, 1.000)",
              fontSize: 20,
              fontFamily: "Arial"
            }}
          >
            Marisa Robertson
          </Text>
          <Sim />
        </View>
      </View>
    );
  }
}
