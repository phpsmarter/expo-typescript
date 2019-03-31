import * as React from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ImageBackground
} from "react-native";

import { Octicons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { SearchBar } from "../components/featurescreen1/SearchBar";
import { FeatureList } from "../components/featurescreen1/FeatureList";
import { BookProps } from "../components/Book";
import Book from "../components/Book";
export interface HeaderProps {
  size: number;
  color: string;
}

export interface MyBookState {
  myBooks: BookProps[];
}

const myBookList: BookProps[] = [
  {
    coverUrl: require("../../assets/mybook1.png"),
    bookName: "The Pale King",
    authorName: "D.F.Wallace",
    progress: 0.4
  },
  {
    coverUrl: require("../../assets/mybook2.png"),
    bookName: "The Bauhaus Group",
    authorName: "Nicholas Fox Weber",
    progress: 0.2
  },
  {
    coverUrl: require("../../assets/mybook3.png"),
    bookName: "I was a Dancer",
    authorName: "Jacques D'Aboise",
    progress: 0.6
  },
  {
    coverUrl: require("../../assets/mybook4.png"),
    bookName: "The Utopis of Rules",
    authorName: "David Graeber",
    progress: 0.9
  }
];

/** define Comments type  is  Array of Comment interface */

//type Comments=Comment[];
/** define Article interface */

const Header = (props: HeaderProps) => {
  const { size, color } = { ...props };
  return (
    <View
      style={{
        height: 40,
        flexDirection: "row",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 30,
        backgroundColor: "transparent",
        borderBottomWidth: 0.6,
        borderBottomColor: "rgba(233, 233, 233, 0.5)"
      }}
    >
      <Ionicons name="ios-arrow-back" size={size} color={color} />
      <Text>My Books</Text>
      <Ionicons name="ios-menu" size={size} color={color} />
    </View>
  );
};

export default class MyBookScreen extends React.Component<{}, MyBookState> {
  constructor(props) {
    super(props);
    this.state = {
      myBooks: myBookList
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <StatusBar backgroundColor="black" barStyle="light-content" />

        <Header size={24} color={"black"} />
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap"
          }}
        >
          {this.state.myBooks.map((book: BookProps, index: number) => {
            return <Book {...book} key={index} />;
          })}
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
