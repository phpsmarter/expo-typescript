import * as React from "react";
import { View, Text, Image } from "react-native";
export interface IProfile {
  avatarImage: string;
  name: string;
  level: string;
  moto: string;
}

export interface IProfileState {
  profileData: IProfile;
}
export interface ProfileProps {}

const profileData: IProfile = {
  avatarImage: require("../../../assets/learning/page2_avatar.png"),
  name: "Alison Cooper",
  level: "Beginner",
  moto: "Unlimited lessons,learn offline, no ads, and..."
};

export default class Profile extends React.Component<
  ProfileProps,
  IProfileState
> {
  constructor(props: ProfielProps) {
    super(props);
    this.state = {
      profileData: profileData
    };
  }

  public render() {
    const { avatarImage, name, level, moto } = { ...this.state.profileData };
    return (
      <View style={{ width: "100%", paddingHorizontal: 10 }}>
        <View
          style={{
            height: 100,
            width: "100%",
            paddingHorizontal: 10,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <Image
            source={avatarImage}
            style={{ width: 60, height: 60, resizeMode: "contain" }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>{name}</Text>
            <Text style={{ fontSize: 12, color: "rgba(126, 132, 149, 1.000)" }}>
              {level}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 10,
            height: 80
          }}
        >
          <Text style={{ fontSize: 16, flex: 1, marginRight: 20 }}>{moto}</Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 32,
              borderRadius: 20,
              borderWidth: 1.3,
              borderColor: "rgba(122, 178, 250, 1.000)"
            }}
          >
            <Text style={{ fontSize: 14, color: "rgba(122, 178, 250, 1.000)" }}>
              Learn more
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
