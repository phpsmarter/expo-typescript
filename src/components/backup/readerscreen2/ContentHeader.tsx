import * as React from "react";
import { View, Text } from "react-native";

export interface ContentHeaderProps {
  abstraction: string;
}

export default function ContentHeader(props: ContentHeaderProps) {
  return (
    <View
      style={{
        marginTop: 30,
        paddingHorizontal: 10,
        width: "100%"
      }}
    >
      <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.abstraction}</Text>
    </View>
  );
}
