import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

export interface ICategory {
  tag: string;
  color: string;
}

export const CategoryList: ICategory[] = [
  { tag: "Sports", color: "rgba(255, 79, 32, 1.000)" },
  { tag: "Arts", color: "rgba(139, 87, 43, 1.000)" },
  { tag: "Politics", color: "rgba(31, 75, 166, 1.000)" }
];

export interface PostItemProps {
  postImageUrl: string;
  postCategory: ICategory;
  time: string;
  title: string;
  viewNumber: number;
  commentNumber: number;
}

export interface PostItemState {}

export default class PostItemComponent extends React.Component<
  PostItemProps,
  PostItemState
> {
  constructor(props: PostItemProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View style={{ height: 250, width: "100%" }}>
        <Image
          source={this.props.postImageUrl}
          style={{ width: "100%", height: 150 }}
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 40,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <View
            style={{
              width: 40,
              height: 16,
              borderRadius: 14,
              backgroundColor: this.props.postCategory.color,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10
            }}
          >
            <Text style={{ fontSize: 8, color: "white" }}>
              {this.props.postCategory.tag}
            </Text>
          </View>
          <Text style={{ fontSize: 8, color: "rgba(196, 196, 196, 1.000)" }}>
            {this.props.time}
          </Text>
        </View>

        <Text style={{ fontSize: 14 }}>{this.props.title}</Text>
        <View
          style={{
            flexDirection: "row",
            height: 30,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingHorizontal: 20
          }}
        >
          <Text style={{ fontSize: 6, color: "rgba(197, 197, 197, 1.000)" }}>
            {this.props.viewNumber} views
          </Text>
          <Entypo
            name="dot-single"
            color="rgba(197, 197, 197, 1.000)"
            size={10}
          />
          <Text style={{ fontSize: 6, color: "rgba(197, 197, 197, 1.000)" }}>
            {this.props.commentNumber} comments
          </Text>
        </View>
      </View>
    );
  }
}
