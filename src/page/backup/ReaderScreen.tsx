import * as React from "react";
import { Text, StatusBar, StyleSheet, View } from "react-native";
import HeaderComponent from "../components/Header";
import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";
import bgColorList from "../constants/bgColorList";

const fonts = [
  { fontFamily: "Helvetica" },
  { fontFamily: "Roboto" },
  { fontFamily: "Roboto_medium" },

  { fontFamily: "Palatino" }
];

const textAligns = [
  { textAlign: "left" },
  { textAlign: "center" },
  { textAlign: "right" }
];

export interface bgColor {
  bgColor: string;
}

export interface DemoProps {}
export interface DemoState {
  text?: string;
  showSettingScreen: boolean;

  fontSize: number;

  bgColorList: { bgColor: string }[];
  bgColor?: string;

  lineHeight: number;

  fontFamily: string;

  textAlign: string;

  selectedColorIndex: number;
  selectedFontFamilyIndex: number;
}

const StyledText = styled.Text`
  color: red;
  flex: 1;
  text-align: center;
  font-size: ${props => props.fontSize};
`;

export default class DemoScreen extends React.Component<DemoProps, DemoState> {
  constructor(props) {
    super(props);
    this.state = {
      showSettingScreen: true,

      fontSize: 16,

      lineHeight: 20,

      fontFamily: "Helvetica",
      textAlign: "left",
      selectedFontFamilyIndex: 1,
      selectedColorIndex: 1,
      bgColorList: bgColorList
    };
  }

  toggleSettingScreen = () => {
    this.setState({ showSettingScreen: !this.state.showSettingScreen });
  };

  setSmallFontSize = () => {
    this.setState({ fontSize: this.state.fontSize - 1 });
  };

  setBigFontSize = () => {
    this.setState({ fontSize: this.state.fontSize + 1 });
  };

  setSmallLineHeight = () => {
    this.setState({ lineHeight: this.state.lineHeight - 5 });
  };

  setBigLineHeight = () => {
    this.setState({ lineHeight: this.state.lineHeight + 5 });
  };
  setBackgroundColor = (selectedColorIndex: number) => {
    this.setState({ selectedColorIndex: selectedColorIndex });
    this.setState({ bgColor: bgColorList[selectedColorIndex].bgColor });
  };
  render() {
    const selectedColorIndex = this.state.selectedColorIndex;
    const bgColorList = this.state.bgColorList;
    console.log(bgColorList[0]);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: bgColorList[selectedColorIndex].bgColor
        }}
      >
        <StatusBar backgroundColor="black" />
        <HeaderComponent
          showSettingScreen={this.state.showSettingScreen}
          selectedColorIndex={this.state.selectedColorIndex}
          toggleSettingScreen={this.toggleSettingScreen}
          setBigFontSize={this.setBigFontSize}
          setSmallFontSize={this.setSmallFontSize}
          setBackgroundColor={this.setBackgroundColor}
        />
        <View
          style={{
            zIndex: 10,
            alignItems: "center",
            flex: 1,
            width: "100%",
            padding: 15
          }}
        >
          <StyledText transition="fontSize" fontSize={this.state.fontSize}>
            Danglars, the ship’s supercargo, who is responsible for all
            financial matters, attempts to undermine Morrel’s good opinion of
            Dantès. Morrel boards the ship and Danglars tells him that Dantès
            forced the ship to stop at the Isle of Elba, which cost them
            precious time. When Morrel confronts Dantès with this accusation,
            Dantès explains that he stopped the ship at Elba in order to carry
            out his captain’s dying request: to deliver a package to an exiled
            grand-marshal, Maréchal Bertrand. He says that while he was on the
            island he spoke with Napoleon, the deposed emperor of France. With
            this matter cleared up, Morrel asks Dantès for his opinion of
            Danglars. Dantès answers honestly, explaining that he has a personal
            dislike for Danglars but that Danglars does his work very well.
          </StyledText>
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
