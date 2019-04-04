import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  Animated,
  Image
} from "react-native";
import { Ionicons, Feather, EvilIcons, FontAwesome } from "@expo/vector-icons";

export interface ItemDetailProps {}

export interface ItemDetailState {
  Animatemt: any;
}

export interface IAmenitie {
  iconName: string;

  name: string;
}

export interface INearbyItem {
  name: string;
  distance: number;
}

const AmenitiesData: IAmenitie[] = [
  { iconName: "wifi", name: "Wifi" },
  { iconName: "coffee", name: "Coffee maker" },
  { iconName: "tv", name: "TV" },
  { iconName: "shower", name: "Washer" }
];

const NearbyData: INearbyItem[] = [
  { name: "Columbia Road Flower Market", distance: 0.5 },
  { name: "Brick Ln", distance: 0.6 },
  { name: "Old Spitalfields Market", distance: 0.7 },
  { name: "Coca-Cola London Eye", distance: 1.1 },
  { name: "Buckingham Palace", distance: 1.1 }
];

const AmenitiesItem = (props: IAmenities) => {
  return (
    <View
      style={{
        height: 60,
        alignItems: "center",
        justifyContent: "space-around",
        width: 80
      }}
    >
      <FontAwesome
        name={props.iconName}
        size={14}
        color="rgba(159, 166, 181, 1.000)"
      />
      <Text
        style={{
          marginTop: 2,
          fontSize: 12,
          color: "rgba(99, 107, 128, 1.000)"
        }}
      >
        {props.name}
      </Text>
    </View>
  );
};

const NearbyItem = (props: INearbyItem) => {
  const { name, distance } = { ...props };
  return (
    <View style={{ width: "90%" }}>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center"
          }}
        >
          <FontAwesome
            name="check"
            size={10}
            color="rgba(72, 119, 237, 1.000)"
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 10,
              color: "rgba(136, 136, 136, 1.000)"
            }}
          >
            {name}
          </Text>
        </View>
        <Text style={{ fontSize: 10, color: "rgba(176, 181, 194, 1.000)" }}>
          {distance} ml
        </Text>
      </View>
    </View>
  );
};

export type modalXaxis = {
  Animatemt: number;
};

const Header = () => {
  return (
    <View
      style={{
        marginTop: 30,
        flexDirection: "row",
        height: 30,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
      }}
    >
      <Ionicons name="ios-arrow-back" size={24} color="white" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: 60
        }}
      >
        <Ionicons name="ios-heart-empty" size={24} color="white" />
        <Feather name="share" size={24} color="white" />
      </View>
    </View>
  );
};

const ModalCard = (props: modalXaxis) => {
  return (
    <Animated.View
      style={{
        marginTop: props.Animatemt,
        height: 600,
        width: "100%",
        backgroundColor: "white",

        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
      }}
    >
      <ScrollView>
        <Text
          style={{
            textAlign: "left",
            paddingLeft: 10,
            paddingTop: 10,
            fontWeight: "bold",
            fontSize: 14
          }}
        >
          Cozy Victorian Apartment in Islington
        </Text>

        <View
          style={{
            marginTop: 5,
            paddingLeft: 10,
            flexDirection: "row",
            width: "60%",
            height: 40,
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <EvilIcons
            name="location"
            size={18}
            color="rgba(171, 176, 189, 1.000)"
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 12,
              color: "rgba(161, 166, 179, 1.000)"
            }}
          >
            {" "}
            28 Great Sutton St. Clerkenwell London,EV1V 0DS
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 150,
              backgroundColor: "rgba(240, 246, 255, 1.000)",
              borderRadius: 6,
              height: 30
            }}
          >
            <EvilIcons
              name="comment"
              size={12}
              color="rgba(48, 101, 236, 1.000)"
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "rgba(68, 86, 128, 1.000)"
              }}
            >
              11 Reviews
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              backgroundColor: "rgba(254, 250, 243, 1.000)",
              borderRadius: 6,
              height: 30
            }}
          >
            <EvilIcons
              name="star"
              size={12}
              color="rgba(254, 213, 125, 1.000)"
            />
            <Text style={{ fontSize: 12, color: "rgba(191, 177, 152, 1.000)" }}>
              4.6 Avg. Rating
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 20, width: "100%", paddingHorizontal: 10 }}>
          <Text
            style={{
              lineHeight: 20,
              fontSize: 10,
              color: "rgba(96, 96, 96, 1.000)"
            }}
          >
            Slumber on a plush Eve memory foam mattress​ in the courtyard-facing
            bedroom of this characterful modernised period apartment. There's
            classy wooden flooring throughout while the traditional fireplace
            lends a cosy focal point to the living{" "}
          </Text>
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text>Amentities</Text>
          <View
            style={{
              flexDirection: "row",
              height: 60,
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            {AmenitiesData.map((item, index) => {
              return <AmenitiesItem {...item} key={index} />;
            })}
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(240, 246, 255, 1.000)",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  color: "rgba(53, 105, 232, 1.000)"
                }}
              >
                +11{" "}
              </Text>
              <Text
                style={{ fontSize: 8, color: "rgba(131, 163, 241, 1.000)" }}
              >
                more
              </Text>
            </View>
          </View>
        </View>

        <View style={{ width: "100%", marginTop: 10, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12 }}>Nearby landmarks</Text>
          {NearbyData.map((item, index) => {
            return <NearbyItem {...item} key={index} />;
          })}
        </View>

        <View style={{ marginTop: 10, width: "100%", paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>Location</Text>
          <Text
            style={{
              fontSize: 10,
              color: "rgba(127, 134, 151, 1.000)",
              marginBottom: 10
            }}
          >
            28 Great Sutton St. Clertnewll. London,EC1V ODS
          </Text>
          <Image source={require("../../../assets/apartment/map.png")} />
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default class ItemDetailComponent extends React.Component<
  ItemDetailProps,
  ItemDetailState
> {
  constructor(props: ItemDetailProps) {
    super(props);
    this.state = {
      Animatemt: new Animated.Value(900)
    };
  }

  componentDidMount = () => {
    Animated.timing(this.state.Animatemt, {
      toValue: -15,
      duration: 400
    }).start();
  };

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../../assets/apartment/apartment2_image1.png")}
          style={{ width: "100%", height: 200 }}
        >
          <Header />
        </ImageBackground>
        <ModalCard Animatemt={this.state.Animatemt} />
      </View>
    );
  }
}
