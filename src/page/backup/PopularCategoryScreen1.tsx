import * as React from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";

import {
  Zocial,
  Entypo,
  Octicons,
  Ionicons,
  FontAwesome
} from "@expo/vector-icons";
import PopularCategoryItem, {
  PopularScreenItemProps
} from "../components/popularcategory/PopularScreenItem";
/**这里popularCategoryData实现了PopularScreenItemsProps的类型约束 */
const popularCategoryData: PopularScreenItemProps[] = [
  {
    category: "ART",
    posts: 3000,
    followers: 19.3,
    bgImage: require("../../assets/popular_bg1.png")
  },
  {
    category: "TECHNOLOGY",
    posts: 3000,
    followers: 19.3,
    bgImage: require("../../assets/popular_bg2.png")
  },
  {
    category: "BUSINESS",
    posts: 3000,
    followers: 19.3,
    bgImage: require("../../assets/popular_bg3.png")
  },
  {
    category: "FASHION",
    posts: 3000,
    followers: 19.3,
    bgImage: require("../../assets/popular_bg4.png")
  },
  {
    category: "SPORT",
    posts: 3000,
    followers: 19.3,
    bgImage: require("../../assets/popular_bg5.png")
  },
  {
    category: "POLITICS",
    posts: 8,
    followers: 78,
    bgImage: require("../../assets/popular_bg5.png")
  }
];
/**
 * 这里定义了已经选点的Category index.
 */
const selectedCategoryIndex: number[] = [1, 3, 4];

const isInArray = (arr: number[], value: number): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return true;
    }
  }

  return false;
};

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
        backgroundColor: "white",
        borderBottomWidth: 0.6,
        borderBottomColor: "rgba(233, 233, 233, 0.5)"
      }}
    >
      <Ionicons name="ios-menu" size={size} color={color} />
      <Text>Popular Categories</Text>
      <Ionicons name="ios-search" size={size} color={color} />
    </View>
  );
};

export type PopularCategoryState = {
  popularCategoryData: PopularScreenItemProps[];
  selectedCategoryIndex: number[];
  selectCategory?: () => void;
};

export default class PopularCategory1Screen extends React.Component<
  {},
  PopularCategoryState
> {
  constructor(props) {
    super(props);
    this.state = {
      popularCategoryData: popularCategoryData,
      selectedCategoryIndex: selectedCategoryIndex
    };
  }

  selectCategory = (index: number) => {
    this.setState({
      selectedCategoryIndex: [...this.state.selectedCategoryIndex, index]
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Header size={24} color="black" />

        <ScrollView>
          {this.state.popularCategoryData.map((item, index) => {
            const selected = isInArray(this.state.selectedCategoryIndex, index);
            return (
              <PopularCategoryItem
                {...item}
                index={index}
                selectCategory={this.selectCategory}
                selected={selected}
                key={index}
              />
            );
          })}
        </ScrollView>
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
