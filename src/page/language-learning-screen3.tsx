import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

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
      <View>
        <Text>LanguageLearningscreen Component3</Text>
      </View>
    );
  }
}
