import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,Alert,Button,FlatList, ScrollView,ActivityIndicator,ImageBackground,Modal, Pressable} from 'react-native';
import * as React from 'react';


export default function ModalFile() {
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  const [showModal, setShowModal] = React.useState(false);

  return (
<View>
<Button
        title="OPEN MODAL"
        color="green"
        onPress={() =>setShowModal(true)}
      />

{/* <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" /> */}
    <ActivityIndicator size="large" color="#00ff00" />
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>{'sapnaaaaaa'}</Text>
    </ImageBackground>
    
    <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
         alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex:1,borderWidth:1,borderColor:'blue'}}>
<Text style={styles.text}>{'HELLOWORLD'}</Text>
<Pressable onPress={()=>setShowModal(false)}>
<Text style={styles.text}>{'CLOSE MODAL'}</Text>
</Pressable>
        </View>
        </Modal>
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   borderWidth:1,
   borderColor:'blue',
    padding:20
  },
  text:{
    fontSize:34,
    color:'red'
  },
  image:{
    height:150,
    width:150,
  },
  textInput:{
    borderWidth:1,
    borderColor:'red',
    padding:10
  },
 
});
