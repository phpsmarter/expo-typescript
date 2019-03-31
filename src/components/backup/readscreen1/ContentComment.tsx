import * as React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Category, Comment, Author } from "../../page/ReaderScreen1";
import { FontAwesome } from "@expo/vector-icons";
import { AddComment } from "./AddComment";

export interface ContentCommentProps {
  comments: Comment[];
  mySelf: Author;
}

const CommentHeader = (props: ContentCommentProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10,
        height: 40,
        paddingVertical: 10,
        backgroundColor: "rgba(249, 249, 249, 1.000)",
        borderWidth: 0.6,
        borderColor: "rgba(228, 228, 228, 1.000)"
      }}
    >
      <Text style={{ fontSize: 12 }}>{props.commentsLength} COMMENTS</Text>
      <Text style={{ fontSize: 12, color: "rgba(68, 105, 176, 1.000)" }}>
        Add Comment
      </Text>
    </View>
  );
};

const CommentListItem = (props: Comment) => {
  const ImageUrl = props.author.avatarUrl;
  return (
    <View
      style={{
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: "rgba(229, 229, 229, 1.000)",

        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <View style={{ width: 40 }}>
        <Image source={ImageUrl} style={{ width: 30, height: 30 }} />
      </View>

      <View style={{ width: 250 }}>
        <Text style={{ fontSize: 10, color: "rgba(212, 212, 212, 1.000)" }}>
          {props.author.name}. {props.time}
        </Text>
        <Text style={{ marginTop: 5, fontSize: 12, lineHeight: 20 }}>
          {props.commentContent}
        </Text>
      </View>

      <View
        style={{
          height: "100%",
          alignSelf: "flex-end",
          width: 60,
          borderWidth: 0.6,
          borderColor: "rgba(229, 229, 229, 1.000)",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FontAwesome
          name="heart-o"
          size={14}
          color="rgba(178, 178, 178, 1.000)"
        />
        <Text style={{ marginTop: 10 }}>{props.like}</Text>
      </View>
    </View>
  );
};

const CommentList = (props: ContentCommentProps) => {
  const comments = props.comments;
  return (
    <ScrollView style={{ width: "100%" }}>
      {comments.map((comment: Comment, index: number) => {
        return <CommentListItem {...comment} key={index} />;
      })}
    </ScrollView>
  );
};

export function ContentComment(props: ContentCommentProps) {
  const comments = props.comments;
  const commentsLength: number = comments.length;
  return (
    <View
      style={{
        marginTop: 10,
        height: 400,
        alignItems: "flex-start",
        justifyContent: "flex-start",

        width: "100%"
      }}
    >
      <CommentHeader commentsLength={commentsLength} />
      <CommentList comments={comments} />
      <AddComment mySelf={props.mySelf} />
    </View>
  );
}
