import * as React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

export interface CalendarProps {}

export interface IDate {
  day: number;
  currentMonth: boolean;
  hasEvent: boolean;
  selected: boolean;
}

export interface CalendarState {
  monthData: IDate[];
  selectedDayIndex: number;
}

const calendarData: IDate[] = [
  { day: 27, currentMonth: false, hasEvent: false, selected: false },
  { day: 28, currentMonth: false, hasEvent: false, selected: false },
  { day: 29, currentMonth: false, hasEvent: false, selected: false },
  { day: 30, currentMonth: false, hasEvent: false, selected: false },
  { day: 31, currentMonth: false, hasEvent: false, selected: false },
  { day: 1, currentMonth: true, hasEvent: false, selected: true },
  { day: 2, currentMonth: true, hasEvent: false, selected: false },
  { day: 3, currentMonth: true, hasEvent: true, selected: false },
  { day: 4, currentMonth: true, hasEvent: true, selected: false },
  { day: 5, currentMonth: true, hasEvent: false, selected: false },
  { day: 6, currentMonth: true, hasEvent: false, selected: false },
  { day: 7, currentMonth: true, hasEvent: false, selected: false },
  { day: 8, currentMonth: true, hasEvent: false, selected: false },
  { day: 9, currentMonth: true, hasEvent: true, selected: false },
  { day: 10, currentMonth: true, hasEvent: false, selected: false },
  { day: 11, currentMonth: true, hasEvent: false, selected: false },
  { day: 12, currentMonth: true, hasEvent: false, selected: false },
  { day: 13, currentMonth: true, hasEvent: false, selected: false },
  { day: 14, currentMonth: true, hasEvent: true, selected: false },
  { day: 15, currentMonth: true, hasEvent: false, selected: false },
  { day: 16, currentMonth: true, hasEvent: false, selected: false },
  { day: 17, currentMonth: true, hasEvent: false, selected: false },
  { day: 18, currentMonth: true, hasEvent: false, selected: false },
  { day: 19, currentMonth: true, hasEvent: false, selected: false },
  { day: 20, currentMonth: true, hasEvent: false, selected: false },
  { day: 21, currentMonth: true, hasEvent: false, selected: false },
  { day: 22, currentMonth: true, hasEvent: false, selected: false },
  { day: 23, currentMonth: true, hasEvent: false, selected: false },
  { day: 24, currentMonth: true, hasEvent: false, selected: false },
  { day: 25, currentMonth: true, hasEvent: false, selected: false },
  { day: 26, currentMonth: true, hasEvent: false, selected: false },
  { day: 27, currentMonth: true, hasEvent: false, selected: false },
  { day: 28, currentMonth: true, hasEvent: false, selected: false },
  { day: 29, currentMonth: true, hasEvent: false, selected: false },
  { day: 30, currentMonth: true, hasEvent: false, selected: false },
  { day: 31, currentMonth: true, hasEvent: false, selected: false },
  { day: 1, currentMonth: false, hasEvent: false, selected: false },
  { day: 2, currentMonth: false, hasEvent: false, selected: false },
  { day: 3, currentMonth: false, hasEvent: false, selected: false },
  { day: 4, currentMonth: false, hasEvent: false, selected: false },
  { day: 5, currentMonth: false, hasEvent: false, selected: false },
  { day: 6, currentMonth: false, hasEvent: false, selected: false }
];

const HeaderItem = (props: any) => {
  const { day } = { ...props };
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        borderWidth: 0,
        borderColor: "yellow"
      }}
    >
      <Text style={{ fontSize: 12, color: "white" }}>{day}</Text>
    </View>
  );
};
const CalendarHeader = () => {
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        height: 40,
        width: "100%",
        paddingHorizontal: 10,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <HeaderItem day="MO" />
      <HeaderItem day="TE" />
      <HeaderItem day="WE" />
      <HeaderItem day="TH" />
      <HeaderItem day="FR" />
      <HeaderItem day="SA" />
      <HeaderItem day="SU" />
    </View>
  );
};
const daySize: number = 24;

const DayItem = (props: IDate) => {
  const { day, selected, hasEvent, currentMonth } = { ...props };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        borderWidth: 0,
        borderColor: "yellow"
      }}
    >
      <View
        style={{
          height: daySize,
          width: daySize,
          borderRadius: daySize / 2,
          borderWidth: selected ? 2 : 0,
          borderColor: "rgba(123, 176, 69, 1.0)",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: currentMonth ? "white" : "rgba(65, 75, 88, 1.000)"
          }}
        >
          {day}
        </Text>
        {hasEvent && (
          <View
            style={{
              position: "absolute",
              bottom: -4,
              left: 9,
              width: 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: "rgba(236, 194, 10, 1.000)"
            }}
          />
        )}
      </View>
    </View>
  );
};

const CalenderView = (props: IDate[]) => {
  const { monthData } = { ...props };
  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <CalendarHeader />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 10,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {monthData.map((item: IDate, index: number) => {
          return <DayItem {...item} key={index} />;
        })}
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 10,
          height: 40,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Text
          style={{
            flex: 3,
            fontSize: 18,
            color: "rgb(236, 194, 10)",
            marginRight: 10
          }}
        >
          11 30
        </Text>
        <Text style={{ fontSize: 12, flex: 7, color: "white" }}>
          Don't forget to post food &drinks UI Kit on dribbble
        </Text>
      </View>
    </View>
  );
};

export default class CalendarComponent extends React.Component<
  CalendarProps,
  CalendarState
> {
  constructor(props: CalendarProps) {
    super(props);
    this.state = {
      monthData: calendarData
    };
  }

  public render() {
    return (
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          width: "100%",
          height: 300,
          borderWidth: 0,
          borderColor: "red"
        }}
      >
        <View style={{ width: "40%", height: "100%" }}>
          <ImageBackground
            source={require("../../assets/hand.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <Text style={{ marginLeft: 10, color: "white", marginTop: 20 }}>
              {" "}
              2015
            </Text>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 50,
                fontSize: 22,
                color: "white",
                width: 100,
                marginBottom: 10
              }}
            >
              MONDAY
            </Text>
            <Text style={{ marginLeft: 10, fontSize: 16, color: "white" }}>
              AUGUST,3RD
            </Text>

            <View
              style={{
                alignSelf: "center",
                marginTop: 50,
                width: 80,
                height: 30,
                borderRadius: 6,
                backgroundColor: "rgba(139, 191, 87, 1.000)",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 10, color: "white" }}>Add event</Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            width: "60%",
            backgroundColor: "rgba(15, 23, 34, 1.000)",
            height: 300
          }}
        >
          <CalenderView monthData={this.state.monthData} />
        </View>
      </View>
    );
  }
}
