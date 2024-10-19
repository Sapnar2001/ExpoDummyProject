import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import * as React from 'react';



export default function EntryFileFor() {
  return (
    <SafeAreaView style={styles.container}>
<Text style={styles.text}>{'MOBILE DEMO FILE'}</Text>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
height:'100%',
   backgroundColor:'black',
   alignItems:'center',
   justifyContent:'center'
  },
  text:{
color:'white'
  }
});
