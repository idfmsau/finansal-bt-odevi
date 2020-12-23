import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text } from "@ui-kitten/components";

const { width, height } = Dimensions.get("window");

const InfoBox = (props) => {
  const { title, value } = props;

  return (
    <View style={styles.container}>
        <View>
      <Text category="h5" status='basic'>{title}</Text>
        </View>
        <View>
      <Text category="h5" status='info'>{value}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: 'center',
    justifyContent:'space-between',
    padding: width/40,
    marginBottom: 1,
    backgroundColor: 'white',
    maxHeight: height/10,
  },
  text: {
  },
  descriptionText: {
  },
});
export default InfoBox;
