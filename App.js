import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from "./src/screens/HomePage";
import DetailedPage from "./src/screens/DetailedPage";
import ProfilePage from "./src/screens/ProfilePage";
import SingleType from './src/components/SingleType';
import SignupLogin from "./src/screens/SignupLogin";
import SignupPage from "./src/screens/SignupPage";
import LoginPage from "./src/screens/LoginPage"


const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          options={{
            header: () => null
          }}
          name="Home" component={HomePage}
        />

        <Stack.Screen
          options={{
            header: () => null
          }}
          name="Detailed" component={DetailedPage}
        />

        <Stack.Screen
          options={{
            header: () => null
          }}
          name="Profile" component={ProfilePage}
        />

        <Stack.Screen
          options={{
            header: () => null
          }}
          name="Type" component={SingleType}
        />

        <Stack.Screen
          options={{
            header: () => null
          }}
          name="SignupLogin" component={SignupLogin}
        />

        <Stack.Screen
          options={{
            title: "SIGN UP",
            headerStyle: {
              backgroundColor: "#a83256"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",}}
          name="Signup" component={SignupPage}
        />

        <Stack.Screen
          options={{
            header: () => null
          }}
          name="Login" component={LoginPage}
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
