import * as React from "react";
import { View, Text, Image } from "react-native";

export interface ContentAbstractionProps {
  abstraction: string;
}

export function ContentAbstraction(props: ContentAbstractionProps) {
  return (
    <View
      style={{
        alignSelf: "center",
        marginTop: 10,

        alignItems: "center",
        justifyContent: "flex-start",

        width: "90%",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: "rgba(228, 228, 228, 1.000)"
      }}
    >
      <Text style={{ fontSize: 16, lineHeight: 28 }}>{props.abstraction}</Text>
    </View>
  );
}
