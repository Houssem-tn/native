import React,{ useEffect,useState } from "react";
import { Colors } from "../Styling/Style";
 import {View,Text,Linking,Pressable,Alert,Switch,StyleSheet}from 'react-native'
 import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'
 import { Avatar,Button,Icon } from "react-native-elements";


 const profileImage = require('../assets/profile.png')
 export default function DrawerContent(props){
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
<View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.buttons,paddingLeft:20}}>
    <Avatar
    rounded
    avatarStyle={styles.avatar}
    size={75}
    source={profileImage}
    />
    <View style={{marginLeft:15}}>
        <Text style={{fontWeight:'bold',color:Colors.pagebackground,fontSize:14}}>Rachdi Houssem</Text>
        <Text style={{color:Colors.pagebackground,fontSize:14}}>R.H@gmail.com</Text>
    </View>
</View>
<DrawerItemList {...props}/>
</DrawerContentScrollView>
        </View>
    )
 }

 const styles=StyleSheet.create({
    container : {flex:1},
    avatar : {
        borderWidth:4,
        borderColor:Colors.pagebackground,
        
    }
 })