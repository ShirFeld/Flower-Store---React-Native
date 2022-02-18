import React, { useState } from "react";
import { ScrollView, TextInput, View, Text } from "react-native";
import { MYSTYLE } from "../assets/styleFile";
import ValidCheck from "../components/ValidCheck";


export default function UseTextInput({ navigation }) {

  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [cityAndCountry, setCityAndCountry] = useState('');
  const [streetAndHouseNumber, setStreetAndHouseNumber] = useState('');


  const [holderName, setHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration1, setExpiration1] = useState('');
  const [expiration2, setExpiration2] = useState('');
  const [cvv, setCvv] = useState('');


  return (


    <ScrollView>
      <Text style={MYSTYLE.title13}> Enter your full name:</Text>
      <TextInput
        style={MYSTYLE.input}
        placeholder="Full name"
        onChangeText={(text) => setFullName(text)}
      />


      <Text style={MYSTYLE.title13} > Enter your age:</Text>
      <TextInput
        style={MYSTYLE.input}
        placeholder=" Age "
        keyboardType="number-pad"
        onChangeText={(text) => setAge(text)}
      />


      <Text style={MYSTYLE.title13}> Enter your e-mail address:</Text>
      <TextInput
        style={MYSTYLE.input}
        placeholder="e-mail"
        onChangeText={(text) => setEmail(text)}
      />


      <Text style={MYSTYLE.title13}> Enter your phone number:</Text>
      <TextInput
        style={MYSTYLE.input}
        placeholder="phone number "
        keyboardType="number-pad"
        onChangeText={(text) => setPhoneNumber(text)}
      />


      <Text style={MYSTYLE.title13}> Enter your city and country:</Text>
      <TextInput
        style={MYSTYLE.input}
        placeholder="city And Country"
        onChangeText={(text) => setCityAndCountry(text)}
      />

      <Text style={MYSTYLE.title13}> Enter your street and house:</Text>
      <TextInput
        style={MYSTYLE.input}
        placeholder="street and house number"
        onChangeText={(text) => setStreetAndHouseNumber(text)}
      />


      <Text style={MYSTYLE.title13}> Enter your card holder Name:</Text>
      <TextInput
        style={MYSTYLE.input}
        placeholder="Card holder Name"
        onChangeText={(text) => setHolderName(text)}
      />

      <Text style={MYSTYLE.title13}> Enter your card number:</Text>
      <TextInput
        style={MYSTYLE.input}
        placeholder="Card Number"
        keyboardType="number-pad"
        onChangeText={(text) => setCardNumber(text)}
      />


      <Text style={MYSTYLE.title13}> Enter your expiration Date:</Text>
      <View style={{flexDirection:'row'}}>
          <TextInput
            style={[MYSTYLE.inputtokef1]}
            placeholder="Day"
            keyboardType="number-pad"
            onChangeText={(text) => setExpiration1(text)}
          />
        <Text style={[MYSTYLE.title13,{textDecorationLine:"none"}]}>/</Text>
          <TextInput
            style={[MYSTYLE.inputtokef2]}
            placeholder="Mounth"
            keyboardType="number-pad"
            onChangeText={(text) => setExpiration2(text)}
          />
      </View>

      <Text style={MYSTYLE.title13}> Security Code - CVV:</Text>
      <TextInput
        style={MYSTYLE.input}
        placeholder="Security Code - CVV"
        keyboardType="number-pad"
        onChangeText={(text) => setCvv(text)}
      />




      <ValidCheck
        fullName={fullName}
        age={age}
        email={email}
        phoneNumber={phoneNumber}
        cityAndCountry={cityAndCountry}
        streetAndHouseNumber={streetAndHouseNumber}
        holderName={holderName}
        cardNumber={cardNumber}
        expiration1={expiration1}
        expiration2={expiration2}
        cvv={cvv}
        navigation={() => navigation.replace("Goodbye")}
      />

    </ScrollView>



  );
};


