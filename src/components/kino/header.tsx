import * as React from "react";
import { View, Text } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

const StyledHeader = styled.View`
  height: 40;
  width: 100%;
  padding-horizontal: 10;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export type IcenterText = {
  centerTextContent?: string;
  centerTextSize?: number;
  centerTextColor?: string;
};

export type IHeaderIcon = {
  leftIconName: string;
  rightIconName: string;
  color: string;
  size: number;
};

export type HeaderProps = IcenterText & IHeaderIcon;

export default class Header extends React.Component<HeaderProps, any> {
  constructor(props: HeaderProps) {
    super(props);
  }

  public render() {
    return (
      <StyledHeader>
        <FontAwesome
          name={this.props.leftIconName}
          size={this.props.size}
          color={this.props.color}
        />
        {this.props.centerTextContent && (
          <Text
            style={{
              fontSize: this.props.centerTextSize,
              fontWeight: "bold",
              color: this.props.color
            }}
          >
            {this.props.centerTextContent}
          </Text>
        )}
        <Feather
          name={this.props.rightIconName}
          size={18}
          color={this.props.color}
        />
      </StyledHeader>
    );
  }
}
