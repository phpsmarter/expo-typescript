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
        source={require("../../assets/topArticle3_icon.png")}
        style={{ width: 80, height: 20 }}
      />
      <Ionicons name="ios-search" size={size} color={color} />
    </View>
  );
};

const Category = () => {
  return (
    <View
      style={{
        marginTop: 400,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        paddingHorizontal: 20
      }}
    >
      <View
        style={{
          width: 70,
          backgroundColor: "rgba(255, 202, 59, 1.000)",
          height: 20,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 10 }}>FASHION</Text>
      </View>
      <Text
        style={{
          marginLeft: 10,
          fontSize: 12,
          color: "rgba(205, 205, 205, 1.000)"
        }}
      >
        12:10 pm ,13 Aug 2016
      </Text>
    </View>
  );
};

const From = () => {
  return (
    <View
      style={{
        width: "100%",
        alignSelf: "center",
        height: 40,
        borderWidth: 0,
        borderColor: "rgba(255, 255, 255, 1.000)",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 10
      }}
    >
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          borderWidth: 0.3,
          borderColor: "white",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FontAwesome
          name="bookmark-o"
          size={16}
          color="rgba(255, 255, 255, 1.000)"
        />
      </View>
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          borderWidth: 0.3,
          borderColor: "white",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FontAwesome
          name="share-alt"
          size={16}
          color="rgba(255, 255, 255, 1.000)"
        />
      </View>
    </View>
  );
};

export interface TitleScreenProps {
  category: string;
  title: string;
  time: string;
}

class TitleScreen extends React.Component<TitleScreenProps, any> {
  public render() {
    return (
      <View
        style={{
          height: 300,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 40
        }}
      >
        <View
          style={{
            width: 60,
            height: 24,
            backgroundColor: "rgba(31, 75, 166, 1.000)",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            marginBottom: 20
          }}
        >
          <Text style={{ fontSize: 14, color: "white" }}>
            {this.props.category}
          </Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 32,
            color: "white",
            marginBottom: 10
          }}
        >
          {this.props.title}
        </Text>
        <Text style={{ fontSize: 12, color: "rgba(189, 189, 189, 1.000)" }}>
          {this.props.time}
        </Text>
      </View>
    );
  }
}

const articleData: TitleScreenProps = {
  category: "politics",
  title: "Drake Dropped a Trailer for His New Album, Views from 6",
  time: "12:10 pm,13 Aug 2016"
};

export type TopArticle3ScreenState = {
  articleData: TitleScreenProps;
};

const MoreButton = () => {
  return (
    <View
      style={{
        marginTop: 20,
        height: 40,
        width: 150,
        borderRadius: 30,
        borderWidth: 0.4,
        borderColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ fontSize: 12, color: "white" }}>Read More</Text>
    </View>
  );
};
export default class TopArticle3Screen extends React.Component<
  {},
  TopArticle3ScreenState
> {
  constructor(props) {
    super(props);
    this.state = {
      articleData: articleData
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ImageBackground
          source={require("../../assets/topArticle3_bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <StatusBar backgroundColor="black" barStyle="light-content" />

          <Header size={24} color={"white"} />
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-start"
            }}
          >
            <From />
            <TitleScreen {...this.state.articleData} />
            <MoreButton />
          </View>
        </ImageBackground>
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
