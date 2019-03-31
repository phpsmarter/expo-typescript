import * as React from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView
} from "react-native";

import { Octicons, Ionicons, FontAwesome } from "@expo/vector-icons";

import PostItemScreen, {
  ICategory,
  CategoryList,
  PostItemProps
} from "../components/PostScreen/PostItem";
const myPostList: PostItemProps[] = [
  {
    postImageUrl: require("../../assets/post1.png"),
    postCategory: CategoryList[0],
    time: "12.10 pm, 13 Aug 2016",
    title: "Doris Burke Could Sub  into a Warriors Game whit These Moves",
    viewNumber: 30492,
    commentNumber: 3
  },
  {
    postImageUrl: require("../../assets/post2.png"),
    postCategory: CategoryList[1],
    time: "12.10 pm, 13 Aug 2016",
    title: "When Gleen Beck Quotes Martin Luther",
    viewNumber: 304,
    commentNumber: 30
  },
  {
    postImageUrl: require("../../assets/post3.png"),
    postCategory: CategoryList[2],
    time: "12.10 pm, 13 Aug 2016",
    title:
      "Steph Curry and the Warriors Are About to Break an Unbreakable Bulles Record",
    viewNumber: 492,
    commentNumber: 312
  }
];

export interface MyBookState {
  postList: BookItemProps[];
}
export interface HeaderProps {
  size: number;
  color: string;
}

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
      <Ionicons name="ios-menu" size={size} color={color} />
      <Image
        source={require("../../assets/reader_icon.png")}
        style={{ width: 20, height: 20 }}
      />
      <Ionicons name="ios-search" size={size} color={color} />
    </View>
  );
};

export default class MyBookScreen extends React.Component<{}, MyBookState> {
  constructor(props) {
    super(props);
    this.state = {
      postList: myPostList
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <StatusBar backgroundColor="black" barStyle="light-content" />

        <Header size={24} color={"black"} />

        <View>
          <ScrollView
            style={{
              paddingHorizontal: 20,
              width: "100%"
            }}
          >
            {this.state.postList.map((post: PostItemProps, index: number) => {
              return <PostItemScreen {...post} key={index} />;
            })}
          </ScrollView>
        </View>
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
