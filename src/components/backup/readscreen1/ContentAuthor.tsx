import * as React from "react";
import { View, Text, Image } from "react-native";
import { Author } from "../../page/ReaderScreen1";
export interface ContentAuthorProps {
  author: Author;
}

export function ContentAuthor(props: ContentAuthorProps) {
  return (
    <View
      style={{
        alignSelf: "center",
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 80,
        width: "100%",
        paddingHorizontal: 15,

        borderWidth: 0.6,
        borderColor: "rgba(228, 228, 228, 1.000)"
      }}
    >
      <View>
        <Image
          source={props.author.avatarUrl}
          style={{ width: 36, height: 36 }}
        />
        <View style={{ position: "absolute", top: -5, left: -10 }}>
          <Image
            source={require("../../../assets/Logo.png")}
            style={{ width: 24, height: 24 }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 12,
            color: "rgba(184, 184, 184, 1.000)",
            marginBottom: 5
          }}
        >
          Author
        </Text>
        <Text style={{ fontSize: 14 }}>{props.author.name}</Text>
      </View>

      <View
        style={{
          width: 100,
          height: 40,
          borderRadius: 20,
          borderWidth: 0.6,
          borderColor: "rgba(35, 78, 163, 1.000)",
          padding: 10,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 12, color: "rgba(35, 78, 163, 1.000)" }}>
          Follow
        </Text>
      </View>
    </View>
  );
}
