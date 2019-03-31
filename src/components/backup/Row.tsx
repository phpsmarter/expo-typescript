import * as React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const StyledRow = styled(View)`

  flex-direction:row;
  align-items:center;
  background-color:{props.backgroundColor};
  height:{props=>props.height};


`;
enum justifyContent {
  "flex-start",
  "center",
  "space-between",
  "space-around",
  "flex-end"
}

export interface RowProps {
  height: number;

  backgroundColor?: string;
  children: JSX.Element;
}

export default class Row extends React.Component<RowProps, any> {
  constructor(props: RowProps) {
    super(props);
  }

  public render() {
    return <StyledRow>{this.props.children}</StyledRow>;
  }
}
