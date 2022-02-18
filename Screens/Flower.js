import React, { useContext } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { FLOWERS } from "../data/data"
import { MYSTYLE } from "../assets/styleFile";
import { global } from "../App";


export default function Flower({ navigation, route }) {

  const flowerId = route.params.flowerID;
  const currFlower = FLOWERS.find(f => f.id === flowerId);

  const { list, add, remove, reset } = useContext(global);


  let addToChart = (data) => {
    if (data != undefined) {
      add(data);
    }
  }

  return (
    <View>
      <ScrollView>
        <Image source={{ uri: currFlower.imageUrl }} style={MYSTYLE.image} />
        <View style={MYSTYLE.listItem}>
          <View style={{ flexDirection: 'row' }}><Text style={MYSTYLE.fsize}>Flower name : </Text><Text style={MYSTYLE.fsizeb}>{currFlower.title}</Text></View>
          <View style={{ flexDirection: 'row' }}><Text style={MYSTYLE.fsize}>Price for delivery :</Text><Text style={MYSTYLE.fsizeb}> {currFlower.delivery}</Text></View>
          <View style={{ flexDirection: 'row' }}><Text style={MYSTYLE.fsize}>Price for one flower:</Text><Text style={MYSTYLE.fsizeb}> {currFlower.finalPrice}</Text></View>

          <Text >Description of the product : {currFlower.description}</Text>
        </View>
        <View>
          <View alignItems="flex-end">
            <TouchableOpacity style={MYSTYLE.button} onPress={() => { addToChart(currFlower); navigation.navigate("Chart") }}>
              <Text>Add item to chart</Text>
            </TouchableOpacity>
          </View>
          <Text style={[MYSTYLE.title14, { justifyContent: "center" }]}>Customer reviews  </Text>
          <View style={[MYSTYLE.details, { alignItems: "center" }]}>
            <Text style>{currFlower.reviews}</Text>
          </View>
        </View>



      </ScrollView>
    </View>
  );

}
;