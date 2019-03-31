import { LinearGradient } from "expo";

const StyledLinearGradient = (props: any) => {
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={["rgba(245, 75, 100, 1.000)", "rgba(247, 131, 98, 1.000)"]}
    style={{
      marginTop: 10,
      alignSelf: "center",
      paddingVertical: 5,
      paddingHorizontal: 15,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      width: 250,
      height: 40
    }}
  >
    {props.children}
  </LinearGradient>;
};
