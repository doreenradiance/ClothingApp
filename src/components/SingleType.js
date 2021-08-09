import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

function SingleType({ image, type, price, button, navigation, index }) {
    return (

        <View  style={[styles.container, index%2===0 && { borderRightColor: "#d6d4ce", borderRightWidth: 2,  }]}>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Detailed", { image, type, price, button })
                    }}
                    style={{ maxWidth: 100, minWidth: 100 }}
                >
                    <Image source={image} style={{ height: 120, width: 100, marginTop: 20 }} />
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{type}</Text>
                    <Text>{price}</Text>
                    <Text style={{ color: "white",marginBottom:10, backgroundColor: "#6788f0", borderRadius: 10, width: 90, height: 22, textAlign: "center" }}>{button}</Text>
                </TouchableOpacity>
                {/* <Text style={{ backgroundColor: "#d6d4ce", width: 2,  }}></Text>  */}
            </View>
         
        {/* <Text style={{ backgroundColor: "#d6d4ce", height: 2,  }}></Text> */}
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        justifyContent: "center",
        
    }
})

export default SingleType;