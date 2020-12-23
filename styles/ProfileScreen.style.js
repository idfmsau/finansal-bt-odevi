import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    marginTop: height / 15,
    width: 128,
    height: 128,
    borderWidth: 3,
    borderColor: "black",
  },
  userNameText: {
    marginTop: 20,
    color: "white",
  },
  followButton: {
    flexDirection: "row",
    marginTop: -30,
    backgroundColor: "#344768",
    minWidth: width / 2,
    zIndex: 1,
  },
  profileBackground: {
    alignSelf: "stretch",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#344768",
    maxHeight: height / 10
    
  },
  contentBackground: {
    marginTop: -15,
    flex: 2,
    alignSelf: "stretch",
    alignItems: "center",
    zIndex: -1,
  },
  movieList: {
    flexDirection: "row",
  },
  mainView: {
    flexDirection:'row',
    flexWrap:'wrap'
}
});

export default styles;
