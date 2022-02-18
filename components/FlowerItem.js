import React, { useState } from "react";
import {  View,  Text,  StyleSheet,  TouchableOpacity,  ImageBackground,} from "react-native";
import { MYSTYLE } from "../assets/styleFile";


export default function FlowerItem(props){
  
  return (
    <TouchableOpacity onPress={props.onSelectFlower}>
      <View style={MYSTYLE.flowerItem}>
        <View style={{ ...MYSTYLE.flowerRow ,...MYSTYLE.flowerHeader }}>
          <ImageBackground source={{ uri: props.image }} style={MYSTYLE.bgImage}>
            <View style={MYSTYLE.titleContainer}>
              <Text style={MYSTYLE.text4} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...MYSTYLE.flowerRow, ...MYSTYLE.flowerDetail }}>
          <Text>{props.duration}</Text>
          <Text>{props.complexity}</Text>
          <Text>{props.affordability}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

