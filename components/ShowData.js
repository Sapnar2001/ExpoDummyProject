import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,Alert,Button,FlatList} from 'react-native';
import * as React from 'react';



export default function ShowData() {
  
  const data=[

      {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
        name:'abc'
      },
      {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
        name:'xyz'
      },
      {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
          name:'QRTY'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
          name:'RAM'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
          name:'TAYE'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
          name:'PEO'
        },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
      name:'sapna'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
      name:'pooja'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
      name:'abc'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
      name:'xyz'
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
        name:'QRTY'
      },
      {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
        name:'RAM'
      },
      {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
        name:'TAYE'
      },
      {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcqrXE6HREctXF4rWCPDXAXH9novSxFdeLg&s',
        name:'PEO'
      }
  ]
const renderdata=({item})=>{
  return(
    <View>
       <Image source={{uri:item.img}}
      style={styles.image}
      />
      <Text style={{fontSize:35,color:'blue'}}>{item.name}</Text>
    </View>
  )
}
  return (
    <View style={styles.container}>
      <FlatList data={data}
      horizontal
renderItem={renderdata}
contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
 container:{
height:100
 },

 image:{
    height:100,
    width:100,
    marginRight:5
 }
});
