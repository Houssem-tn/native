import * as React from 'react'
import {createDrawerNavigator }from '@react-navigation/drawer'
import { Icon } from "react-native-elements";
import ClientTab from './ClientTab' 
import { Colors } from '../Styling/Style';
import HelpScreen from '../Screens/HelpScreen';
import DrawerContent from '../components/DrawerContent';
const Drawer = createDrawerNavigator()
export default function DrawerNavigator(){

    return (
        <Drawer.Navigator
        drawerContent={props=><DrawerContent {...props} />}
        >

    <Drawer.Screen
    name ="ClientTab"
    component={ClientTab}
    options={{
        title:'Client',
        drawerIcon:({focused,size})=>(
            <Icon
            type='material-community'
            name = 'home'
            color={focused ? "#7cc" : Colors.grey1}
            size={size}
            />
        ),
        headerShown: false,
    }}
    
    />
     <Drawer.Screen
    name ="HelpScreen"
    component={HelpScreen}
    options={{
        title:'Help',
        drawerIcon:({focused,size})=>(
            <Icon
            type='material-community'
            name = 'help'
            color={focused ? "#7cc" : Colors.grey1}
            size={size}
            />
        ),
        headerShown: false,
    }}
    
    />

        </Drawer.Navigator>
    )
}