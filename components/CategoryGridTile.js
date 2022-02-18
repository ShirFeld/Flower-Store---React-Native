import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { MYSTYLE } from "../assets/styleFile";
import AppLoading from 'expo-app-loading';
import { useFonts, MeriendaOne_400Regular } from '@expo-google-fonts/merienda-one'




const CategoryGridTile = (props) => {

  let [fontsLoaded] = useFonts({
    "font1": MeriendaOne_400Regular,
    "font2": require("../assets/fonts/AmaticSC-Bold.ttf"),
    "font3": require("../assets/fonts/YanoneKaffeesatz-Bold.ttf"),

  })

  if (!fontsLoaded) {
    return (
      <AppLoading />);
  } else
    return (
      <TouchableOpacity style={MYSTYLE.gridItem} onPress={props.onSelect}>
        <View style={MYSTYLE.container3}>
          <ImageBackground source={{ uri: props.image }} resizeMode="contain" style={MYSTYLE.image2} ></ImageBackground>
          <Text style={MYSTYLE.title3}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    );
};


export default CategoryGridTile;