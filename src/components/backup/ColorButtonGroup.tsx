import React from "react";
import { View } from "react-native";
import ColorButton from "./ColorButton";
import bgColorList from "../constants/bgColorList";
export interface item {
  bgColor: object;
}

type ColorButtonGroupProps = {
  selectedColorIndex: number;
  setBackgroundColor: () => void;
};

export const ColorButtonGroup = (props: ColorButtonGroupProps) => {
  const selectedColorIndex = props.selectedColorIndex;

  return (
    <View
      style={{
        width: "100%",
        height: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rgba(34, 34, 34, 1.000)",
        borderBottomWidth: 0.4,
        borderBottomColor: "white",
        marginTop: 5
      }}
    >
      {bgColorList.map((item: any, index: number) => {
        return (
          <ColorButton
            bgColor={item.bgColor}
            key={index}
            selfIndex={index}
            selected={index === selectedColorIndex}
            setBackgroundColor={props.setBackgroundColor}
          />
        );
      })}
    </View>
  );
};
