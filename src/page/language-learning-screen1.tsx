import * as React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "../components/learning-page1/Header";
import LevelItem from "../components/learning-page1/levelItem";

export interface ILearningCategoryItem {
  name: string;
  imageUrl: string;
  total: number;
  learned: number;
}

export interface LanguageLearningscreenProps {}

export interface LanguageLearningscreenState {
  learningLevelData: ILearningCategoryItem[];
}

const learningLevelData: ILeanringCategoryItem[] = [
  {
    name: "Food",
    imageUrl: require("../../assets/learning/page1_icon6.png"),
    total: 3,
    learned: 3
  },
  {
    name: "Animals",
    imageUrl: require("../../assets/learning/page1_icon2.png"),
    total: 5,
    learned: 3
  },
  {
    name: "Conversation",
    imageUrl: require("../../assets/learning/page1_icon3.png"),
    total: 6,
    learned: 3
  },
  {
    name: "Colors",
    imageUrl: require("../../assets/learning/page1_icon4.png"),
    total: 7,
    learned: 7
  },
  {
    name: "Abstract objects",
    imageUrl: require("../../assets/learning/page1_icon5.png"),
    total: 3,
    learned: 2
  },
  {
    name: "Economics",
    imageUrl: require("../../assets/learning/page1_icon1.png"),
    total: 9,
    learned: 3
  },
  {
    name: "Science",
    imageUrl: require("../../assets/learning/page1_icon7.png"),
    total: 4,
    learned: 3
  }
];

export default class LanguageLearningscreen extends React.Component<
  LanguageLearningscreenProps,
  LanguageLearningscreenState
> {
  constructor(props: LanguageLearningscreenProps) {
    super(props);
    this.state = {
      learningLevelData: learningLevelData
    };
  }

  public render() {
    return (
      <View style={{ marginTop: 30, flex: 1, alignItems: "center" }}>
        <Header />
        <View
          style={{
            width: "100%",
            height: 40,
            flexDirection: "row",
            paddingHorizontal: 10,
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", marginRight: 10 }}>
            French
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "rgba(141, 148, 166, 1.000)"
            }}
          >
            Level 1
          </Text>
        </View>

        <ScrollView style={{ width: "100%", paddingHorizontal: 10, flex: 1 }}>
          {this.state.learningLevelData.map((item, index) => {
            return <LevelItem {...item} key={index} />;
          })}
        </ScrollView>
      </View>
    );
  }
}
