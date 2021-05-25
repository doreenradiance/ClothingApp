import React from "react"

function WelcomePage({ navigation }) {



    return (
        <View style={styles.container}>
            <View>
            <Image source={require('../../assets/logo.jpeg')}
            //  style={{ height: 80, width: 80, marginTop: 50 }}
             />
            </View>
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