import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
// import { dispatcher, createEmailAccount } from '../redux/actions/authActions';



function SignupPage() {

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const onSignup = () => {
    //     createEmailAccount(email, password, () => {
    //         navigation.navigate("Profile")
    //     })
    // }

    return (
        <View>
            <Image source={require('../../assets/signup.jpg')} style={{ height: 180, width: "100%" }} />

            <View>
                <View style={{ marginTop: 20 }}>
                    <Text>Full Name</Text>
                    <TextInput style={styles.inputs}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Full Name"
                    // value={contact}
                    />
                </View>
                <View style={{ backgroundColor: "#d6d4ce", height: 2, marginTop: 5 }}></View>


                <View style={{ marginTop: 30}}>
                    <Text>Email</Text>
                    <TextInput style={styles.inputs}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Email"
                    // value={email}
                    // onChangeText={email => setEmail(email)} 
                    />
                </View>
                <View style={{ backgroundColor: "#d6d4ce", height: 2, marginTop: 5 }}></View>

                <View style={{ marginTop: 30 }}>
                    <Text>Contact</Text>
                    <TextInput style={styles.inputs}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Contact"
                    // value={contact}
                    />
                </View>
                <View style={{ backgroundColor: "#d6d4ce", height: 2, marginTop: 5 }}></View>

                <View style={{ marginTop: 30 }}>
                    <Text>Location</Text>
                    <TextInput style={styles.inputs}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Location"
                    // value={location}
                    />
                </View>
                <View style={{ backgroundColor: "#d6d4ce", height: 2, marginTop: 5 }}></View>

                <View style={{alignSelf:"center"}}>
                    <TouchableOpacity
                        // disabled={!email || !password}
                        // onPress={() => { onSignup() }}
                        style={styles.signupTextButton}>
                        <Text style={styles.signupText}>Sign up</Text>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <Text>Don't have an account?</Text>
                        <Text
                            style={{ color: "#a83256", marginLeft: 5 }}
                            onPress={() => navigation.navigate("Login")}
                        >Login</Text>
                    </View>
                </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "row",
        justifyContent: "space-around",

    },
    header: {
        backgroundColor: "#a83256",
        height: 80,
        flexDirection: "column",
        justifyContent: "space-around",
        // flex:0.5
    },
    icon: {
        marginTop: 10,
        // marginBottom:20,
        marginLeft: 40
    },
    inputs: {
        marginTop: 5,
        alignSelf: "flex-start",
        // marginLeft: 10,
    },
    signupTextButton: {
        backgroundColor: "#a83256",
        height: 40,
        width: 250,
        // textAlign: "center",
        borderRadius: 4,
        marginTop: 30
    },
    signupText: {
        color: "white",
        alignSelf: "center",
        marginTop: 5,
        fontSize: 20
    },
    footer: {
        flexDirection: "row",
        marginTop: 10,
        alignSelf:"center"
    }

})

export default SignupPage