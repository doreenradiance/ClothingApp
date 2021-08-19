import React from "react"
import { StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from 'react-native';
import SingleType from "../components/SingleType";


const HomePage = ({ navigation }) => {
    DressTypes = [
        {
            image: require('../../assets/dress.jpg'),
            type: "Dress",
            price: "Ghc 25.00",
            button: "Shop Now",
        },

        {
            image: require('../../assets/ligerie.jpg'),
            type: "Ligerie",
            price: "Ghc 100.00",
            button: "Shop Now",
        },

        {
            image: require('../../assets/womentrouser.jpg'),
            type: "Trouser",
            price: "Ghc 50.00",
            button: "Shop Now",
        },

        {
            image: require('../../assets/womenskirt.jpg'),
            type: "Skirt",
            price: "Ghc 40.00",
            button: "Shop Now",
        },
        {
            image: require('../../assets/womenblouse.jpg'),
            type: "Blouse",
            price: "Ghc 50.00",
            button: "Shop Now",
        },
        {
            image: require('../../assets/tanktop.jpg'),
            type: "Tank Top",
            price: "Ghc 30.00",
            button: "Shop Now",
        },
        {
            image: require('../../assets/womenhoodie.jpg'),
            type: "Hoodie",
            price: "Ghc 80.00",
            button: "Shop Now",
        },
        {
            image: require('../../assets/womenjeans.jpg'),
            type: "Jeans Top",
            price: "Ghc 50.00",
            button: "Shop Now",
        },

    ]


    return (
        <View style={styles.mainContainer}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                
                    <Image source={require('../../assets/logo.jpeg')} style={{ height: 40, width: 40, }} />
    
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Home</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Profile")
                    }}
                >
                    <Image source={require('../../assets/DP.jpg')} style={{ height: 40, width: 40, borderRadius: 20 }} />
                </TouchableOpacity>
            </View>

            <Text style={{ backgroundColor: "#d6d4ce", height: 2, marginTop: 5 }}></Text>


            <FlatList
                numColumns={2}
                data={DressTypes}
                renderItem={({ item, index }) => {
                    return <SingleType
                        image={item.image}
                        type={item.type}
                        price={item.price}
                        button={item.button}
                        navigation={navigation}
                        index={index}
                    />
                }}
                
                ItemSeparatorComponent={()=>{
                    return <View style={{ backgroundColor: "#d6d4ce", width: '100%', height:2, flex:1  }}></View>
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

    },
    // container: {
    //     flexDirection: "row",
    //     justifyContent: "space-around",
    // }
})

export default HomePage;