import React from "react"
import { StyleSheet, Text, Image, View, TouchableOpacity, Button, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


function DetailedPage(
    { route, navigation, type, price, image, button }
) {
    let DressTypes = route.params;

    return (

        <View style={styles.container}>
            
            <View style={{ flexDirection: "row",  justifyContent: 'space-around',marginTop:60,height:50 }}>
                <TouchableOpacity style={{marginTop:10}} onPress={() => {
                    navigation.navigate("Home", { image, type, price, button })
                }}>
                    <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Checkout</Text>
            </View>
            <View style={{ backgroundColor: "#d6d4ce", height: 2,marginTop:20}}></View>
            <View style= {{marginTop:50}}>
                <Image source={DressTypes.image}
                    style={{ height: 250, width: 200, alignSelf: "center" }} />
                <Text style={{ fontWeight: "bold", fontSize: 20, alignSelf: "center",marginTop:30 }}>{DressTypes.type}</Text>
                <Text style={{ fontSize: 20, alignSelf: "center",marginTop:20 }}>{DressTypes.price}</Text>
            </View>
            <View style={{ marginTop:30}}>
                <View style={{ marginHorizontal:15}}>


                        <Button style={{  }}
                        onPress={() => navigate.navigate("Signup")
                            // Alert.alert("Paid")
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
        // justifyContent:"space-around"
    }
})

export default DetailedPage;