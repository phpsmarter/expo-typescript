import * as React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

const StyledHeader = styled.View`
  height: 40;
  width: 100%;
  padding-horizontal: 10;
`;

export interface HeaderProps {}

export default class Header extends React.Component<HeaderProps, any> {
  public render() {
    return (
      <StyledHeader>
        <FontAwesome name="flag-o" size={18} color="rgba(52, 60, 82, 1.000)" />
      </StyledHeader>
    );
  }
}
