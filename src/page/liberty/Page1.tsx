import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  Image
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export interface IHeader {
  likeNumber: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface ICategoryItem {
  pic: string;
  categoryName: string;
  itemNumber: number;
}

export interface ILikeNumber {
  likeNumber: number;
}

export interface Page1Props {}

export interface Page1State {
  categoryData: ICategoryItem[];
  headerData: IHeader;
}

const categoryData: ICategoryItem[] = [
  {
    pic: require("../..//../assets/liberty/page1_item1.png"),
    categoryName: "Shirts",
    itemNumber: 274
  },
  {
    pic: require("../..//../assets/liberty/page1_item2.png"),
    categoryName: "Pants",
    itemNumber: 193
  },
  {
    pic: require("../..//../assets/liberty/page1_item3.png"),
    categoryName: "Bags",
    itemNumber: 104
  },
  {
    pic: require("../..//../assets/liberty/page1_item4.png"),
    categoryName: "Shoes",
    itemNumber: 104
  },
  {
    pic: require("../..//../assets/liberty/page1_item5.png"),
    categoryName: "Watches",
    itemNumber: 92
  },
  {
    pic: require("../..//../assets/liberty/page1_item6.png"),
    categoryName: "Jewelry",
    itemNumber: 458
  }
];

const headerData: IHeader = {
  imageUrl: require("../../../assets/liberty/page1_image1.png"),
  likeNumber: 2,
  title: "Run Beyond Limits",
  subtitle: "Our New Winter Collections is now available in stores"
};
const HeaderBar = (props: ILikeNumber) => {
  return (
    <View
      style={{
        marginTop: 30,
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: "rgba(158, 157, 167, 1.000)"
      }}
    >
      <Ionicons name="ios-menu" size={24} color="white" />
      <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
        Categories
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <View
          style={{
            height: 50,
            width: 40,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Ionicons name="ios-heart" size={24} color="white" />
          <View
            style={{
              position: "absolute",
              top: 8,
              right: 5,
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: "rgba(255, 39, 68, 1.000)",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 8, color: "white" }}>
              {props.likeNumber}
            </Text>
          </View>
        </View>
        <Feather name="shopping-cart" size={20} color="white" />
      </View>
    </View>
  );
};

const HeaderViewButton = () => {
  return (
    <View
      style={{
        marginTop: 30,
        alignSelf: "center",
        width: 140,
        height: 32,
        borderRadius: 20,
        backgroundColor: "rgba(155, 39, 175, 1.000)",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ fontSize: 14, color: "white" }}>View All</Text>
    </View>
  );
};

const Header = (props: IHeader) => {
  const { imageUrl, likeNumber, title, subtitle } = { ...props };
  return (
    <ImageBackground source={imageUrl} style={{ width: "100%", height: 300 }}>
      <HeaderBar likeNumber={likeNumber} />
      <Text
        style={{
          fontSize: 24,
          color: "white",
          marginBottom: 20,
          textAlign: "center",
          marginTop: 50
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          alignSelf: "center",
          textAlign: "center",
          width: "60%",
          fontSize: 14,
          color: "white"
        }}
      >
        {subtitle}
      </Text>

      <HeaderViewButton />
    </ImageBackground>
  );
};

const CategoryContainer = (props: any) => {
  return (
    <View
      style={{
        height: 500,
        width: "98%",
        alignSelf: "center",
        backgroundColor: "white",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        borderColor: "red",
        borderWidth: 0,
        flexDirection: "row",
        flexWrap: "wrap"
      }}
    >
      {props.children}
    </View>
  );
};

const CategoryItem = (props: ICategoryItem) => {
  const { pic, itemNumber, categoryName } = { ...props };
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "50%",
        height: 150,
        borderRightWidth: 0.5,

        borderRightColor: "rgba(236, 240, 242, 1.000)",
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(236, 240, 242, 1.000)"
      }}
    >
      <Image
        source={pic}
        style={{ width: "100%", height: "50%", resizeMode: "contain" }}
      />
      <Text style={{ marginVertical: 10, textAlign: "center" }}>
        {categoryName}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 10,
          color: "rgba(146, 160, 169, 1.000)"
        }}
      >
        {itemNumber} Items
      </Text>
    </View>
  );
};

export default class Page1Component extends React.Component<
  Page1Props,
  Page1State
> {
  constructor(props: Page1Props) {
    super(props);
    this.state = {
      categoryData: categoryData,
      headerData: headerData
    };
  }

  public render() {
    const categoryData = this.state.categoryData;
    return (
      <View>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Header {...this.state.headerData} />
        <CategoryContainer>
          {categoryData.map((item, index) => {
            return <CategoryItem {...item} key={index} />;
          })}
        </CategoryContainer>
      </View>
    );
  }
}
