import * as React from "react";
import { View, Text, ImageBackground } from "react-native";

export interface ImageHeaderProps {}

export default class ImageHeader extends React.Component<
  ImageHeaderProps,
  any
> {
  public render() {
    return (
      <ImageBackground
        source={require("../../../assets/post3_bg.png")}
        style={{ width: "100%", height: 400, alignItems: "center" }}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}
