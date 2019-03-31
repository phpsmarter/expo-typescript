import * as React from "react";
import { View, Text, ImageBackground } from "react-native";

export interface ImageContentProps {}

export default class ImageHeadeContent extends React.Component<
  ImageHeadeContentProps,
  any
> {
  public render() {
    return (
      <View style={{ marginTop: 100, width: "100%", paddingLeft: 20 }}>
        <Text
          style={{
            fontSize: 12,
            color: "rgba(169, 167, 164, 1.000)",
            marginBottom: 10
          }}
        >
          08 Sep 2016
        </Text>

        <Text style={{ fontSize: 24, color: "white", lineHeight: 30 }}>
          Happy Friday.Dan Rather Deserves a Second Chance
        </Text>
      </View>
    );
  }
}
