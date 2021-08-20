import React from 'react'
import { View,Image,Label, TextInput, Text} from 'react-native'

function SignupPage() {
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

export default SignupPage


// class SignupPage extends Component ({navigation}){
//     render() {
//         return (
//            <View>
//                <Text>Sign Up</Text>
//                <Image source={require('../../assets/signup.jpg')}/>
//                <Label>Email</Label>
//                <TextInput></TextInput>
//                <View style={{ backgroundColor: "#d6d4ce", height: 2, marginTop: 5 }}></View>
//            </View>
//         )
//     }
// }

// export default SignupPage
