import React from "react";
import { Text,View,TouchableOpacity,StyleSheet,Image } from "react-native";
import { Icon } from "react-native-elements";
import { Colors,Parameters } from "../Styling/Style";
import { ScreenWidth } from "react-native-elements/dist/helpers";

export default function RestaurantCard(){

return(

    <TouchableOpacity>
        <View>
<Image
style={{...styles.image,width:screenWidth}}
/>
        </View>
        <View>
            <View>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
<View style={styles.restaurantSpeciality}>
<Icon
name='restaurant'
type="material"
color= "red"
size={18}
iconStyle={{marginTop:3}}
/>
<Text style={styles.Spec}>{restaurantSpeciality}</Text>
</View>
<View style={{flex:9,flexDirection:'row'}}>
    <Text style={styles.Adress}>{restaurantAdress}</Text>

</View>
            </View>
        </View>
    </TouchableOpacity>
)


}
const styles = StyleSheet.create({
cardView :{
marginHorizontal:9,
borderTopRightRadius:5,
borderTopLeftRadius:5,
borderWidth:1,
borderColor:Colors.grey4,
borderBottomLeftRadius:5,
borderBottomRightRadius:5,

},
image:{
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    height:150
},
restaurantName :{
    fontSize:17,
    fontWeight:"bold",
    color:Colors.grey1,
    marginTop:5
},
restaurantSpeciality:{
flex:4,
flexDirection:'row',
borderRightColor:Colors.grey4,
paddingHorizontal:5,
borderRightWidth:1

},
Spec :{
fontSize:12,
fontWeight:'bold',
paddingTop:5,
color:Colors.grey3
},
Adress : {
    fontSize:12,
    paddingTop5,
    color:Colors.grey2,
    paddingHorizontal:10
}
})