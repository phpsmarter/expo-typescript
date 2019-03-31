/**Section  is a component use for show blog content */
import * as React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";

const content: string =
  "On education, we will expand exchange programs, and increase scholarships, like the one that brought my father to America, while encouraging more Americans to study in Muslim communities.";
const title: string = "American where hard work";
const photo: Photo = {
  photoUrl: require("../../../assets/article2_img2.png"),
  photoAuthor: "Dollie Rios",
  photoTitle: "Satellite from space"
};
export interface Photo {
  photoUrl: string;
  photoTitle: string;
  photoAuthor: string;
}

export interface title {
  title: string;
}

export interface content {
  content: string;
}

export interface SectionProps {}

export interface SectionState {
  title: string;
  content: string;
  photo: Photo;
}

const SectionTitle = (props: title) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 10,
        height: 20,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <View
        style={{
          height: 14,
          width: 14,
          borderRadius: 7,
          backgroundColor: "rgba(255, 79, 32, 1.000)",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 5
        }}
      >
        <Text style={{ fontSize: 10, color: "white" }}>1</Text>
      </View>
      <Text style={{ fontSize: 16 }}>{props.title}</Text>
    </View>
  );
};

const SectionContent = (props: content) => {
  return <Text style={{ fontSize: 12, lineHeight: 24 }}>{props.content}</Text>;
};
const SectionImage = (props: any) => {
  return (
    <View>
      <Image
        style={{ width: "100%", height: 200 }}
        source={props.photo.photoUrl}
      />
      <Text style={{ fontSize: 10, marginVertical: 10 }}>
        {props.photo.photoTitle}
      </Text>
      <Text style={{ color: "rgba(194, 194, 194, 1.000)", fontSize: 8 }}>
        {" "}
        Photo by {props.photo.photoAuthor}
      </Text>
    </View>
  );
};
export default class SectionComponent extends React.Component<
  SectionProps,
  SectionState
> {
  constructor(props: SectionProps) {
    super(props);
    this.state = {
      title: title,
      content: content,
      photo: photo
    };
  }

  public render() {
    return (
      <ScrollView style={{ marginTop: 10 }}>
        <SectionTitle title={this.state.title} />
        <SectionContent content={this.state.content} />
        <SectionImage photo={this.state.photo} />
      </ScrollView>
    );
  }
}
