import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function App() {

const data = [
  {
    id: 1,
    name:"Mr Peter Oti",
    cover: require("./Img/mp.jpg"),
    avatar: require("./Img/mpp.jpg"),
  },

  {
    id: 2,
    name:"Mr Ubani Friday",
    cover: require("./Img/ub.jpg"),
    avatar: require("./Img/ubb.jpg"),
  },

  {
    id: 3,
    name:"Gideon Ekeke",
    cover: require("./Img/gd.jpg"),
    avatar: require("./Img/gdd.jpg"),
  }
]


  return (
   <SafeAreaView>
     <ScrollView>
     <Text style={styles.texttt}> List Of CodeLab Fellos </Text>
     </ScrollView>
     <ScrollView horizontal={true} >
     <View style={styles.container}>

{data.map(({id, name, cover, avatar})=>(
  <View style={styles.pixDiv}>
  <Image 
  style={styles.theImg1}
    source={cover}
  />
  <View style={styles.imgView}>
  <Image 
  style={styles.theImg2}
    source={avatar}
  />
  </View>
  <View style={{width:270, marginLeft:20}}>
   <View style={{justifyContent:'center', alignItems:'center'}}>
   <Text style={{fontSize:25, fontWeight:'bold', margin:7}}> {name} </Text>
   </View>
    <Text>
    React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
    Use little—or a lot. You can use React Native today in your existing
    </Text>
  </View>
  <View style={{width:270,justifyContent:'space-between', flexDirection:'row', marginTop:10,margin:15, }}>
    <TouchableOpacity style={{height:45, width:45, borderRadius:50,backgroundColor:'#1695F7', justifyContent:'center', alignItems:'center'}} >
      <MaterialCommunityIcons 
        name="file-edit"
        style={{color:'#fff', fontSize:30}}
      />
    </TouchableOpacity>
    <TouchableOpacity style={{width:100,height:40, backgroundColor:'#1695F7',justifyContent:'center', alignItems:'center',borderRadius:4}}>
      <Text style={{color:'#fff', fontWeight:'bold'}}>Learn More</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{height:45, width:45, borderRadius:50,backgroundColor:'#1695F7', justifyContent:'center', alignItems:'center'}} >
      <MaterialCommunityIcons 
        name="delete"
        style={{color:'#fff', fontSize:30}}
      />
    </TouchableOpacity>
  </View>
</View> 

))}
      
    </View>
     </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    flexDirection:'row'
  },

  texttt: {
    backgroundColor: '#123456',
    color: '#fff',
    fontWeight:'bold',
    margin:10
  },

  pixDiv: {
    height: 370,
    width: 300,
    // backgroundColor:'green',
    marginTop: 20,
    borderWidth: 1,
    borderRadius:5,
    borderColor:'gray'
  },

  theImg1: {
    height: 100,
    width: 300,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },

  imgView: {
    width:300,
    // backgroundColor:'yellow',
    alignItems:'center'
  },

  theImg2: {
    height: 100,
    width: 100,
    borderRadius:50,
    borderWidth:5,
    borderColor:'#fff',
    marginTop:-50
  }
});
