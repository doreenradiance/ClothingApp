import React from "react"
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';

function ProfilePage({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginTop: 50, justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Home")
                }}>
                    <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 35, fontWeight: "bold" }}>Profile</Text>
            </View>

            <Text style={{ backgroundColor: "#d6d4ce", height: 2, marginTop:10}}></Text>

            <View style={{ alignItems: 'center', }}>
                <Image source={require('../../assets/DP.jpg')}
                    style={{ height: 80, width: 80, borderRadius: 40, marginTop: 35 }} />
                <Text style={{ fontWeight: "bold", fontSize: 30 }}>Doreen Mensah</Text>
                <Text style={{ fontSize: 20 }}>CEO</Text>
            </View>

            <View style={{ marginLeft: 30 }}>
                <Image source={require('../../assets/WhatsappIcon.jpg')}
                    style={{ height: 50, width: 50, marginTop: 20 }} />
                <Image source={require('../../assets/IGIcon.png')}
                    style={{ height: 50, width: 50, marginTop: 20 }} />
                <Image source={require('../../assets/SnapIcon.jpg')}
                    style={{ height: 50, width: 50, marginTop: 20 }} />
            </View>

            <View style={{ flexDirection: "row", justifyContent: "flex-start", marginLeft: 30, marginTop: 30 }}>
                <Feather name="phone" size={24} color="black" />
                <Text style={{ marginLeft: 30 }}>+233 548912650</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", marginLeft: 30, marginTop: 30 }}>
                <MaterialCommunityIcons name="email-variant" size={24} color="black" />
                <Text style={{ marginLeft: 30 }}>doreenradiance@gmail.com</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", marginLeft: 30, marginTop: 30 }}>
                <SimpleLineIcons name="location-pin" size={24} color="black" />
                <Text style={{ marginLeft: 30 }}>Mataheko-Dansoman</Text>
            </View>
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

export default ProfilePage;