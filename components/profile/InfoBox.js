import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card } from "@ui-kitten/components";

const InfoBox = (props) => {
  const { title, value } = props;

  return (
    <View style={styles.container}>
        <View>
      <Text category="h2" status='basic'>{title}</Text>
        </View>
        <View>
      <Text category="h3" status='info'>{value}</Text>
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
    padding: 24,
    marginBottom: 1,
    backgroundColor: 'white',
    flex: 1,
    maxHeight: 75,
  },
  text: {
  },
  descriptionText: {
  },
});
export default InfoBox;
