import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,Alert,Button,FlatList, ScrollView} from 'react-native';
import * as React from 'react';



const PlaceholderImage = require('../assets/download.jpeg');
export default function FirstFile() {
  const [text, setText] = React.useState('');

  return (

    <View style={styles.container}>
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      </View>
      <Image source={PlaceholderImage}
      style={styles.image}
      />
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s"}}
      style={styles.image}
      />
       <TextInput
      placeholder='EMAILLLL'
      value={text}
      // keyboardType="numeric"
      onChangeText={text => setText(text)}
      style={styles.textInput}
      multiline
        numberOfLines={4}
    />
   <Button
        title="Press me"
        color="#f194ff"
        onPress={() =>alert('sapna')}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // padding:20
    borderWidth:1,borderColor:'green'
  },
  image:{
    height:150,
    width:150,
  },
  textInput:{
    borderWidth:1,
    borderColor:'red',
    padding:5
  },
 
});
