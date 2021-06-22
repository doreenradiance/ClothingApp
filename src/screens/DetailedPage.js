import React from "react"
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function DetailedPage(
    { route, navigation, type, price, image,button }
) {
    let DressTypes = route.params;

    return (

        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginTop: 50, justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Home",)
                }}>
                    <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 35, fontWeight: "bold" }}>Checkout</Text>
            </View>
            <Text style={{ backgroundColor: "#d6d4ce", height: 1, }}></Text>
            <View>
                <Image source={DressTypes.image}
                    style={{ height: 250, width: 200, marginTop: 30, }} />
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>hello</Text>
                <Text>{price}</Text>
            </View>
            <Text style={{ backgroundColor: "#d6d4ce", height: 1, marginTop: 10 }}></Text>
            <View>
            <View style={{ marginLeft: 30, }}>
        //         <Text style={{color:"white", backgroundColor: "#db4460", height: 40, width: 300, borderRadius: 30, textAlign: "center" }}>Proceed to pay</Text>
        //     </View>
            </View>
        </View>

        // <View style={styles.container}>
        //    

        //     <Text style={{ backgroundColor: "#d6d4ce", height: 1, }}></Text>

        //     <Text style={{ backgroundColor: "#d6d4ce", height: 1, marginTop: 10 }}></Text>
        //     <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10, marginLeft: 10 }}>Price Details</Text>

        //     <View style={{ marginLeft: 10 }}>
        //         <View style={{ flexDirection: "row" }}>
        //             <Text style={{ fontSize: 20 }}>Item Total</Text>
        //             <Text style={{ alignSelf: "center", justifyContent: "space-between" }}>GHC 25.00</Text>
        //         </View>
        //         <View style={{ flexDirection: "row" }}>
        //             <Text style={{ fontSize: 20 }}>Delivery Charges</Text>
        //             <Text style={{ alignSelf: "center", justifyContent: "space-between" }}>GHC 15.00</Text>
        //         </View>
        //         <View style={{ flexDirection: "row" }}>
        //             <Text style={{ fontSize: 20 }}>Tax</Text>
        //             <Text style={{ alignSelf: "center", justifyContent: "space-between" }}>GHC 2.00</Text>
        //         </View>
        //         <Text style={{ backgroundColor: "#d6d4ce", height: 1, marginTop: 10 }}></Text>
        //         <View style={{ flexDirection: "row" }}>
        //             <Text style={{ fontSize: 20 }}>Total Amount</Text>
        //             <Text style={{ alignSelf: "center", justifyContent: "space-between" }}>GHC 42.00</Text>
        //         </View>
        //         <Text style={{ backgroundColor: "#d6d4ce", height: 1, marginTop: 10 }}></Text>
        //     </View>

        //     <View style={{ marginLeft: 30, }}>
        //         <Text style={{ backgroundColor: "#db4460", height: 40, width: 300, borderRadius: 30, textAlign: "center" }}>Proceed to pay</Text>
        //     </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default DetailedPage;