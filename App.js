import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import WelcomePage from "./src/screens/WelcomePage";
import HomePage from "./src/screens/HomePage";
import DetailedPage from "./src/screens/DetailedPage";
import ProfilePage from "./src/screens/ProfilePage";

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          options={{
            header: () => null
          }}
          name="Welcome" component={WelcomePage}
        />

         <Stack.Screen
          options={{
            header: () => null
          }}
          name="Home" component={HomePage}
        />

        {/* <Stack.Screen
          options={{
            header: () => null
          }}
          name="Detailed" component={DetailedPage}
        /> */}

        <Stack.Screen
          options={{
            header: () => null
          }}
          name="Profile" component={ProfilePage}
        /> 
      </Stack.Navigator>


    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
  // },
// });
