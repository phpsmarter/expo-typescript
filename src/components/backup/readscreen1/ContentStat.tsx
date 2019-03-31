import * as React from "react";
import { View, Text } from "react-native";

export interface ContentStatProps {
  viewNumber: number;
  commentNumber: number;
}

export function ContentStat(props: ContentStatProps) {
  return (
    <View
      style={{
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 20,
        width: "100%",
        paddingHorizontal: 15
      }}
    >
      <Text
        style={{
          color: "rgba(182, 182, 182, 1.000)",
          textAlign: "left",
          fontSize: 10,
          marginRight: 15
        }}
      >
        {props.viewNumber} views .
      </Text>
      <Text
        style={{
          color: "rgba(182, 182, 182, 1.000)",
          textAlign: "left",
          fontSize: 10
        }}
      >
        {props.commentNumber} comments
      </Text>
    </View>
  );
}
