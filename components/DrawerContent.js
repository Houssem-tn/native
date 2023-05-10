import React,{ useEffect,useState } from "react";
import { Colors } from "../Styling/Style";
 import {View,Text,Linking,Pressable,Alert,Switch,StyleSheet}from 'react-native'
 import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'
 import { Avatar,Button,Icon } from "react-native-elements";


 const profileImage = require('../assets/profile.png')
 export default function DrawerContent(props){
    const { displayName, email } = props;
    console.log("displayName:", displayName);
  console.log("email:", email);
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
        <Text style={{fontWeight:'bold',color:Colors.pagebackground,fontSize:14}}>{displayName}</Text>
        <Text style={{color:Colors.pagebackground,fontSize:14}}>{email}</Text>
    </View>
</View>

<DrawerItemList {...props}/>
<DrawerItem
label="Reservations"
icon={({color,size})=>(
    <Icon
    type="material-community"
    name="credit-card-outline"
    color={color}
    size={size}
    />
)}
/>

<View style={{borderTopWidth:1,borderTopColor:Colors.grey5}}>
    <Text style={styles.preferences}>Preferences</Text>
    <View style={styles.switchText}>
<Text style={styles.darkTheme}>Dark theme</Text>
<View style={{paddingRight:10}}>
    <Switch
    trackColor={{false:'#767577',true:'81b0ff'}}
    thumbColor={"#f4f3f4"}
    />

</View>
    </View>
</View>

</DrawerContentScrollView>
<DrawerItem
label="Sign out!"
icon={({color,size})=>(
    <Icon
    type="material-community"
    name="logout-variant"
    color={color}
    size={size}
    />
)}
/>
        </View>
    )
 }

 const styles=StyleSheet.create({
    container : {flex:1},
    avatar : {
        borderWidth:4,
        borderColor:Colors.pagebackground,
        
    },
preferences : {
    fontSize:16,
    color : Colors.grey2,
    paddingTop:10,
    paddingLeft:20, 

},
switchText: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:20,
    paddingVertical:5,
    paddingRight:10,
},
darkTheme:{
    fontSize:16,
    color:Colors.grey2,
    paddingTop:10,
    paddingLeft:10,
    fontWeight:'bold'

}
 })