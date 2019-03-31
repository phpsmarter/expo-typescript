import * as React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export interface ContentFromProps {
  from: string;
}

export function ContentFrom(props: ContentFromProps) {
  return (
    <View
      style={{
        alignSelf: "center",
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 40,
        width: "90%",
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 0.6,
        borderColor: "rgba(228, 228, 228, 1.000)"
      }}
    >
      <View style={{ alignItems: "center", flexDirection: "row", flex: 7 }}>
        <Image
          source={require("../../../assets/Logo.png")}
          style={{ width: 24, height: 24 }}
        />
        <Text style={{ marginLeft: 10, fontSize: 12, fontWeight: "bold" }}>
          {props.from}
        </Text>
      </View>

      <View
        style={{
          marginLeft: -20,
          width: 50,
          height: 40,
          borderLeftWidth: 0.6,
          borderLeftColor: "rgba(229, 229, 229, 1.000)",
          borderRightWidth: 0.6,
          borderRightColor: "rgba(229, 229, 229, 1.000)",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FontAwesome
          name="bookmark-o"
          size={16}
          color="rgba(178, 178, 178, 1.000)"
        />
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FontAwesome
          name="code-fork"
          size={16}
          color="rgba(178, 178, 178, 1.000)"
        />
      </View>
    </View>
  );
}
