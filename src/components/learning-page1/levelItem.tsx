import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { ILearningCategoryItem } from "../../page/language-learning-screen1";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo";

export interface LevelItemProps extends ILearningCategoryItem {}

export interface LevelItemState {
  progressBar: number;
}

export interface learnedHeight {
  learnHeight: number;
}

const ItemLinearGradient = (props: learnedHeight) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["rgba(159, 148, 255, 1.000)", "rgba(135, 189, 253, 1.000)"]}
      style={{
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        width: 3,
        height: props.learnHeight,
        bottom: 0
      }}
    />
  );
};

export default class LevelItemComponent extends React.Component<
  LevelItemProps,
  LevelItemState
> {
  constructor(props: LevelItemProps) {
    super(props);
    this.state = {
      progressBar: 50
    };
  }

  public render() {
    const ratio: number = this.props.learned / this.props.total;
    const learnedHeight: number = ratio * this.state.progressBar * 0.9;
    return (
      <View
        style={{
          flexDirection: "row",
          height: 80,
          paddingHorizontal: 10,
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
          borderBottomWidth: 0.0,
          borderBottomColor: "rgba(141, 148, 166, 1.000)"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-start"
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Image
              source={this.props.imageUrl}
              style={{ width: 40, height: 40 }}
            />
            {ratio === 1 && (
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: "purple",
                  position: "absolute",
                  bottom: 5,
                  right: -5,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <FontAwesome name="check" color="white" size={12} />
              </View>
            )}
          </View>

          <Text>{this.props.name}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            justifyContent: "flex-end",
            height: this.state.progressBar
          }}
        >
          <Text style={{ marginRight: 10, fontSize: 12 }}>
            {this.props.learned}/{this.props.total}
          </Text>
          <View
            style={{
              height: this.state.progressBar,
              width: 3,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10
            }}
          >
            <View
              style={{
                height: this.state.progressBar * 0.9,
                width: 3,
                backgroundColor: "rgba(229, 233, 244, 1.000)"
              }}
            />
            <ItemLinearGradient learnHeight={learnedHeight} />
          </View>
        </View>
      </View>
    );
  }
}
