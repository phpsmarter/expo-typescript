import * as React from "react";
import { Text, StatusBar, StyleSheet, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";
import Row from "../components/Row";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import MainContent from "../components/readscreen1/Content";

export interface DemoProps {
  color: string;
  size: number;
}
//define  Category enum type
export enum Category {
  default = "sport",
  sport = "sport",
  entertain = "entertain",
  education = "education",
  music = "music"
}
//define Author interface  user for article writer and commenter
export interface Author {
  name: string;
  avatarUrl?: string;
}
//define Comment interface
export interface Comment {
  author: Author;
  time: string;
  commentContent: string;
  like: number;
}
//define Comments type  is  Array of Comment interface
//type Comments=Comment[];

//define Article interface
export interface Article {
  category: Category;
  time: string;
  title: string;
  viewNumber: number;
  commentNumber: number;
  from: string;
  abstraction: string;
  mainContent: string;
  contentImage: object[];
  author: Author;
  comments: Comment[];
}
export interface DemoState {
  color: string;
  size: number;
  mainContent: Article;
  mySelf: Author;
}

export const mySelf: Author = {
  name: "Jessie",
  avatarUrl: require("../../assets/avatar1.png")
};

export const mainContent: Article = {
  category: Category.sport,
  time: "25-12-1995",
  title: `Doris Burke Could Sub into a Warriors Game with These Moves`,
  viewNumber: 30492,
  commentNumber: 3,
  from: "New York Times",
  abstraction: `So let's rededicate ourselves to a new kind of politics - a politics of conscience. I'll invest in early childhood education. `,
  mainContent:
    "America will align our policies with those who pursue peace, and say in public what we say in private to Israelis and Palestinians and Arabs. Some suggest that it 't worth the effort - that we are fated to disagree, and civilizations are doomed to clash.",
  contentImage: [
    { uri: require("../../assets/image1.png") },
    { uri: require("../../assets/image2.png") },
    { uri: require("../../assets/image2.png") }
  ],
  author: {
    name: "Franklin Garner",
    avatarUrl: require("../../assets/avatar1.png")
  },
  comments: [
    {
      author: {
        name: "Leonard Perez",
        avatarUrl: require("../../assets/avatar2.png")
      },
      time: "25-12-1995",
      commentContent: "great article!",
      like: 18
    },
    {
      author: {
        name: "Nathan Oliver",
        avatarUrl: require("../../assets/avatar3.png")
      },
      time: "25-12-1995",
      commentContent:
        "Go into the collar counties around Chicago, and people will tell you they don't want their tax money wasted, by a welfare agency or by the Pentagon.!",
      like: 18
    },
    {
      author: {
        name: "Jared Colon",
        avatarUrl: require("../../assets/avatar4.png")
      },
      time: "25-12-1995",
      commentContent:
        "We are a better country than this. America, we cannot turn back.",
      like: 18
    }
  ]
};

const Header = (props: DemoProps) => {
  const { size, color } = { ...props };
  return (
    <View
      style={{
        height: 40,
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 30,
        backgroundColor: "white",
        borderBottomWidth: 0.6,
        borderBottomColor: "rgba(233, 233, 233, 1.000)"
      }}
    >
      <Ionicons name="md-menu" size={size} color="black" />
      <Image
        source={require("../../assets/reader_icon.png")}
        style={{ width: 20, height: 20 }}
      />
      <Ionicons name="ios-search" size={size} color={color} />
    </View>
  );
};

export default class DemoScreen extends React.Component<DemoProps, DemoState> {
  constructor(props) {
    super(props);
    this.state = {
      color: "rgba(34, 34, 34, 1.000)",
      size: 26,
      mainContent: mainContent,
      mySelf: mySelf
    };
  }

  render() {
    const { color, size } = { ...this.state };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white"
        }}
      >
        <StatusBar backgroundColor="black" />
        <Header size={size} color={color} />
        <MainContent
          article={this.state.mainContent}
          mySelf={this.state.mySelf}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  }
});
