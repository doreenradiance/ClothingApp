import React from "react"
import { StyleSheet, Text, Image, View, TouchableOpacity, Button, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


function DetailedPage(
    { route, navigation, type, price, image, button }
) {
    let DressTypes = route.params;

    return (

        <View style={styles.container}>
            <View style={{ flexDirection: "row",  justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Home", { image, type, price, button })
                }}>
                    <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Checkout</Text>
            </View>
            <Text style={{ backgroundColor: "#d6d4ce", height: 2, }}></Text>
            <View>
                <Image source={DressTypes.image}
                    style={{ height: 250, width: 200, alignSelf: "center" }} />
                <Text style={{ fontWeight: "bold", fontSize: 20, alignSelf: "center" }}>{DressTypes.type}</Text>
                <Text style={{ fontSize: 20, alignSelf: "center"}}>{DressTypes.price}</Text>
            </View>
            <View>
                <View style={{ marginHorizontal:10}}>

                        <Button style={{  }}
                        onPress={() => Alert.alert("Paid")
                        }
                        title="Proceed to pay"
                        color="#a83256"
                        ></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-evenly"
    }
})

export default DetailedPage;