import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    width: width,
    borderRadius: 0,
    alignSelf: "center",
  },
  movieCard: {
    alignItems: "center",
    marginTop: 24,
  },
});

export default styles;
