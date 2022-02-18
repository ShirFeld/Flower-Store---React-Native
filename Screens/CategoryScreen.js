import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from '../components/CategoryGridTile';


const CategoryScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        image={item.image}
        onSelect={() => {
          navigation.navigate("Inner", {
            Cid: item.id,
            categoryName: item.title,
          });
        }}
      />
      
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};





export default CategoryScreen;