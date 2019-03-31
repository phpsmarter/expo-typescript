import * as React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import MyIcon from "./MyIcon";
import SetFontSizeComponent from "./SetFontSize";
import { ColorButtonGroup } from "./ColorButtonGroup";
import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";
export interface HeaderProps {
  showSettingScreen: boolean;
  selectedColorIndx: number;
  toggleSettingScreen: () => void;
  setBigFontSize: () => void;
  setSmallFontSize: () => void;
  setBackgroundColor: () => void;
}

export interface HeaderState {}

const Left = () => {
  return <MyIcon name="ios-arrow-back" size={24} color="black" />;
};

const Center = () => {
  return <Text>The Count of Monte...</Text>;
};

const SettingModal = styled(View)`
  height: 250;
  width: 130;
  z-index: 999;
  border-radius: 6;
  background-color: rgba(34, 34, 34, 0.8);
  position: absolute;
  bottom: -250;
  right: 10;
  opacity: ${props => (props.show ? 1 : 0)};
`;

const Right = (props: HeaderProps) => {
  const { showSettingScreen, toggleSettingScreen } = { ...props };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: 100
      }}
    >
      <TouchableWithoutFeedback onPress={toggleSettingScreen}>
        <View style={{ width: "100%", height: "100%" }}>
          <MyIcon name="ios-settings" size={24} color="black" />
        </View>
      </TouchableWithoutFeedback>
      <Animatable.View
        style={{
          height: 250,
          width: 130,
          zIndex: 999,
          borderRadius: 6,
          backgroundColor: "rgba(34, 34, 34, 0.8)",
          position: "absolute",
          bottom: -250,
          right: 10,
          opacity: showSettingScreen ? 1 : 0
        }}
        transition="opacity"
        duration={600}
      >
        <SetFontSizeComponent {...props} />
        <ColorButtonGroup {...props} />
      </Animatable.View>
      <MyIcon name="ios-menu" size={24} color="black" />
    </View>
  );
};

export default class HeaderComponent extends React.Component<
  HeaderProps,
  HeaderState
> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          height: 40,
          width: "100%",
          paddingHorizontal: 10,
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 999,
          borderBottomWidth: 0.8,
          borderBottomColor: "rgba(234, 234, 234, 1.000)"
        }}
      >
        <Left />
        <Center />
        <Right {...this.props} />
      </View>
    );
  }
}
