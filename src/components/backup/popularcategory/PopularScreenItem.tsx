import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableWithoutFeedback
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export type PopularScreenItemProps = {
  index?: number;
  category: string;
  posts: number;
  followers: number;
  bgImage: string;
  selected?: boolean;
  selectCategory?: () => void;
};

export interface PopularScreenItemState {
  selectedIndex?: number[];
}

export interface FollowStatusProps {
  followStatus: boolean;
  selectCategory: () => void;
}

const FollowButton = () => {
  return (
    <View
      style={{
        width: 70,
        height: 30,
        borderRadius: 24,
        borderWidth: 0.6,
        borderColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ color: "white", fontSize: 12 }}>Follow</Text>
    </View>
  );
};

const FollowedIcon = () => {
  return (
    <View
      style={{
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "rgba(255, 79, 32, 1.000)",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <FontAwesome name="check" size={14} color="white" />
    </View>
  );
};

const FollowStatus = (props: FollowStatusProps) => {
  return props.followStatus ? <FollowedIcon /> : <FollowButton />;
};
export default class PopularScreenItemComponent extends React.Component<
  PopularScreenItemProps,
  PopularScreenItemState
> {
  constructor(props: PopularScreenItemProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const {
      index,
      category,
      posts,
      followers,
      bgImage,
      selected,
      selectCategory
    } = {
      ...this.props
    };
    return (
      <ImageBackground style={{ width: "100%", height: 120 }} source={bgImage}>
        <View
          style={{
            flexDirection: "row",
            height: 120,
            width: "100%",
            paddingHorizontal: 15,
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              height: "100%",
              flex: 7,
              justifyContent: "center",
              marginTop: 80
            }}
          >
            <Text style={{ color: "white", fontSize: 20, marginBottom: 20 }}>
              {category}
            </Text>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between"
              }}
            >
              <Text
                style={{ color: "rgba(159, 149, 148, 1.000)", fontSize: 12 }}
              >
                {posts} posts
              </Text>
              <Entypo
                name="dot-single"
                size={14}
                color="rgba(242, 242, 242, 1.000)"
              />
              <Text
                style={{ color: "rgba(159, 149, 148, 1.000)", fontSize: 12 }}
              >
                {followers} followers
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 3, alignItems: "center", justifyContent: "center" }}
          >
            <FollowStatus
              followStatus={selected}
              selectCategory={selectCategory}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
