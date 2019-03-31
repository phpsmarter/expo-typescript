import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Octicons, FontAwesome } from "@expo/vector-icons";
export interface IPublisher {
  name: string;
  logoUrl: string;
}

export interface PostItemProps {
  imageUrl: string;
  time: string;
  title: string;
  commentNumber: number;
  viewNumber: number;
  publisher: IPublisher;
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
      <View
        style={{
          width: "100%",
          paddingHorizontal: 10,
          height: 180,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }}
      >
        <Image
          source={this.props.imageUrl}
          style={{ height: 120, width: 120 }}
        />

        <View style={{ marginLeft: 10, width: 200 }}>
          <Text
            style={{
              fontSize: 12,
              color: "rgba(197, 197, 197, 1.000)",
              marginBottom: 10
            }}
          >
            {this.props.time}
          </Text>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>
            {this.props.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Octicons
                name="comment"
                size={14}
                color="rgba(187, 187, 187, 1.000)"
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 10,
                  color: "rgba(187, 187, 187, 1.000)"
                }}
              >
                {this.props.commentNumber}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="eye"
                color="rgba(187, 187, 187, 1.000)"
                size={14}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 10,
                  color: "rgba(187, 187, 187, 1.000)"
                }}
              >
                {this.props.viewNumber}
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={this.props.publisher.logoUrl}
          style={{ width: 30, height: 30 }}
        />
      </View>
    );
  }
}
