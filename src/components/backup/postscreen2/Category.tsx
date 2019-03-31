import * as React from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";

export enum CategoryEnum {
  "SPORT",
  "POLITICS",
  "ART",
  "FASHION",
  "AUTO&MOTO",
  "DESIGN"
}

export interface CategoryProps {
  category: string[];
  selectedCategoryIndex: number;
}

export type CategoryButtonProps = {
  title: string;
  selected: boolean;
};

const CategoryButton = (props: CategoryButtonProps) => {
  const fontColor = props.selected ? "white" : "rgba(166, 127, 93, 1.000)";

  return (
    <View
      style={{
        height: "100%",
        width: 90,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TouchableWithoutFeedback>
        <Text style={{ fontSize: 14, color: fontColor }}>{props.title}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default class Catetory extends React.Component<CategoryProps, any> {
  public render() {
    const { category, selectedCategoryIndex } = { ...this.props };
    return (
      <ScrollView
        horizontal
        style={{
          marginTop: 10,
          borderBottomWidth: 0.7,
          borderBottomColor: "white",
          height: 50
        }}
      >
        {category.map((item: string, index: number) => {
          const selected = index === selectedCategoryIndex ? true : false;
          return (
            <CategoryButton title={item} selected={selected} key={index} />
          );
        })}
      </ScrollView>
    );
  }
}
