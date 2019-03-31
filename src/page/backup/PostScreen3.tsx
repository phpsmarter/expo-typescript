import * as React from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";

import {
  Zocial,
  Entypo,
  Octicons,
  Ionicons,
  FontAwesome
} from "@expo/vector-icons";

import ImageHeader from "../components/postscreen3/ImageHeader";
import ImageContent from "../components/postscreen3/ImageContent";
import From from "../components/postscreen3/From";

import PostItem, { PostItemProps } from "../components/postscreen3/PostItem";

const Header = (props: HeaderProps) => {
  const { size, color } = { ...props };
  return (
    <View
      style={{
        marginTop: 30,
        height: 60,
        flexDirection: "row",
        borderWidth: 0,
        borderColor: "red",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",

        backgroundColor: "transparent",
        borderBottomWidth: 0.6,
        borderBottomColor: "rgba(233, 233, 233, 0.5)",
        alignSelf: "center"
      }}
    >
      <View style={{ flex: 1 }}>
        <Ionicons name="ios-menu" size={size} color={color} />
      </View>

      <View style={{ alignSelf: "center", flex: 1 }}>
        <Text style={{ color: "white", fontSize: 20, marginBottom: 5 }}>
          Business
        </Text>
        <Text style={{ color: "rgba(175, 166, 162, 1.000)", fontSize: 12 }}>
          3489 posts
        </Text>
      </View>

      <View
        style={{
          borderWidth: 0.6,
          borderColor: "rgba(242, 242, 242, 0.7)",
          marginLeft: 20,
          height: 30,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          width: 100
        }}
      >
        <Text style={{ fontSize: 12, color: "white" }}>Follow</Text>
      </View>
    </View>
  );
};

const PostData: PostItemProps[] = [
  {
    imageUrl: require("../../assets/post3_1.png"),
    time: "23 Nov 2016",
    title: "This is How the Convention Monurne Prince Larry",
    commentNumber: 748,
    viewNumber: 893,
    publisher: {
      name: "New Yorker Times",
      logoUrl: require("../../assets/post3_icon1.png")
    }
  },
  {
    imageUrl: require("../../assets/post3_2.png"),
    time: "08 Aug 2016",
    title: "In Praise of Prince ,the Shadow Titan",
    commentNumber: 0,
    viewNumber: 3400,
    publisher: {
      name: "Bussiness Weekly",
      logoUrl: require("../../assets/post3_icon2.png")
    }
  },
  {
    imageUrl: require("../../assets/post3_3.png"),
    time: "19 May 2016",
    title: "The People Want Tyrion Lannister for President ",
    commentNumber: 748,
    viewNumber: 893,
    publisher: { name: "VE", logoUrl: require("../../assets/post3_icon3.png") }
  }
];

export type PostScreen3State = {
  postData: PostItemProps[];
};

export default class PostScreen3 extends React.Component<{}, PostScreen2State> {
  constructor(props) {
    super(props);
    this.state = {
      postData: PostData
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white"
        }}
      >
        <StatusBar backgroundColor="black" barStyle="light-content" />

        <ImageHeader>
          <Header size={24} color="white" />
          <ImageContent />
          <From />
        </ImageHeader>
        <ScrollView style={{ flex: 1, marginTop: 10 }}>
          {this.state.postData.map((item: PostItemProps, index: number) => {
            return <PostItem {...item} key={index} />;
          })}
        </ScrollView>
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
