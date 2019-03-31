import React from "react";

import { Button } from "react-native-elements";

import MyIcon from "./MyIcon";

type ColorButtonProps = {
  bgColor: string;
  selected: boolean;
  selfIndex: number;
  setBackgroundColor: (selfIndex: number) => void;
};

const ColorButton = (props: ColorButtonProps) => {
  const { bgColor, selected, selfIndex, setBackgroundColor } = { ...props };

  return (
    <Button
      buttonStyle={{
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: bgColor,
        borderWidth: 0.4,
        borderColor: "white"
      }}
      icon={
        selected && (
          <MyIcon
            name="ios-checkmark"
            size={12}
            color="rgba(34, 34, 34, 1.000)"
          />
        )
      }
      onPress={() => setBackgroundColor(selfIndex)}
    />
  );
};

export default ColorButton;
