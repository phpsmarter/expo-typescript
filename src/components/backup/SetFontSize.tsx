import * as React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

export interface SetFontSizeProps {
  setBigFontSize: () => void;
  setSmallFontSize: () => void;
}

export interface SetFontSizeState {}

export default class SetFontSizeComponent extends React.Component<
  SetFontSizeProps,
  SetFontSizeState
> {
  constructor(props: SetFontSizeProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { setBigFontSize, setSmallFontSize } = { ...this.props };
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 0.6,
          borderBottomColor: "white",
          height: 30
        }}
      >
        <TouchableWithoutFeedback onPress={setSmallFontSize}>
          <Text
            style={{
              width: "50%",
              height: "100%",
              fontSize: 10,
              color: "white",
              textAlign: "center",
              lineHeight: 30,
              borderRightWidth: 1,
              borderColor: "white"
            }}
          >
            A
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={setBigFontSize}>
          <Text
            style={{
              width: "50%",
              height: "100%",
              fontSize: 16,
              color: "white",
              textAlign: "center",
              lineHeight: 30
            }}
          >
            A
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
