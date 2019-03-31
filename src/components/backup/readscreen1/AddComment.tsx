import * as React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Author } from "../../page/ReaderScreen1";

export interface AddCommentProps {
  mySelf: Author;
}

export function AddComment(props: AddCommentProps) {
  const { name, avatarUrl } = { ...props.mySelf };
  console.log(name);
  return (
    <View
      style={{
        alignSelf: "center",
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 40,
        width: "90%",
        paddingHorizontal: 10
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 6,

          borderWidth: 0.6,
          borderColor: "rgba(237, 237, 237, 1.000)",
          borderRadius: 4,
          padding: 10
        }}
      >
        <Image
          source={avatarUrl}
          style={{ width: 24, height: 24, marginRight: 10 }}
        />
        <TextInput
          placeholderTextColor="rgba(175, 175, 175, 1.000)"
          placeholder="Write comment"
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "rgba(31, 73, 162, 1.000)"
        }}
      >
        <FontAwesome name="upload" size={16} color="white" />
      </View>
    </View>
  );
}
