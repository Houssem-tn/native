// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput,ScrollView, StatusBar,TouchableOpacity} from 'react-native';



import {Colors} from './Styling/Style'
import WelcomeScreen from './Screens/WelcomeScreen';

import RootNavigator from './navigation/RootNavigator';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"
      backgroundColor={Colors.statusbar}
      />

<RootNavigator/>




{/* <SignIn/> */}
     
      {/* <Splash/> */}
      {/* <WelcomeScreen/> */}
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  
  }
});
