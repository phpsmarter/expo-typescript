import * as React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import ColorButtonGroup from "./ColorButtonGroup";

export interface SetBackgroundColorProps {
  setBackgroundColor: (selfIndex: number) => void;
}

export interface SetBackroundColorState {}

export default class SetBackgroundColorComponent extends React.Component<
  SetBackgroundColorProps,
  SetBackroundColorState
> {
  constructor(props: SetBackgroundColorProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { setBackgroundColor } = { ...this.props };
    return (
       
    );
  }
}
