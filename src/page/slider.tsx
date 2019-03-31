import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import { AnimatedValue } from "react-navigation";

export interface SliderProps {}

export interface SliderState {
  buttonAnimation: any;
  backgroundAnimation: any;
  open: boolean;
}

export default class SliderComponent extends React.Component<
  SliderProps,
  SliderState
> {
  constructor(props: SliderProps) {
    super(props);
    this.state = {
      buttonAnimation: new Animated.Value(0),
      backgroundAnimation: new Animated.Value(0),
      open: false
    };
  }

  toggle = () => {
    if (!this.state.open) {
      Animated.timing(this.state.buttonAnimation, {
        toValue: 220,
        duration: 500
      }).start(() => this.setState({ open: true }));
    } else {
      Animated.timing(this.state.buttonAnimation, {
        toValue: 0,
        duration: 500
      }).start(() => this.setState({ open: false }));
    }
  };

  public render() {
    const btnPositionX = {
      transform: [{ translateX: this.state.buttonAnimation }]
    };

    const aniamtedWidth = { width: this.state.buttonAnimation };

    return (
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(169, 213, 238, 1.000)",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ImageBackground
          source={require("../../assets/slider_base.png")}
          style={{
            width: 300,
            height: 80,
            shadowOffset: { height: 5, width: 0 },
            shadowColor: "rgba(55, 119, 141, 1.000)",
            shadowOpacity: 0.4,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ImageBackground
            source={require("../../assets/slider_inner.png")}
            style={{
              marginLeft: 10,
              width: "96%",
              height: 50,
              alignSelf: "center"
            }}
          >
            <TouchableWithoutFeedback onPress={this.toggle}>
              <View style={{ width: 60, height: 60 }}>
                <Animated.Image
                  source={require("../../assets/slider_button.png")}
                  style={[{ width: 60, height: 60 }, btnPositionX]}
                />
              </View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={[
                {
                  position: "absolute",
                  top: 5,
                  left: 7,

                  height: 40,
                  backgroundColor: "rgba(36, 126, 78, 1.000)",
                  zIndex: -10,
                  borderRadius: 20
                },
                aniamtedWidth
              ]}
            />
          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
}
