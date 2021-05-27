import React from "react"
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';

function HomePage({ navigation }) {



    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Welcome")
                }}>
                    <Image source={require('../../assets/logo.jpeg')} style={{ height: 40, width: 40, }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Home</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Profile")
                    }}
                >
                    <Image source={require('../../assets/DP.jpg')} style={{ height: 40, width: 40, borderRadius: 20 }} />
                </TouchableOpacity>
            </View>

            <Text style={{ backgroundColor: "#d6d4ce", height: 1, marginTop: 5 }}></Text>

            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Detailed")
                        }}
                    >
                        <Image source={require('../../assets/dress.jpg')} style={{ height: 100, width: 90, marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Dress</Text>
                        <Text>Ghc 25.00</Text>
                        <Text style={{ color:"white",backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20,textAlign: "center" }}>Shop Now</Text>
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
                        <Text style={{ color:"white",backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20, textAlign: "center" }}>Shop Now</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ backgroundColor: "#d6d4ce", height: 1,marginTop:10 }}></Text>


                <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Detailed")
                        }}
                    >
                        <Image source={require('../../assets/womentrouser.jpg')} style={{ height: 100, width: 90, marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Trouser</Text>
                        <Text>Ghc 65.00</Text>
                        <Text style={{color:"white", backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20, textAlign: "center" }}>Shop Now</Text>
                    </TouchableOpacity>

                    <Text style={{ backgroundColor: "#d6d4ce", width: 1, height: "100%" }}></Text>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Detailed")
                        }}
                    >
                        <Image source={require('../../assets/womenskirt.jpg')} style={{ height: 100, width: 90, marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Skirt</Text>
                        <Text>Ghc 20.00</Text>
                        <Text style={{ color:"white",backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20, textAlign: "center" }}>Shop Now</Text>
                        </TouchableOpacity>
                        
                </View>
                <Text style={{ backgroundColor: "#d6d4ce", height: 1,marginTop:10 }}></Text>

                <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Detailed")
                        }}
                    >
                        <Image source={require('../../assets/womenblouse.jpg')} style={{ height: 100, width: 90, marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Blouse</Text>
                        <Text>Ghc 65.00</Text>
                        <Text style={{color:"white", backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20, textAlign: "center" }}>Shop Now</Text>
                    </TouchableOpacity>

                    <Text style={{ backgroundColor: "#d6d4ce", width: 1, height: "100%" }}></Text>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Detailed")
                        }}
                    >
                        <Image source={require('../../assets/tanktop.jpg')} style={{ height: 100, width: 90, marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tank Top</Text>
                        <Text>Ghc 20.00</Text>
                        <Text style={{ color:"white",backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20, textAlign: "center" }}>Shop Now</Text>
                        </TouchableOpacity>
                        
                </View>
                <Text style={{ backgroundColor: "#d6d4ce", height: 1, marginTop:10}}></Text>

                <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Detailed")
                        }}
                    >
                        <Image source={require('../../assets/womenhoodie.jpg')} style={{ height: 100, width: 90, marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Hoodie</Text>
                        <Text>Ghc 65.00</Text>
                        <Text style={{color:"white", backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20, textAlign: "center" }}>Shop Now</Text>
                    </TouchableOpacity>

                    <Text style={{ backgroundColor: "#d6d4ce", width: 1, height: "100%" }}></Text>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Detailed")
                        }}
                    >
                        <Image source={require('../../assets/womenjeans.jpg')} style={{ height: 100, width: 90, marginTop: 20 }} />
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Jeans Top</Text>
                        <Text>Ghc 20.00</Text>
                        <Text style={{ color:"white",backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20, textAlign: "center" }}>Shop Now</Text>
                        </TouchableOpacity>
                        
                </View>
                <Text style={{ backgroundColor: "#d6d4ce", height: 1,marginTop:10 }}></Text>

                
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