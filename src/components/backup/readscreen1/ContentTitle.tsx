import * as React from "react";
import { View, Text } from "react-native";

export interface ContentTitleProps {
  title: string;
}

export function ContentTitle(props: ContentTitleProps) {
  return (
    <View
      style={{
        marginTop: 10,

        alignItems: "flex-start",
        justifyContent: "center",
        height: 120,
        width: "100%",
        paddingHorizontal: 15
      }}
    >
      <Text style={{ textAlign: "left", fontSize: 24 }}>{props.title}</Text>
    </View>
  );
}
