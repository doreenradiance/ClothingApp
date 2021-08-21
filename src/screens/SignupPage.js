import React from 'react'
import { View, Text, Image, Label, TextInput,StyleSheet } from "react-native"


function SignupPage() {
    return (
        <View>
            <Text style={{alignSelf:"center", marginTop:20,fontSize:30}}>Sign Up</Text>
            <Image source={require('../../assets/signup.jpg')}  style={{height:150, width:"100%"}} />
            <Text>Email</Text>
            <TextInput style={styles.input}
                placeholderTextColor="#aaaaaa"
                placeholder="Email"
                // value={email}
                // onChangeText={email => setEmail(email)} 
                />
            <View style={{ backgroundColor: "#d6d4ce", height: 2, marginTop: 5 }}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        // flexDirection: "row",
        // justifyContent: "center",
        
    },
    inputs: {
        // marginTop: 70,
        alignSelf: "flex-start",
        marginLeft: 10,
    },
})

export default SignupPage