import * as React from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ImageBackground
} from "react-native";
import MainContent from "../components/readerscreen2/MainContent";
import { Octicons, Ionicons, FontAwesome } from "@expo/vector-icons";

export interface HeaderProps {
  color: string;
  size: number;
}
//define  Category enum type
export enum Category {
  default = "sport",
  sport = "sport",
  entertain = "entertain",
  education = "education",
  music = "music",
  politics = "politics"
}
//define Author interface  user for article writer and commenter
export type Author = {
  name: string;
  avatarUrl?: string;
};
/** define Comment interface*/
export interface Comment {
  author: Author;
  time: string;
  commentContent: string;
  like: number;
}
/** define Comments type  is  Array of Comment interface */

//type Comments=Comment[];
/** define Article interface */

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

export interface ArticleStat {
  commentNumber: number;
  viewNumber: number;
}

export const mainContent: Article = {
  category: Category.politics,
  time: "08:01 am,13-Aug-2016",
  title: `Doris Burke Could Sub into a Warriors Game with These Moves`,
  viewNumber: 6740,
  commentNumber: 4,
  from: "New York Times",
  abstraction: `So let's rededicate ourselves to a new kind of politics - a politics of conscience. I'll invest in early childhood education. `,
  mainContent:
    "America will align our policies with those who pursue peace, and say in public what we say in private to Israelis and Palestinians and Arabs. Some suggest that it 't worth the effort - that we are fated to disagree, and civilizations are doomed to clash.",
  contentImage: [
    { uri: require("../../assets/article2_img1.png") },
    { uri: require("../../assets/article2_img2.png") },
    { uri: require("../../assets/article2_img2.png") }
  ],
  author: {
    name: "Connor Rodriguez",
    avatarUrl: require("../../assets/article2_avatar1.png")
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

const Header = (props: HeaderProps) => {
  const { size, color } = { ...props };
  return (
    <View
      style={{
        height: 40,
        flexDirection: "row",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 30,
        backgroundColor: "transparent",
        borderBottomWidth: 0.6,
        borderBottomColor: "rgba(233, 233, 233, 0.5)"
      }}
    >
      <Ionicons name="md-menu" size={size} color={color} />
      <Image
        source={require("../../assets/article2_logo.png")}
        style={{ width: 20, height: 20 }}
      />
      <Ionicons name="ios-search" size={size} color={color} />
    </View>
  );
};

const HeaderBackground = props => {
  return (
    <ImageBackground
      source={require("../../assets/article2_img1.png")}
      style={{
        width: "100%",
        height: 300,
        reizeModex: "contain",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      {props.children}
    </ImageBackground>
  );
};

const ArticleTag = (props: any) => {
  return (
    <View
      style={{
        marginTop: 50,
        width: 70,
        height: 30,
        borderRadius: 20,
        backgroundColor: "rgba(31, 75, 166, 1.000)",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ color: "white", fontSize: 14 }}>{props.category}</Text>
    </View>
  );
};

const ArticleTitle = (props: any) => {
  return (
    <View
      style={{
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        paddingHorizontal: 10
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: "white",
          lineHeight: 30,
          textAlign: "center"
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

const ArticleTime = (props: any) => {
  return (
    <View
      style={{
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        paddingHorizontal: 10
      }}
    >
      <Text
        style={{
          fontSize: 12,
          color: "rgba(147, 144, 143, 1.000)",
          lineHeight: 12,
          textAlign: "center"
        }}
      >
        {props.time}
      </Text>
    </View>
  );
};

const ArticleStat = (props: ArticleStat) => {
  return (
    <View
      style={{
        marginTop: 25,
        height: 40,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 20
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          height: 30,
          width: 150,
          backgroundColor: "white",
          borderWidth: 0.6,
          borderColor: "rgba(234, 234, 234, 1.000)",
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View
          style={{
            marginLeft: -15,
            flexDirection: "row",
            width: 40,
            height: 30,
            borderRightWidth: 0.8,
            borderRightColor: "rgba(229, 229, 229, 1.000)",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Octicons
            name="comment"
            color="rgba(178, 178, 178, 1.000)"
            size={14}
          />
          <Text style={{ marginLeft: 10, color: "rgba(182, 182, 182, 1.000)" }}>
            {props.commentNumber}
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Octicons name="eye" color="rgba(178, 178, 178, 1.000)" size={14} />
          <Text style={{ marginLeft: 10, color: "rgba(182, 182, 182, 1.000)" }}>
            {props.viewNumber}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 0.5,
          borderColor: "rgba(229, 229, 229, 1.000)"
        }}
      >
        <FontAwesome
          name="bookmark"
          color="rgba(178, 178, 178, 1.000)"
          size={14}
        />
      </View>

      <View
        style={{
          backgroundColor: "white",
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 0.5,
          borderColor: "rgba(229, 229, 229, 1.000)"
        }}
      >
        <FontAwesome
          name="share-alt"
          color="rgba(178, 178, 178, 1.000)"
          size={14}
        />
      </View>
    </View>
  );
};

export default class DemoScreen extends React.Component<{}, DemoState> {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
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
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <HeaderBackground>
          <Header size={size} color={color} />
          <ArticleTag category={this.state.mainContent.category} />
          <ArticleTitle title={this.state.mainContent.title} />
          <ArticleTime time={this.state.mainContent.time} />
          <ArticleStat
            commentNumber={this.state.mainContent.commentNumber}
            viewNumber={this.state.mainContent.viewNumber}
          />
        </HeaderBackground>
        <MainContent article={this.state.mainContent} />
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
