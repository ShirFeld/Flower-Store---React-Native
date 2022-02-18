import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { MYSTYLE } from "../assets/styleFile";
import { global } from "../App";
import ItemGridTile from "../components/ItemGridTile";




export default function ChartScreen({ navigation }) {

    const { list, add, remove, reset } = useContext(global);

    const coupons = [
        {
            "name": 'MichaelShir100',
            "discount": 0.1
        },
        {
            "name": 'SfMv100',
            "discount": 0.25
        },
        {
            "name": '12345678',
            "discount": 0.3
        }
    ]
    // my coupons
    const [userInput, setUserInput] = useState('');

    const checkCoupon = (couponToCheck) => {
        if (couponToCheck !== undefined) {
            for (const item of coupons) {
                if (item.name === couponToCheck) {
                    setFinalPrice(finalPrice - (item.discount * finalPrice))
                    return;
                }
            }
            alert("Wrong Coupon entered! please try again...")
        }
    }


    const [finalPrice, setFinalPrice] = useState(0);
    const [flagPrice, setFlagPrice] = useState(true);

    const checkPrice = () => {
        let sum = 0;
        for (const item of list) {
            if (item != undefined) {
                sum += (parseInt(item.finalPrice) + parseInt(item.delivery))
            }
        }
        setFinalPrice(sum);
        setFlagPrice(false);
    }

    if (flagPrice) checkPrice()

    let removeFromList = (data) => {
        for (const item of list) {
            if (item === data) {
                remove(data);
            }
        }
    }

    const renderGridItem = ({ item }) => {
        return (
            <ItemGridTile
                item={item}
                title={item.title}
                image={item.imageUrl}
                onSelect={() => {
                    removeFromList(item);
                    setFlagPrice(true);
                }}
            />
        );
    };




    return (

        <View>
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                ListHeaderComponent={  // מה שיוצג בתחילת המסך
                    <>
                        <Text style={MYSTYLE.title12}> All your products: </Text>
                        <Text style={MYSTYLE.text21}> If you want to delete a product click on it  </Text>
                    </>
                }
                ListFooterComponent={
                    <>

                        <Text style={MYSTYLE.title12}> If you have a coupon code you can enter it here: </Text>
                        <TextInput
                            style={MYSTYLE.input}
                            placeholder="Enter coupon code"
                            onChangeText={text => setUserInput(text)}
                            onSubmitEditing={() => { checkCoupon(userInput) }}
                        />
                        <Text style={MYSTYLE.title12}>Final price with delivery</Text>
                        <Text style={{ fontSize: 36, textAlign: 'center' }}>{finalPrice}₪</Text>

                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={[MYSTYLE.button2, { justifyContent: "center" }]} onPress={() => navigation.navigate("Enter your details")}>
                                <Text style={[MYSTYLE.text1, { fontSize: 30 }]}>Pay </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }

                keyExtractor={(item, index) => index++}
                data={list}
                renderItem={renderGridItem}
                numColumns={1}
            />

        </View >
    )
}
