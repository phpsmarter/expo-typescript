import * as React from "react";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export interface MyIconProps {
  type?: string;
  name: string;
  color: string;
  checked?: boolean;
  size: number;
}

const MyIcon: React.SFC<MyIconProps> = props => {
  const { type, name, color, size } = { ...props };
  const fs = size ? size : 18;

  return <Ionicons name={name} size={size} color={color} />;
};

export default MyIcon;
