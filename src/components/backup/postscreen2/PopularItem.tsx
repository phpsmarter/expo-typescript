import * as React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export interface PopularItemProps {
  imageUrl: string;
  time: string;
  title: string;
  commentNumber: number;
  viewNumber: number;
}

export interface PopularItemState {}

export default class PopularItem extends React.Component<
  PopularItemProps,
  PopularItemState
> {
  constructor(props: PopularItemProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <View
        style={{
          width: 150,
          paddingRight: 10,
          height: 280,
          borderBottomWidth: 0.8,
          borderBottomColor: "white",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15
        }}
      >
        <Image
          source={this.props.imageUrl}
          style={{
            width: 50,
            height: 65,
            marginBottom: 10,
            resizeMode: "contain"
          }}
        />

        <Text
          style={{
            fontSize: 12,
            color: "rgba(209, 187, 169, 1.000)",

            marginBottom: 10
          }}
        >
          {this.props.time}
        </Text>

        <Text style={{ fontSize: 14, color: "white", marginBottom: 10 }}>
          {this.props.title}
        </Text>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            width: "90%",
            justifyContent: "flex-start"
          }}
        >
          <View style={{ flexDirection: "row", marginRight: 15 }}>
            <FontAwesome
              name="eye"
              size={14}
              color="rgba(228, 228, 228, 1.000)"
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 12,
                color: "rgba(178, 178, 178, 1.000)"
              }}
            >
              {this.props.commentNumber}
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              name="bookmark-o"
              size={14}
              color="rgba(228, 228, 228, 1.000)"
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 12,
                color: "rgba(178, 178, 178, 1.000)"
              }}
            >
              {this.props.viewNumber}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
