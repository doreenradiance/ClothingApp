import React from "react"
import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native';

function WelcomePage({ navigation }) {



    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => {
                    navigation.navigate("Home")
                }}>
            <Image source={require('../../assets/logo.jpeg')}
             style={{ height: 300, width: "100%", marginTop: 50 }}
             />
             </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
// backgroundColor: "#9c8035",
// alignItems: 'center',
justifyContent: "space-around"
}
})

export default WelcomePage;