import * as React from "react";
import { View, Text, Image } from "react-native";
import { Octicons, FontAwesome } from "@expo/vector-icons";
export interface FromProps {}

export default class From extends React.Component<FromProps, any> {
  public render() {
    return (
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          paddingHorizontal: 20,
          height: 60,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../../assets/post3_icon4.png")}
            style={{ width: 32, height: 32, marginRight: 10 }}
          />

          <Text style={{ fontSize: 12, color: "white" }}>The Guardian</Text>
        </View>

        <View
          style={{
            width: 120,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Octicons
              name="comment"
              size={18}
              color="rgba(187, 187, 187, 1.000)"
            />
            <Text style={{ color: "white", marginLeft: 10 }}>4</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              name="eye"
              color="rgba(187, 187, 187, 1.000)"
              size={18}
            />
            <Text style={{ color: "white", marginLeft: 10 }}>6740</Text>
          </View>
        </View>
      </View>
    );
  }
}
