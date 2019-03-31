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
import Category from "../components/postscreen2/Category";

import PopularItem, {
  PopularItemProps
} from "../components/postscreen2/PopularItem";
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
      <Text style={{ color: "white", fontSize: 20 }}>Popular</Text>
      <Ionicons name="ios-search" size={size} color={color} />
    </View>
  );
};

export type PostScreen2State = {
  categoryData: string[];
  selectedCategoryIndex: number;
  popularData: PopularItemProps[];
};

const popularData: PopularItemProps[] = [
  {
    imageUrl: require("../../assets/post5_1.png"),
    time: "12 Jul 2016",
    title: "We saw Bernie Sanders Greates Weakness Last Night",
    commentNumber: 0,
    viewNumber: 3400
  },
  {
    imageUrl: require("../../assets/post5_2.png"),
    time: "23 Mar 2016",
    title: "Ted Cruz Had a Very Strange Night in New York City",
    commentNumber: 748,
    viewNumber: 340
  },
  {
    imageUrl: require("../../assets/post5_3.png"),
    time: "03 Aug 2016",
    title: "The Navy Automated Air Defense System Looks a lot Like R2-D2",
    commentNumber: 4,
    viewNumber: 6740
  },
  {
    imageUrl: require("../../assets/post5_4.png"),
    time: "29 Oct 2016",
    title:
      "When the Russian Decided to Harass That U.S Navy Destroyer This week",
    commentNumber: 0,
    viewNumber: 3400
  }
];

export default class PostScreen2 extends React.Component<{}, PostScreen2State> {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [
        "SPORT",
        "POLITICS",
        "ART",
        "FASHION",
        "AUTO&MOTO",
        "DESIGN"
      ],
      selectedCategoryIndex: 1,
      popularData: popularData
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(139, 87, 42, 1.000)"
        }}
      >
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Header size={24} color="white" />

        <View style={{ height: 40, flexDirection: "row", flexWrap: "wrap" }}>
          <Category
            category={this.state.categoryData}
            selectedCategoryIndex={this.state.selectedCategoryIndex}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            alignSelf: "center",
            height: 300,
            justifyContent: "center"
          }}
        >
          {this.state.popularData.map((item, index) => {
            return <PopularItem {...item} key={index} />;
          })}
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
