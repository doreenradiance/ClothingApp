import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity,ScrollView } from 'react-native-gesture-handler'

function SingleType({ navigation }) {
    return (

        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Detailed")
                    }}
                >
                    <Image source={require('../../assets/dress.jpg')} style={{ height: 100, width: 90, marginTop: 20 }} />
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Dress</Text>
                    <Text>Ghc 25.00</Text>
                    <Text style={{ color: "white", backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20, textAlign: "center" }}>Shop Now</Text>
                </TouchableOpacity>

                <Text style={{ backgroundColor: "#d6d4ce", width: 1, height: "100%" }}></Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Detailed")
                    }}
                >
                    <Image source={require('../../assets/ligerie.jpg')} style={{ height: 100, width: 90, marginTop: 20 }} />
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Ligerie</Text>
                    <Text>Ghc 100.00</Text>
                    <Text style={{ color: "white", backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20, textAlign: "center" }}>Shop Now</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ backgroundColor: "#d6d4ce", height: 1, marginTop: 10 }}></Text>
        </ScrollView>


    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
})

export default SingleType;