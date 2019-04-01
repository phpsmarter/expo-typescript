import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
import { FontAwesome, Ionicons, Feather, Octicons } from "@expo/vector-icons";

export interface IHeader {
  likeNumber: number;
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export interface IProduct {
  name: string;
  pic: string;
  price: number;
  color: string[];
}
export interface ISeller {
  logo: string;
  name: string;
}
export interface ICategoryItem {
  product: IProduct;
  seller: ISeller;
  liked: boolean;
  newProduct: boolean;
  sell: boolean;
}

export interface ILikeNumber {
  likeNumber: number;
}

export interface Page2Props {}

export interface Page2State {
  categoryData: ICategoryItem[];
  headerData: IHeader;
}

const headerData: IHeader = {
  imageUrl: require("../../../assets/liberty/page1_image1.png"),
  likeNumber: 2,
  title: "Run Beyond Limits",
  subtitle: "Our New Winter Collections is now available in stores"
};

const categoryData: ICategoryItem[] = [
  {
    product: {
      name: "Parajumpers Gobi",

      price: 326.5,
      pic: require("../../../assets/liberty/page2_item1.png"),
      color: ["rgba(35, 83, 167, 1.000)", "rgba(203, 28, 7, 1.000)"]
    },
    seller: {
      name: "Parajumpers",
      logo: require("../../../assets/liberty/page2_item1_logo.png")
    },
    liked: true,
    newProduct: false,
    sell: false
  },

  {
    product: {
      name: "Isar Eco Yarn",

      price: 209.0,
      pic: require("../../../assets/liberty/page2_item2.png"),
      color: [
        "rgba(77, 80, 94, 1.000)",
        "rgba(97, 134, 84, 1.000)",
        "rgba(184, 158, 110, 1.000)"
      ]
    },
    seller: {
      name: "Cotes&Ciel",
      logo: require("../../../assets/liberty/page2_item2_logo.png")
    },
    liked: false,
    newProduct: true,
    sell: true
  },

  {
    product: {
      name: "Melbye Ttanium",

      price: 155.0,
      pic: require("../../../assets/liberty/page2_item3.png"),
      color: ["rgba(54, 54, 54, 1.000)", "rgba(171, 98, 19, 1.000)"]
    },
    seller: {
      name: "Skagen",
      logo: require("../../../assets/liberty/page2_item3_logo.png")
    },
    liked: false,
    sell: true,
    newProduct: false
  }
];
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
      <Ionicons name="ios-menu" size={24} color="rgba(219, 225, 227, 1.000)" />
      <Text style={{ fontSize: 18, color: "black", textAlign: "center" }}>
        Shopping
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
          <Ionicons
            name="ios-heart"
            size={24}
            color="rgba(219, 225, 227, 1.000)"
          />
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
        <Feather
          name="shopping-cart"
          size={20}
          color="rgba(219, 225, 227, 1.000)"
        />
      </View>
    </View>
  );
};

const SettingBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 15,
        height: 30,
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Octicons name="settings" color="rgba(184, 196, 202, 1.000)" size={24} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: 120
        }}
      >
        <Ionicons
          name="ios-square-outline"
          color="rgba(0, 145, 234, 1.000)"
          size={24}
        />
        <Ionicons name="md-list" color="rgba(184, 196, 202, 1.000)" size={24} />
        <Ionicons
          name="md-color-filter"
          color="rgba(184, 196, 202, 1.000)"
          size={24}
        />
      </View>
    </View>
  );
};

const CategoryItem = (props: ICategoryItem) => {
  const { seller, product, newProduct, sell, liked } = { ...props };
  const bgColor = liked ? "rgba(255, 39, 68, 1.000)" : "transparent";
  return (
    <View
      style={{
        alignSelf: "center",
        width: 350,
        paddingHorizontal: 10,
        height: 300,
        borderBottomWidth: 0.4,
        borderBottomColor: "rgba(235, 238, 241, 1.000)"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: 30,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Text> {product.name}</Text>
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: bgColor,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <FontAwesome
            name="heart-o"
            size={14}
            color={liked ? "white" : "rgba(194, 205, 210, 1.000)"}
          />
        </View>
      </View>

      <Text style={{ fontSize: 14, color: "rgba(99, 114, 125, 1.000)" }}>
        ${product.price}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: 150,
          paddingHorizontal: 10
        }}
      >
        <Ionicons
          name="ios-arrow-back"
          size={20}
          color="rgba(219, 225, 227, 1.000)"
        />
        <Image
          source={product.pic}
          style={{ flex: 1, height: "80%", resizeMode: "contain" }}
        />
        <Ionicons
          name="ios-arrow-forward"
          size={20}
          color="rgba(219, 225, 227, 1.000)"
        />
        {newProduct && (
          <Image
            source={require("../../../assets/liberty/New.png")}
            style={{
              top: 10,
              width: 40,
              height: 15,
              position: "absolute"
            }}
          />
        )}
        {sell && (
          <Image
            source={require("../../../assets/liberty/Sale.png")}
            style={{ top: 40, width: 40, height: 15, position: "absolute" }}
          />
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 10,
          justifyContent: "space-between",

          alignItems: "center"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <Image
            source={seller.logo}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          <Text style={{ fontSize: 12, color: "rgba(137, 152, 163, 1.000)" }}>
            {seller.name}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          {product.color.map((color, index) => {
            return (
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: color,
                  marginRight: 10
                }}
                key={index}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const CategoryContainer = (props: any) => {
  return (
    <ScrollView
      style={{
        marginTop: 20,
        height: 700,
        width: "98%",
        alignSelf: "center",
        backgroundColor: "white",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        borderColor: "red",
        borderWidth: 0
      }}
    >
      {props.children}
    </ScrollView>
  );
};

export default class Page2Component extends React.Component<
  Page2Props,
  Page2State
> {
  constructor(props: Page1Props) {
    super(props);
    this.state = {
      headerData: headerData,
      categoryData: categoryData
    };
  }

  public render() {
    return (
      <View>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
        <HeaderBar {...this.state.headerData} />
        <SettingBar />
        <CategoryContainer>
          {this.state.categoryData.map((data, index) => {
            return <CategoryItem {...data} key={index} />;
          })}
        </CategoryContainer>
      </View>
    );
  }
}
