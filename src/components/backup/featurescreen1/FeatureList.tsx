import * as React from "react";
import { View, Text, TextInput, FlatList, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export interface FeatureItem {
  coverUrl: string;
  authorName: string;
  featureName: string;
  rating: number;
  reviewNumber: number;
  viewNumber: number;
  markNumber: number;
  selfMarked: boolean;
}

const featureListData: FeatureItem[] = [
  {
    coverUrl: require("../../../assets/feature_image1.png"),
    authorName: "Paul Beatty",
    featureName: "The Sellout",
    rating: 4,
    viewNumber: 2300,
    markNumber: 982,
    reviewNumber: 349
  },
  {
    coverUrl: require("../../../assets/feature_image2.png"),
    authorName: "Jeff VanderMeer",
    featureName: "Annihiliation",
    rating: 2,
    viewNumber: 2,
    markNumber: 0,
    reviewNumber: 349
  },
  {
    coverUrl: require("../../../assets/feature_image3.png"),
    authorName: "Noam Chomsky",
    featureName: "On Power and Ideology",
    rating: 3,
    viewNumber: 783,
    markNumber: 10,
    reviewNumber: 349
  },
  {
    coverUrl: require("../../../assets/feature_image4.png"),
    authorName: "Edward D.Wood,Jr.",
    featureName: "The Sellout",
    rating: 1,
    viewNumber: 2300,
    markNumber: 982,
    reviewNumber: 349
  }
];

export interface FeatureListProps {
  placeholder?: string;
}

export interface FeatureListState {
  featureList: FeatureItem[];
  selfMarkedIndex: number;
}

export interface Istart {
  rating: number;
}

export interface Imarked {
  selfMarked: boolean;
}

// const Star = (props: rating) => {
//   return (
//     <StarRating
//       disabled={false}
//       emptyStar={"ios-star-outline"}
//       fullStar={"ios-star"}
//       halfStar={"ios-star-half"}
//       iconSet={"Ionicons"}
//       maxStars={5}
//       rating={props.rating}
//       starSize={12}
//       fullStarColor={"rgba(255, 202, 59, 1.000)"}
//     />
//   );
// };

const Star = (props: Istart) => {
  return (
    <View style={{ flexDirection: "row", width: "50%", height: 40 }}>
      {[1, 2, 3, 4, 5].map(index => {
        const color =
          props.rating >= index
            ? "rgba(255, 202, 59, 1.000)"
            : "rgba(228, 228, 228, 1.000)";

        return <FontAwesome key={index} name="star" size={14} color={color} />;
      })}
    </View>
  );
};

const Mark = (props: Imarked) => {
  const bgColor = props.selfMarked ? "rgba(255, 79, 32, 1.000)" : "white";
  const iconColor = props.selfMarked ? "white" : "rgba(178, 178, 178, 1.000)";
  const borderWidth = props.selfMarked ? 0 : 0.5;

  return (
    <View
      style={{
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: borderWidth,
        borderColor: "rgba(178, 178, 178, 1.000)",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bgColor
      }}
    >
      <FontAwesome name="bookmark-o" color={iconColor} size={14} />
    </View>
  );
};

const ListItem = (props: FeatureItem) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        height: 160,
        paddingVertical: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(229, 229, 229, 1.000)"
      }}
    >
      <Image source={props.item.coverUrl} style={{ width: 80, height: 120 }} />
      <View style={{ height: "80%", width: 200 }}>
        <Text
          style={{
            fontSize: 12,
            color: "rgba(178, 178, 178, 1.000)",
            marginBottom: 5
          }}
        >
          {props.item.authorName}
        </Text>
        <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 5 }}>
          {props.item.featureName}
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            width: "80%",
            justifyContent: "flex-start"
          }}
        >
          <Star rating={props.item.rating} />
          <Text style={{ color: "rgba(228, 228, 228, 1.000)" }}>
            {props.item.reviewNumber} reviews
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            width: "90%",
            justifyContent: "flex-start"
          }}
        >
          <View style={{ flexDirection: "row", marginRight: 15 }}>
            <FontAwesome
              name="eye"
              size={14}
              color="rgba(228, 228, 228, 1.000)"
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 12,
                color: "rgba(178, 178, 178, 1.000)"
              }}
            >
              {props.item.viewNumber}
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              name="bookmark-o"
              size={14}
              color="rgba(228, 228, 228, 1.000)"
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 12,
                color: "rgba(178, 178, 178, 1.000)"
              }}
            >
              {props.item.markNumber}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ height: "70%", justifyContent: "space-between" }}>
        <Mark selfMarked={props.selfMarked} />
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            borderWidth: 0.5,
            borderColor: "rgba(178, 178, 178, 1.000)",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <FontAwesome
            name="share-alt"
            color="rgba(178, 178, 178, 1.000)"
            size={14}
          />
        </View>
      </View>
    </View>
  );
};
export class FeatureList extends React.Component<{}, FeatureListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      featureList: featureListData,
      selfMarkedIndex: 2
    };
  }

  keyExtractor = (item: FeatureItem, index: number) => index.toString();

  renderItem = (item: FeatureItem, index: number) => {
    //console.log(item.index);
    const selfMarkedIndex =
      item.index === this.state.selfMarkedIndex ? true : false;

    return <ListItem selfMarked={selfMarkedIndex} {...item} />;
  };

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.featureList}
        renderItem={this.renderItem}
        style={{ paddingHorizontal: 10 }}
      />
    );
  }
}
