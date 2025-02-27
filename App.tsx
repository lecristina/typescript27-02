import React from "react";
import { View, Text, Switch, Image  } from "react-native";
import dogImg from "./assets/R.jpg"; 

const Principal = () => {
  return (
    <View style={{flex:1}}>
      <Text>Ligar: </Text>
      <Switch value={true}
        thumbColor={"yellow"}
        trackColor={{true: "purple", false: "cyan"}}
      />
      <Image style={{width: 300, height: 200}}
      resizeMode="center"
      source={dogImg}></Image>
    </View>
  )
}

export default Principal;