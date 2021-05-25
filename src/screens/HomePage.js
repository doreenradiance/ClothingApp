import React from "react"
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';

function HomePage({ navigation }) {



    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
            <TouchableOpacity  onPress={() => {
                    navigation.navigate("Welcome")
                }}>
                <Image source={require('../../assets/logo.jpeg')} style={{ height: 60, width: 60, }} />
                </TouchableOpacity>
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

            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                    <View>
                        <Image source={require('../../assets/dress.jpg')} style={{ height: 180, width: 150,marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Dress</Text>
                        <Text>Ghc 25.00</Text>
                    </View>

                    <Text style={{ backgroundColor: "#d6d4ce", width: 1, height:"100%" }}></Text>

                    <View>
                        <Image source={require('../../assets/ligerie.jpg')} style={{ height: 180, width: 150,marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Ligerie</Text>
                        <Text>Ghc 100.00</Text>
                    </View>
                </View>

                <Text style={{ backgroundColor: "#d6d4ce", height: 1, }}></Text>
            
                <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                    <View>
                        <Image source={require('../../assets/tanktop.jpg')} style={{ height: 180, width: 150,marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tank Top</Text>
                        <Text>Ghc 25.00</Text>
                    </View>

                    <Text style={{ backgroundColor: "#d6d4ce", width: 1, height:"100%" }}></Text>

                    <View>
                        <Image source={require('../../assets/womenblouse.jpg')} style={{ height: 180, width: 150,marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Women Blouse</Text>
                        <Text>Ghc 30.00</Text>
                    </View>
                </View>
                <Text style={{ backgroundColor: "#d6d4ce", height: 1, }}></Text>

                <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                    <View>
                        <Image source={require('../../assets/womentrouser.jpg')} style={{ height: 180, width: 150,marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Trouser</Text>
                        <Text>Ghc 65.00</Text>
                    </View>

                    <Text style={{ backgroundColor: "#d6d4ce", width: 1, height:"100%" }}></Text>

                    <View>
                        <Image source={require('../../assets/womenskirt.jpg')} style={{ height: 180, width: 150,marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Skirt</Text>
                        <Text>Ghc 20.00</Text>
                    </View>
                </View>
            </ScrollView>
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