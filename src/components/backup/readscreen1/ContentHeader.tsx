import * as React from "react";
import { View, Text } from "react-native";
import { Category } from "../../page/ReaderScreen1";

export interface ContentHeaderProps {
  category: Category;
  time: string;
}

const CategoryTag = (props: ContentHeaderProps) => {
  return (
    <View
      style={{
        width: 40,
        height: 20,
        borderRadius: 10,
        backgroundColor: "rgba(255, 79, 32, 1.000)",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
      }}
    >
      <Text style={{ color: "white", fontSize: 12 }}>{props.category}</Text>
    </View>
  );
};

const TimeTag = (props: ContentHeaderProps) => {
  return (
    <Text style={{ color: "rgba(189, 189, 189, 1.000)", fontSize: 12 }}>
      {props.time}
    </Text>
  );
};

export function ContentHeader(props: ContentHeaderProps) {
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 20,
        width: "100%",
        paddingHorizontal: 15
      }}
    >
      <CategoryTag {...props} />
      <TimeTag {...props} />
    </View>
  );
}
