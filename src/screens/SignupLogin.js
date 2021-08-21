import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity, } from 'react-native-gesture-handler';

function SignupLogin({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ alignSelf: "center", fontSize: 20, fontStyle: "italic" }}>Signup or login to purchase or order.</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 70 }}>

                <View style={styles.signupTextButton}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Signup")
                        }}
                    >
                        <Text style={{ fontSize: 18, alignSelf: "center", color: "white", marginTop: 12 }}>Signup</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.loginTextButton}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Login")
                        }}
                    >
                        <Text style={{color:"#a83256",alignSelf:"center", marginTop:15}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // flexDirection: "row",
        // justifyContent: "space-evenly",
    },

    header: {
        backgroundColor: "#a83256",
        height: 80,
        width: "100%",
        flex: 0.6,
        justifyContent: "space-around"
    },
    signupTextButton: {
        backgroundColor: "#a83256",
        height: 50,
        width: 250,
        textAlign: "center",
        borderRadius: 4,
    },
    loginTextButton: {
        backgroundColor: "white",
        height: 50,
        width: 250,
        textAlign: "center",
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#a83256",
        marginTop: 50
    },
})

export default SignupLogin;


