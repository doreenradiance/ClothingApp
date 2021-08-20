import React, { Component } from 'react'
import { View,Image,Label, TextInput,StyleSheet } from 'react-native'

class SignupPage extends Component {
    render() {
        return (
           <View>
               <Text>Sign Up</Text>
               <Image source={require('../../assets/signup.jpg')}/>
               <Label>Email</Label>
               <TextInput></TextInput>
               <View style={{ backgroundColor: "#d6d4ce", height: 2, marginTop: 5 }}></View>
           </View>
        )
    }
}

export default SignupPage
