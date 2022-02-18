import React, { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { global } from "../App";
import { MYSTYLE } from "../assets/styleFile";


export default function ValidCheck(props) {

    const { list, add, remove, reset } = useContext(global);

    const
        fullName = props.fullName,
        age = props.age,
        email = props.email,
        phoneNumber = props.phoneNumber,
        cityAndCountry = props.cityAndCountry,
        streetAndHouseNumber = props.streetAndHouseNumber,
        holderName = props.holderName,
        cardNumber = props.cardNumber,
        expiration1 = props.expiration1,
        expiration2 = props.expiration2,
        cvv = props.cvv



    function checkIfValid() {
        let flag = true;


        //check if the user has left empty places
        if (fullName == '' || email == '' || phoneNumber == -1 ||
            age == -1 ||  holderName == '' || cardNumber == -1 ||
            expiration1 == -1 ||  expiration2 == -1 || cvv == -1) {
            alert("Something is missing, you need to fill all the fields");
            return false;
        }

        flag = true;
        // Full name
        
        if (fullName.includes(String.fromCharCode(32))) {
            for (let i = 0; i < 32; i++) {
                if (fullName.includes(String.fromCharCode(i))) {
                    alert("Invalid name");
                    flag = false;
                    return false;
                }
            }
            if (flag != false) {
                for (let i = 33; i < 65; i++) {
                    if (fullName.includes(String.fromCharCode(i))) {
                        alert("Invalid name");
                        flag = false;
                        return false;
                    }
                }

                for (let i = 91; i < 97; i++) {
                    if (fullName.includes(String.fromCharCode(i))) {
                        alert("Invalid name");
                        flag = false;
                        return false;
                    }
                }

                for (let i = 123; i <= 127; i++) {
                    if (fullName.includes(String.fromCharCode(i))) {
                        alert("Invalid name");
                        flag = false;
                        return false;
                    }
                }
            }
        }else{
            alert("Invalid name");
            return false;
        }

   
        // age

        let tempAge = '' + age;
        if (age < 0 || age > 120) {
            alert("Invalid age")
            return false;
        }
        else {
            for (let i = 0; i < 48; i++) {
                if (tempAge.includes(String.fromCharCode(i))) {
                    alert("Invalid age");
                    return false;
                }
            }

            for (let i = 58; i <= 127; i++) {
                if (tempAge.includes(String.fromCharCode(i))) {
                    alert("Invalid age");
                    return false;
                }
            }
        }


        // email
        let domain = ['.com', '.co.il', '.net', '.org'];

        let cou2=0
        let cou3=0
        for (let index = 0; index < email.length; index++) {
            if(email[index]==String.fromCharCode(64)){
                cou2++
            }
            
        }
        for (let index = 0; index < domain.length; index++) {
            if(email.includes(domain[index])){
                cou3++
            }
            
        }
        if(cou2==1 && cou3==1){
            flag= true
        }
        else{
            alert("invalid e-mail")
            return false;
        }



        // phoneNumber
        let tempp2 = phoneNumber;
        let tempPhone = '' + phoneNumber;

        if (tempPhone === 16) {
            while (tempp2 > 0) {
                if (tempp2 % 10 > 0 && tempp2 % 10 < 9) {
                    tempp2 = tempp2 / 10;
                }
                else {
                    alert("invalid phoneNumber")
                    return false;
                }
            }
            alert("invalid phoneNumber")
            return false
        }

        for (let i = 0; i < 45; i++) {
            if (tempPhone.includes(String.fromCharCode(i))) {
                alert("invalid phoneNumber")
                return false
            }
        }
        for (let i = 46; i <= 47; i++) {
            if (tempPhone.includes(String.fromCharCode(i))) {
                alert("invalid phoneNumber")
                return false
            }
        }

        for (let i = 58; i < 127; i++) {
            if (tempPhone.includes(String.fromCharCode(i))) {
                alert("invalid phoneNumber")
                return false
            }
        }
        if(tempPhone.length!= 10){
            alert("invalid phoneNumber")
            flag=false
            return false
        }



        //cityAndCountry

        if (flag != false) {
            for (let i = 0; i < 32; i++) {
                if (cityAndCountry.includes(String.fromCharCode(i))) {
                    alert("Invalid city And Country");
                    flag = false;
                    return false;
                }
            }
        }
        else if (flag != false) {
            for (let i = 33; i < 45; i++) {
                if (cityAndCountry.includes(String.fromCharCode(i))) {
                    alert("Invalid city And Country");
                    flag = false;
                    return false;
                }
            }
        }
        else if (flag != false) {
            for (let i = 46; i < 65; i++) {
                if (cityAndCountry.includes(String.fromCharCode(i))) {
                    alert("Invalid city And Country");
                    flag = false;
                    return false;
                }
            }
        }
        else if (flag != false) {
            for (let i = 91; i < 97; i++) {
                if (cityAndCountry.includes(String.fromCharCode(i))) {
                    alert("Invalid city And Country");
                    flag = false;
                    return false;
                }
            }
        }

        else if (flag != false) {
            for (let i = 123; i <= 127; i++) {
                if (cityAndCountry.includes(String.fromCharCode(i))) {
                    alert("Invalid city And Country");
                    flag = false;
                    return false;
                }
            }
        }



        //streetAndHouseNumber
        if (flag != false) {
            for (let i = 0; i < 32; i++) {
                if (streetAndHouseNumber.includes(String.fromCharCode(i))) {
                    alert("Invalid city And Country");
                    flag = false;
                    return false;
                }
            }
        }
        else if (flag != false) {
            for (let i = 33; i < 47; i++) {
                if (streetAndHouseNumber.includes(String.fromCharCode(i))) {
                    alert("Invalid city And Country");
                    flag = false;
                    return false;
                }
            }
        }
        else if (flag != false) {
            for (let i = 58; i < 65; i++) {
                if (streetAndHouseNumber.includes(String.fromCharCode(i))) {
                    alert("Invalid city And Country");
                    flag = false;
                    return false;
                }
            }
        }
        else if (flag != false) {
            for (let i = 91; i < 97; i++) {
                if (streetAndHouseNumber.includes(String.fromCharCode(i))) {
                    alert("Invalid city And Country");
                    flag = false;
                    return false;
                }
            }
        }

        else if (flag != false) {
            for (let i = 123; i <= 127; i++) {
                if (streetAndHouseNumber.includes(String.fromCharCode(i))) {
                    alert("Invalid city And Country");
                    flag = false;
                    return false;
                }
            }
        }


        // Holder name
        flag = true;
        if (holderName.includes(String.fromCharCode(32))) {
            for (let i = 0; i < 32; i++) {
                if (holderName.includes(String.fromCharCode(i))) {
                    alert("Invalid holde name");
                    flag = false;
                    return false;
                }
            }
            if (flag != false) {
                for (let i = 33; i < 65; i++) {
                    if (holderName.includes(String.fromCharCode(i))) {
                        alert("Invalid holde name");
                        flag = false;
                        return false;
                    }
                }

                for (let i = 91; i < 97; i++) {
                    if (holderName.includes(String.fromCharCode(i))) {
                        alert("Invalid holde name");
                        flag = false;
                        return false;
                    }
                }

                for (let i = 123; i <= 127; i++) {
                    if (holderName.includes(String.fromCharCode(i))) {
                        alert("Invalid holde name");
                        flag = false;
                        return false;
                    }
                }
            }
        }else{
            alert("Invalid holde name");
            return false;
        }


        let temp2 = cardNumber;
        let tempSteCard = cardNumber;
        

        for (let i = 0; i < 48; i++) {
            if (tempSteCard.includes(String.fromCharCode(i))) {
                alert("Invalid card Number");
                return false;
            }
        }

        for (let i = 58; i <= 127; i++) {
            if (tempSteCard.includes(String.fromCharCode(i))) {
                alert("Invalid card Number");
                return false;
            }
        }

       

        if (tempSteCard.length != 16) {
    
            alert("invalid card number")
            return false
        }

             

        //expiration ------------------ to do

        // day:

        let tempday = '' + expiration1;
        if (expiration1 < 1 || expiration1 > 31) {
            alert("Invalid day")
            return false;
        }
        else {
            for (let i = 0; i < 48; i++) {
                if (tempday.includes(String.fromCharCode(i))) {
                    alert("Invalid day");
                    return false;
                }
            }

            for (let i = 58; i <= 127; i++) {
                if (tempday.includes(String.fromCharCode(i))) {
                    alert("Invalid day");
                    return false;
                }
            }
        }




        // month:
        let tempmonth = '' + expiration2;
        if (expiration2 < 1 || expiration2 > 13) {
            alert("Invalid month")
            return false;
        }
        else {
            for (let i = 0; i < 48; i++) {
                if (tempmonth.includes(String.fromCharCode(i))) {
                    alert("Invalid month");
                    return false;
                }
            }

            for (let i = 58; i <= 127; i++) {
                if (tempmonth.includes(String.fromCharCode(i))) {
                    alert("Invalid month");
                    return false;
                }
            }
        }


        // CVV
        let tempcvv2 = cvv;
        let tempcvv = '' + cvv;

        if (tempcvv === 3) {
            while (tempcvv2 > 0) {
                if (tempcvv2 % 10 > 0 && tempcvv2 % 10 < 9) {
                    tempcvv2 = tempcvv2 / 10;
                }
                else {
                    alert("invalid cvv")
                    return false;
                }
            }
            alert("invalid cvv")
            return false
        }

        for (let i = 0; i < 45; i++) {
            if (tempcvv.includes(String.fromCharCode(i))) {
                alert("invalid cvv")
                return false
            }
        }
        for (let i = 46; i <= 47; i++) {
            if (tempcvv.includes(String.fromCharCode(i))) {
                alert("invalid cvv")
                return false
            }
        }

        for (let i = 58; i < 127; i++) {
            if (tempcvv.includes(String.fromCharCode(i))) {
                alert("invalid cvv")
                return false
            }
        }
        if(tempcvv.length!= 3){
            alert("invalid cvv")
            flag=false
            return false
        }

        return true
    }


    const checkIfTrue = () => {
        if (checkIfValid()) {
            reset()
            props.navigation()
        }

    }

    return (
        <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => { checkIfTrue() }} style={MYSTYLE.button3}>
                <Text style={MYSTYLE.text4}>Send</Text>
            </TouchableOpacity>
        </View>
    )



}