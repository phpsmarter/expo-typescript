import * as React from "react";
import { View, Text, Image } from "react-native";
import { Article } from "../../page/ReaderScreen1";
import ContentHeader from "./ContentHeader";
import ContentAuthor from "./ContentAuthor";
import SectionComponent from "./Section";
export interface MainContentProps {
  article: Article;
}

export interface MainContentState {}

export default class MainContent extends React.Component<
  MainContentProps,
  MainContentState
> {
  constructor(props: MainContentProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { abstraction, author } = { ...this.props.article };
    return (
      <View style={{ width: "100%", paddingHorizontal: 10 }}>
        <ContentHeader abstraction={abstraction} />
        <ContentAuthor author={author} />
        <SectionComponent />
      </View>
    );
  }
}
