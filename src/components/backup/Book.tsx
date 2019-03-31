import * as React from "react";
import { Image, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export interface IBook {}

export interface BookProps {
  coverUrl: string;
  authorName: string;
  bookName: string;
  progress: number;
}

export interface BookState {}

const Progress = (props: number) => {
  const width = 150;
  const progressWidth = props.progress * width;
  return (
    <View
      style={{
        marginTop: 2,
        height: 2,
        width: width,
        backgroundColor: "rgba(242, 242, 242, 1.000)"
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(31, 75, 166, 1.000)",
          position: "absolute",
          height: "100%",
          width: progressWidth
        }}
      />
    </View>
  );
};

const DeleteBtn = () => {
  return (
    <View
      style={{
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 10,
        right: 10
      }}
    >
      <Ionicons name="ios-close" size={24} color="rgba(178, 178, 178, 1.000)" />
    </View>
  );
};

export default class Book extends React.Component<BookProps, BookState> {
  constructor(props: BookProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <View style={{ height: 250, width: "45%", marginBottom: 20 }}>
        <Image
          source={this.props.coverUrl}
          style={{ width: "100%", height: "80%", resizeMode: "cover" }}
        />
        <DeleteBtn />
        <Progress progress={this.props.progress} />
        <Text
          style={{
            marginTop: 5,
            textAlign: "center",
            color: "rgba(182, 182, 182, 1.000)",
            marginBottom: 5,
            fontSize: 14
          }}
        >
          {this.props.authorName}
        </Text>
        <Text style={{ fontSize: 12, textAlign: "center" }}>
          {this.props.bookName}
        </Text>
      </View>
    );
  }
}
