import * as React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Header from "../../components/kino/header";
import { FontAwesome } from "@expo/vector-icons";

export type Avatar = {
  avatarUrl: string;
  name: string;
  location: string;
  avatarSize: number;
};

export type ListItem = {
  listItemUrl: string;
  title: string;
  time: string;
  type: string[];
  rating: number;
  totalRating?: number;
  director: string;
  commentNumber: number;
};
export interface ProfileProps {}

export interface ProfileState {
  avatar: Avatar;
  listData: ListItem[];
  totalScore: number;
}

const avatarData: Avatar = {
  avatarUrl: require("../../../assets/kino_profile_avatar1.png"),
  name: "Mathilda Myers",
  location: "New York,NY",
  avatarSize: 100
};

const listData: ListItem[] = [
  {
    listItemUrl: require("../../../assets/kino_profile_thumb1.png"),
    title: "The Martian",
    time: "2h 24min",
    type: ["Adventure", "Darama", "Sci-FI"],
    rating: 8.1,
    director: "Ridley Scott",
    commentNumber: 189
  },
  {
    listItemUrl: require("../../../assets/kino_profile_thumb2.png"),
    title: "Maleficent",
    time: "1h 45min",
    type: ["Action", "Adventure", "Family"],
    rating: 8.1,
    director: "Robert Stromberg",
    commentNumber: 189
  }
];

const Avatar = (props: Avatar) => {
  return (
    <View
      style={{
        width: "100%",
        height: 200,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={props.avatarUrl}
        style={{
          height: props.avatarSize,
          width: props.avatarSize,
          marginBottom: 10
        }}
      />
      <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
        {props.name}
      </Text>
      <Text style={{ fontSize: 10, color: "white" }}>{props.location}</Text>
    </View>
  );
};

const ListItem = (props: ListItem) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 200,
        marginBottom: 20
      }}
    >
      <Image
        source={props.listItemUrl}
        style={{ height: 200, width: "40%", resizeMode: "contain" }}
      />
      <View style={{ width: "55%", height: 150 }}>
        <Text style={{ fontSize: 14, color: "white", marginBottom: 10 }}>
          {props.title}
        </Text>
        <Text style={{ fontSize: 10, color: "white", marginBottom: 10 }}>
          {props.time}
        </Text>
        <View style={{ flexDirection: "row", width: "100%", marginBottom: 10 }}>
          {props.type.map((item: string, index: number) => {
            return (
              <Text
                style={{ fontSize: 8, color: "white", marginRight: 2 }}
                key={index}
              >
                {item},
              </Text>
            );
          })}
        </View>
        <Text style={{ fontSize: 8, color: "white", marginBottom: 10 }}>
          Director:{props.director}
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <FontAwesome name="star" size={12} color="rgba(249, 88, 98, 1.000)" />
          <Text style={{ marginLeft: 10, fontSize: 12, color: "white" }}>
            {props.rating}/{props.totalRating}
          </Text>
        </View>
        <Text style={{ color: "white", fontSize: 10 }}>
          {props.commentNumber} Reviews
        </Text>
      </View>
    </View>
  );
};

export default class ProfileComponent extends React.Component<
  ProfileProps,
  ProfileState
> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      avatar: avatarData,
      listData: listData,
      totalScore: 10
    };
  }

  public render() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(29, 29, 38, 1.000)"
        }}
      >
        <View style={{ marginTop: 30 }}>
          <Header
            leftIconName="search-plus"
            rightIconName="menu"
            size={16}
            color="white"
            // centerTextContent="Profile"
            centerTextColor="white"
            centerTextSize={16}
          />

          <Avatar {...this.state.avatar} />
          <ScrollView>
            {this.state.listData.map((item, index) => {
              return (
                <ListItem
                  {...item}
                  totalRating={this.state.totalScore}
                  key={index}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
