import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MYSTYLE } from "../assets/styleFile";




export default function Thanks({ navigation }) {

    return (

        <View>
            <View style={MYSTYLE.lastPage}>
                <Text style={[MYSTYLE.title14, { color: "#3d413f" }, { fontSize: 30 }]}> Your order has been successfully received</Text>
            </View>
            <Text style={[MYSTYLE.title14, { marginTop: 30 }]}>Thank you for buying from us, hope it was a good shopping experience</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Flower Shop")} >
                <Text style={{ textAlign: 'center', fontFamily: "font3", color: 'grey', fontSize: 30, marginTop: 100 }}>  Back to store</Text>
            </TouchableOpacity>
        </View>






    )
}