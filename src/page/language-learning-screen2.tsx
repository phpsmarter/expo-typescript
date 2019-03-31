import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/learning-page2/header";
import Profile from "../components/learning-page2/profile";

export interface LanguageLearningscreenProps {}

export interface LanguageLearningscreenState {}

export default class LanguageLearningscreen extends React.Component<
  LanguageLearningscreenProps,
  LanguageLearningscreenState
> {
  constructor(props: LanguageLearningscreenProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
        <Header />
        <Profile />
      </View>
    );
  }
}
