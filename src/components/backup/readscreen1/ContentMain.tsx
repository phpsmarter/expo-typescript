import * as React from "react";
import { View, Text, Image } from "react-native";

export interface ContentMainProps {
  mainContent: string;
}

export function ContentMain(props: ContentMainProps) {
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
      <Text style={{ fontSize: 16, lineHeight: 28 }}>{props.mainContent}</Text>
      <Image
        source={require("../../../assets/Video.png")}
        style={{ width: "100%", height: 150 }}
      />
    </View>
  );
}
