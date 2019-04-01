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
import Header from "../../components/backup/Header2";

export interface Page4State {
  mensProduct: IProduct[];
  singleProduct: IProduct;
}

const HeaderBar = (props: ILikeNumber) => {
  return (
    <View
      style={{
        width: "100%",
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
      <Text
        style={{
          alignSelf: "center",
          width: 100,
          fontSize: 18,
          color: "black",
          textAlign: "center"
        }}
      >
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

export interface IProduct {
  imageUrl: string;
  name: string;
  slug?: number;
  price?: number;
  type?: string;
}

const productData: IProduct[] = [
  {
    name: "Shirts",
    imageUrl: require("../../../assets/liberty/page4_item1.png"),
    slug: 32
  },
  {
    name: "Pants",
    imageUrl: require("../../../assets/liberty/page4_item2.png"),
    slug: 49
  },
  {
    name: "Bags",
    imageUrl: require("../../../assets/liberty/page4_item3.png"),
    slug: 19
  }
];

const MensProductItem = (props: IProduct) => {
  const { imageUrl, name, slug } = { ...props };
  return (
    <View
      style={{
        paddingTop: 10,
        alignSelf: "center",
        height: 130,
        width: 150,

        borderWidth: 1,
        borderColor: "rgba(239, 243, 244, 1.000)"
      }}
    >
      <Image
        source={imageUrl}
        style={{
          alignSelf: "center",
          height: 80,
          width: "80%",
          resizeMode: "contain"
        }}
      />
      <Text style={{ fontSize: 14, textAlign: "center" }}>{name}</Text>
      <Text
        style={{
          fontSize: 10,
          color: "rgba(146, 159, 167, 1.000)",
          textAlign: "center"
        }}
      >
        {slug} items
      </Text>
    </View>
  );
};
const MensProducts = (props: any) => {
  const mensProduct = props.mensProduct;

  return (
    <ScrollView horizontal style={{ width: "100%", height: 150 }}>
      {mensProduct.map((item: IProduct, index: number) => {
        return <MensProductItem {...item} key={index} />;
      })}
    </ScrollView>
  );
};

const jacketData: IProduct = {
  type: "SKI Jacket",
  name: "Quicksilver Mission",
  imageUrl: require("../../../assets/liberty/page4_image2.png"),
  price: 139.65
};

const SingleProduct = (props: IProduct) => {
  const { type, name, imageUrl, price } = { ...props };
  return (
    <View
      style={{
        height: 200,
        width: "100%",
        alignSelf: "center",
        paddingHorizontal: 20
      }}
    >
      <Text
        style={{
          marginVertical: 10,
          fontSize: 12,
          color: "rgba(113, 193, 243, 1.000)",
          textAlign: "center"
        }}
      >
        {type}
      </Text>
      <Text style={{ fontSize: 14, textAlign: "center" }}>{name}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 150,
          alignItems: "center"
        }}
      >
        <Ionicons
          name="ios-arrow-back"
          size={20}
          color="rgba(219, 225, 227, 1.000)"
        />
        <Image
          source={imageUrl}
          style={{ width: "80%", height: "100%", resizeMode: "contain" }}
        />
        <Ionicons
          name="ios-arrow-forward"
          size={20}
          color="rgba(219, 225, 227, 1.000)"
        />
      </View>
      <Text style={{ textAlign: "center" }}>${price}</Text>
    </View>
  );
};

export default class Page4Component extends React.Component<
  Page4Props,
  Page4State
> {
  constructor(props: Page1Props) {
    super(props);
    this.state = {
      mensProduct: productData,
      singleProduct: jacketData
    };
  }

  public render() {
    return (
      <View>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
        <HeaderBar likeNumber={1} />
        <View
          style={{
            alignItems: "center",
            borderBottomWidth: 0,
            borderBottomColor: ""
          }}
        >
          <Text
            style={{
              marginTop: 10,
              marginBottom: 20,
              fontSize: 10,
              color: "rgba(92, 184, 241, 1.000)"
            }}
          >
            Mens's Shoes
          </Text>
          <Text> Camper Bone</Text>
          <Text style={{ marginBottom: 20 }}>Hight-top Sneaker</Text>

          <Image
            style={{ width: "100%", height: 200, alignItems: "center" }}
            source={require("../../../assets/liberty/page4_image1.png")}
          />
          <Text style={{ fontSize: 16, marginVertical: 20 }}>$139.00</Text>
        </View>

        <ScrollView style={{ width: "100%", height: 900 }}>
          <MensProducts mensProduct={this.state.mensProduct} />
          <SingleProduct {...this.state.singleProduct} />
        </ScrollView>
      </View>
    );
  }
}
