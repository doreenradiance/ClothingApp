import React from "react"
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

function HomePage({ navigation }) {



    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                <Image source={require('../../assets/logo.jpeg')} style={{ height: 60, width: 60, }} />
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Home</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Profile")
                    }}
                >
                    <Image source={require('../../assets/DP.jpg')} style={{ height: 60, width: 60, borderRadius: 40 }} />
                </TouchableOpacity>
            </View>

            <Text style={{ backgroundColor: "#d6d4ce", height: 1, marginTop: 5 }}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#9c8035",
        // alignItems: 'center',
        // justifyContent: "space-around"
    }
})

export default HomePage;