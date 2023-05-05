import React from "react";
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import SignIn from "../Screens/SignIn";
import WelcomeScreen from "../Screens/WelcomeScreen"
import Splash from "../Screens/Splash";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createStackNavigator()

export default function AuthStack (){
    return (
        <Stack.Navigator>
             <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        />

             <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        />
        <Stack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        
        />
         <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        />

        </Stack.Navigator>
    )
} 