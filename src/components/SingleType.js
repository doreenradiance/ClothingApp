import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity,ScrollView } from 'react-native-gesture-handler';

function SingleType ({image,type,price,button,navigation}) {
    return (

        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Detailed", {image,type,price,button})
                    }}
                >
                    <Image source={image} style={{ height: 120, width: 100, marginTop: 20 }} />
                    <Text  style={{ fontWeight: "bold", fontSize: 20 }}>{type}</Text>
                    <Text>{price}</Text>
                    <Text style={{ color: "white", backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20, textAlign: "center" }}>{button}</Text>
                </TouchableOpacity>

                {/* <Text style={{ backgroundColor: "#d6d4ce", width: 1, height: "100%" }}></Text> */}

                {/* <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Detailed",{image,type,price,button})
                    }}
                >
                    <Image source={image} style={{ height: 100, width: 90, marginTop: 20 }} />
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{type}</Text>
                    <Text>{price}</Text>
                    <Text style={{ color: "white", backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 20, textAlign: "center" }}>{button}</Text>
                </TouchableOpacity> */}
            </View>

            {/* <Text style={{ backgroundColor: "#d6d4ce", height: 1, marginTop: 10 }}></Text> */}
        </ScrollView>


    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
})

export default SingleType;