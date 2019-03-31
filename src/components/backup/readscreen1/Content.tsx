import * as React from "react";
import { View, Text, ScrollView } from "react-native";

import { Article, Author } from "../../page/ReaderScreen1";
import { ContentHeader } from "./ContentHeader";
import { ContentTitle } from "./ContentTitle";
import { ContentStat } from "./ContentStat";
import { ContentFrom } from "./ContentFrom";
import { ContentAbstraction } from "./ContentAbstraction";
import { ContentMain } from "./ContentMain";
import { ContentAuthor } from "./ContentAuthor";
import { ContentComment } from "./ContentComment";

export interface MainContentProps {
  article: Article;
  mySelf: Author;
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
    //const {category, time}={...this.props.article}
    return (
      <>
        <ContentHeader {...this.props.article} />
        <ContentTitle title={this.props.article.title} />
        <ContentStat
          viewNumber={this.props.article.viewNumber}
          commentNumber={this.props.article.commentNumber}
        />
        <ContentFrom from={this.props.article.from} />
        <ScrollView>
          <ContentAbstraction abstraction={this.props.article.abstraction} />
          <ContentMain mainContent={this.props.article.mainContent} />
          <ContentAuthor author={this.props.article.author} />
          <ContentComment
            comments={this.props.article.comments}
            mySelf={this.props.mySelf}
          />
        </ScrollView>
      </>
    );
  }
}
