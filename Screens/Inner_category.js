import React from "react";
import {  View, FlatList } from "react-native";
import { FLOWERS } from "../data/data";

import FlowerItem from "../components/FlowerItem";
import { MYSTYLE } from "../assets/styleFile";


export default function Inner_category({ route, navigation }) {
  const { Cid } = route.params;
  // Array of all trips - connected to that country!
  const displayedFlowers = FLOWERS.filter((f) => f.CategoryIds.indexOf(Cid) >= 0
  );

  // 2. Call FlowerItem:
  const renderCategoryItem = ({ item }) => {
    return (
      <FlowerItem 
        title={item.title}
        onSelectFlower={() => {
          navigation.navigate("Flower",{flowerID: item.id, flowerName: item.title });
        }}
        image={item.imageUrl}
      />
    );
  };
  
  return (
    <View style={MYSTYLE.container2}>
      <FlatList
        data={displayedFlowers}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        style={{ width: "100%",padding:5 }}
      />
    </View>
  );
};



