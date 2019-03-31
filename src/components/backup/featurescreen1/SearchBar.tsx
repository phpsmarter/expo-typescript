import * as React from "react";
import { View, Text, TextInput } from "react-native";
//import { FontAwesome } from "@expo/vector-icons";

export interface SearchBarProps {
  placeholder: string;
  borderColor: string;
}

export function SearchBar(props: SearchBarProps) {
  return (
    <View
      style={{
        width: "90%",
        height: 36,
        borderRadius: 6,
        borderWidth: 0.5,

        borderColor: props.borderColor,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <View style={{ marginRight: 20 }}>
        {/* <FontAwesome
          name="search"
          size={16}
          color="rgba(194, 194, 194, 1.000)"
        /> */}
        <Text>Docz</Text>
      </View>

      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="rgba(194, 194, 194, 1.000)"
      />
    </View>
  );
}
