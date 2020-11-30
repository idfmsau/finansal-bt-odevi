import React from "react";
import { StyleSheet, View, SafeAreaView, Dimensions } from "react-native";
import { Avatar, Text, Button } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import InfoBox from "../components/profile/InfoBox";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

function ProfileScreen(props) {
  const { userName, description } = props;
  return (
        <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#FFB92A','#FFA400']} style={styles.profileBackground}>
        <Avatar
          style={styles.avatar}
          source={require("../images/12angrymen.jpg")}
        />
        <Text style={styles.userNameText} category="h6" status="basic">
          Mustafa Emre ÖZMEN
        </Text>
      </LinearGradient>
      <Button style={styles.followButton}>
        Takip Et
      </Button>
      <LinearGradient
        colors={["#D7E1EC", "#FFFFFF"]}
        style={ styles.contentBackground }
      >
        <InfoBox title='Listeye Eklenenler' value='1'></InfoBox>
        <InfoBox></InfoBox>
      </LinearGradient>
    </SafeAreaView>
  );
}


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
    minWidth: width/2
  },
  profileBackground: {
    flex: 2,
    alignSelf: "stretch",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: '#344768'
  },
  contentBackground: {
    marginTop: -15,
    flex: 2,
    alignSelf: "stretch",
    alignItems: "center",
    zIndex: -1
  },
});

export default ProfileScreen;
