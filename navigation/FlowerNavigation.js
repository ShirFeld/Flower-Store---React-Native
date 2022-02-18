import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, TouchableOpacity, Text,StatusBar} from "react-native";
import { global } from "../App";
import { MYSTYLE } from "../assets/styleFile";


// import screens:
import CategoryScreen from "../Screens/CategoryScreen";
import Inner_category from "../Screens/Inner_category";
import Flower from "../Screens/Flower";
import ChartScreen from "../Screens/ChartScreen";
import TextInputPage from "../Screens/TextInputPage"
import Thanks from "../Screens/Thanks";


const Stack = createNativeStackNavigator();

export default function FlowerNavigator({ route }) {

  const { list, add, remove, reset } = useContext(global);


  // counter for items in chart
  const counterListItems = () => {
    if (list === []) return 0;
    return list.length;
  }

  return (
    <NavigationContainer >
       {/* <StatusBar hidden={true} /> */}
      <Stack.Navigator
        initialRouteName="Flower Shop"
        
      >

        <Stack.Screen name="Flower Shop" component={CategoryScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#ddd9e0",
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Chart")}
                style={{ flexDirection: "row"}}>
                <Image source={require('../assets/image/logo2.png')}
                  style={MYSTYLE.chartImg}
                />
                <Text style={MYSTYLE.chartCounter}
                >{counterListItems()}</Text>
              </TouchableOpacity>
            )
          })
          }
        />
        <Stack.Screen name="Inner" component={Inner_category}
          options={({ route, navigation }) => ({
            title: route.params.categoryName,
            headerStyle: {
              backgroundColor: "#ddd9e0"
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Chart")}
                style={{ flexDirection: "row" }}>
                <Image source={require('../assets/image/logo2.png')}
                  style={MYSTYLE.chartImg}

                />
                <Text style={MYSTYLE.chartCounter}
                >{counterListItems()}</Text>
              </TouchableOpacity>
            )
          })} />
        <Stack.Screen name="Flower" component={Flower}
          options={({ route, navigation }) => ({
            title: route.params.FlowerName,
            headerStyle: {
              backgroundColor: "#ddd9e0"
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Chart")}
                style={{ flexDirection: "row" }} >
                <Image source={require('../assets/image/logo2.png')}
                 style={MYSTYLE.chartImg}

                />
                <Text style={MYSTYLE.chartCounter}
                >{counterListItems()}</Text>
              </TouchableOpacity>
            )
          })} />

        <Stack.Screen name="Chart" component={ChartScreen} options={ {headerStyle:{ backgroundColor: "#ddd9e0" }}}/>
        <Stack.Screen name="Enter your details" component={TextInputPage} options={ {headerStyle:{ backgroundColor: "#ddd9e0" }}}/>
        <Stack.Screen name="Goodbye" component={Thanks} options={{headerShown: false}}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}