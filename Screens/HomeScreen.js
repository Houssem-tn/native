import { Colors,Parameters,title } from '../Styling/Style'
import HomeHeader from "../components/HomeHeader";
import { Image,Text,View,StyleSheet,ScrollView,FlatList,Pressable } from "react-native";
import { dummy } from '../Styling/Dummy';
import React ,{ useState } from 'react';
export default function HomeScreen (){

const [indexCheck,setIndexCheck]= useState('0')
return(
<View style = {styles.container}>
<HomeHeader/>
<ScrollView
stickyHeaderIndices={[0]}
showsVerticalScrollIndicator={true}
>
<View style={styles.headerTextView}>
    <Text style={styles.headerText}>Categories</Text>
</View>
<View>
   <FlatList
   horizontal={true}
   showsHorizontalScrollIndicator={true}
   data = {dummy}
   keyExtractor={(item)=>item.id}
   extraData={indexCheck}
   renderItem={({item,index})=>(
    <Pressable
    onPress={()=>{setIndexCheck(item.id)}}
    >
        <View style={indexCheck===item.id? {...styles.smalllCardSelected}:{...styles.smalllCard }}>
<Image
style={{height:60,width:60,borderRadius:30}}
source={item.image}
/>
<View>
    <Text style={indexCheck===item.id ? {...styles.smalllCardTextSelected}:{...styles.smalllCardText}}>{item.name}</Text>
</View>
        </View>
    </Pressable>
   )}
   />
</View>
<View style={styles.headerTextView}>
    <Text style={styles.headerText}>Our restuarants</Text>
</View>
</ScrollView>
</View>
)
}
const styles = StyleSheet.create ({
 container : {felx: 1}, 
 headerText :{color:Colors.grey1,
fontSize:24,
fontWeight:'bold',
paddingLeft:20},
headerTextView :{
    backgroundColor:Colors.grey5,
    paddingVertical:3,
},
smalllCard: {
borderRadius:30,
backgroundColor:Colors.grey5,
justifyContent:'center',
padding:5,
width:80,
margin:10,
height:100

},
smalllCardSelected : {
    borderRadius:30,
backgroundColor:Colors.buttons,
justifyContent:'center',
padding:5,
width:80,
margin:10,
height:100
},
smalllCardTextSelected :{
    fontWeight:"bold",
color:Colors.cardbackground,}
,
smalllCardText :{
    fontWeight:"bold",
color:Colors.grey2,}

})