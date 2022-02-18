import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { MYSTYLE } from "../assets/styleFile";
import { global } from "../App";




const ItemGridTile = (props, navigation) => {
    const { list, add, remove, reset } = useContext(global);



    // props.onSelect
    return (
        <TouchableOpacity style={MYSTYLE.gridItem2} onPress={() => { props.onSelect() }}>
            {/* <TouchableOpacity style={MYSTYLE.gridItem2} onPress={() => { }}> */}
            <View style={MYSTYLE.container3}>
                <ImageBackground source={{ uri: props.image }} resizeMode="cover" style={[MYSTYLE.image2, { marginTop: 0 }]} ></ImageBackground>
                <Text style={[MYSTYLE.title3, { margin: 2 }]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};


export default ItemGridTile;