import * as React from "react";
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { sendMessage } from "../redux/store/chat/actions";
import { getProducts, getProductById } from "../redux/store/shop/actions";
import axios from "axios";

import { connect } from "react-redux";
import { AppState } from "../redux/store";
export interface ChatProps {
  sendMessage: (message: string) => void;
  getProducts: (url: string, type: string) => void;
  getProductById: (url: string, type: string, id: number) => void;
}

export interface ChatState {
  placeholder: string;
  text: string;
}

export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;

class Chat extends React.Component<ChatProps, ChatState> {
  constructor(props: ChatProps) {
    super(props);

    this.state = {
      placeholder: "input some words!",
      text: ""
    };
  }

  async componentDidMount() {
    this.props.sendMessage({
      user: "Chat Bot",
      message:
        "This is a very basic chat application written in typescript using react and redux. Feel free to explore the source code.",
      timestamp: new Date().getTime()
    });

    this.props.getProductById("http://localhost:3000/products", "product", 1);
  }

  sendMessage1 = (message: string = "hello!") => {
    this.props.sendMessage({
      user: "zhyy",
      message: message,
      timestamp: new Date().getTime()
    });
    //this.setState({placeholder: "" });
  };

  setMessage = (event: UpdateMessageParam) => {
    this.setState({ message: event.currentTarget.value });
  };

  public render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextInput
          placeholder={this.state.placeholder}
          onChangeText={text => {
            this.setState({ text });
            //console.log(this.state.text);
          }}
        />
        <View
          style={{
            height: 40,
            width: 100,
            borderRadius: 20,
            backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => this.sendMessage1(this.state.text)}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold"
              }}
            >
              submit
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  chat: state.chat
});

export default connect(
  mapStateToProps,
  { sendMessage, getProducts, getProductById }
)(Chat);
