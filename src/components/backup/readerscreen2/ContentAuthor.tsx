import * as React from "react";
import { View, Text, Image } from "react-native";

export interface ContentAuthorProps {
  author: { name: string; avatarUrl: string };
}

export default function ContentAuthor(props: ContentAuthorProps) {
  return (
    <View
      style={{
        height: 36,
        marginTop: 30,
        paddingHorizontal: 10,
        width: "90%",
        borderWidth: 0.7,
        borderColor: "rgba(182, 182, 182, 1.000)",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <Image
        source={props.author.avatarUrl}
        style={{ width: 20, height: 20, marginRight: 10 }}
      />
      <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.author.name}</Text>
      <View
        style={{
          height: 36,
          width: 60,
          borderLeftWidth: 0.8,
          borderLeftColor: "rgba(182, 182, 182, 1.000)",
          marginLeft: 100,
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            marginLeft: 8,
            fontSize: 10,
            color: "rgba(46, 88, 166, 1.000)"
          }}
        >
          All Posts
        </Text>
      </View>
    </View>
  );
}
