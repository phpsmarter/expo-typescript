import * as React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";

export interface ApartmentItem {
  title: string;
  rating: number;
  comment: number;
  imageUrl: string;
  price: number;
}

export interface Apartmentpage1Props {}

export interface Apartmentpage1State {
  apartmentsData: ApartmentItem[];
  location: string;
  time: string;
  currentGuest: number;
  favorite: number[];
}

const apartmentData: ApartmentItem[] = [
  {
    title: "Sunny Soho Flat",
    price: 130,
    rating: 4.2,
    comment: 21,
    imageUrl: require("../../../assets/apartment/apartment1_image1.png")
  },

  {
    title: "SH5 Stunning Storeditch",
    price: 107,
    rating: 4.7,
    comment: 35,
    imageUrl: require("../../../assets/apartment/apartment1_image2.png")
  },
  {
    title: "Cozy Victorian Apartment",
    price: 196,
    rating: 4.6,
    comment: 32,
    imageUrl: require("../../../assets/apartment/apartment1_image3.png")
  },
  {
    title: "Sunny Soho Flat",
    price: 128,
    rating: 4.2,
    comment: 42,
    imageUrl: require("../../../assets/apartment/apartment1_image4.png")
  }
];

const Header = (props: any) => {
  return (
    <View
      style={{
        marginTop: 30,
        flexDirection: "row",
        height: 40,
        width: "100%",
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 0,
        borderColor: "red"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <Ionicons
          name="ios-arrow-back"
          color="rgba(159, 166, 181, 1.000)"
          size={20}
        />
        <Text>{props.location}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: 60
        }}
      >
        <Ionicons
          name="ios-bookmark"
          color="rgba(159, 166, 181, 1.000)"
          size={20}
        />
        <Entypo name="map" color="rgba(159, 166, 181, 1.000)" size={20} />
      </View>
    </View>
  );
};
const TagItem = (props: any) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 30,
        borderRadius: 20,
        backgroundColor: "rgba(240, 246, 255, 1.000)",
        paddingHorizontal: 5,
        marginRight: 20
      }}
    >
      <Text
        style={{
          color: "rgba(53, 106, 232, 1.000)",
          fontSize: 12,
          fontWeight: "bold"
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};
const Tag = (props: any) => {
  console.log(props.currentGuest);
  return (
    <View
      style={{
        flexDirection: "row",
        height: 40,
        width: "100%",
        paddingHorizontal: 50,
        justifyContent: "flex-start",
        alignItems: "center"
      }}
    >
      <TagItem text={props.time} />
      <TagItem text={`${props.guest}guests`} />
    </View>
  );
};

const ApartItem = (props: ApartmentItem) => {
  const { title, price, rating, comment, imageUrl } = { ...props };
  return (
    <View
      style={{
        height: 150,
        width: "100%",
        paddingLeft: 10,
        flexDirection: "row",
        marginTop: 20
      }}
    >
      <View
        style={{
          flex: 1,
          borderWidth: 0,
          borderColor: "red",
          alignItems: "center"
        }}
      >
        <View style={{ marginVertical: 20 }}>
          <Feather name="star" size={12} color="rgba(254, 213, 125, 1.000)" />
          <Text style={{ marginTop: 2, fontSize: 10 }}>{rating}</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Feather
            name="message-circle"
            size={12}
            color="rgba(72, 119, 237, 1.000)"
          />
          <Text style={{ marginTop: 2, fontSize: 10 }}>{comment}</Text>
        </View>

        <Feather name="heart" size={12} color="rgba(159, 166, 181, 1.000)" />

        <View />
      </View>
      <View style={{ flex: 9, borderWidth: 0, borderColor: "green" }}>
        <ImageBackground
          source={imageUrl}
          style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingHorizontal: 10,
              height: 30,
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 10
            }}
          >
            <Text style={{ fontSize: 14, color: "white" }}>{title}</Text>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: 5
                }}
              >
                {price}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "rgba(170, 174, 182, 1.000)"
                }}
              >
                per night
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default class Apartmentpage1 extends React.Component<
  Apartmentpage1Props,
  Apartmentpage1State
> {
  constructor(props: Apartmentpage1Props) {
    super(props);

    this.state = {
      apartmentsData: apartmentData,
      location: "London UK",
      time: "Mar 28-30",
      currentGuest: 2,
      favorite: [1, 3]
    };
  }

  public render() {
    const scrollViewData = this.state.apartmentsData;
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Header />
        <Tag time={this.state.time} guest={this.state.currentGuest} />

        <ScrollView style={{ height: 600, width: "100%" }}>
          {scrollViewData.map((item, index) => {
            return <ApartItem {...item} key={index} />;
          })}
        </ScrollView>
      </View>
    );
  }
}
