import React from "react";
import { View, Text } from "react-native";


export default function SecondScreen({ navigation }){
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Second Screen</Text>
    </View>
  );
};