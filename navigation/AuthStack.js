import React from "react";
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import WelcomeScreen from "../Screens/WelcomeScreen"
import Splash from "../Screens/Splash";
// import HomeScreen from "../Screens/HomeScreen";
// import ClientTab from "./ClientTab";
import DrawerNavigator from "./DrawerNavigator";

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
        
        {/* <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        /> */}
         <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        />
        <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        
        />

        </Stack.Navigator>
    )
} 