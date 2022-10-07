import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AntDesign,
  Foundation, 
  Feather,
  FontAwesome5,
  Ionicons,
  Entypo,
  MaterialIcons,
  Fontisto,
} from '@expo/vector-icons';

import {
  Image,
  View,
  Text, 
  TextInput,
  StyleSheet,
  ScrollView,
  ViewBase,
} from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.nav}>
        <AntDesign name="arrowleft" style={styles.brs} />
            <View style={styles.more}>
            <MaterialCommunityIcons style={styles.brs}
            name="bell-outline"
            />
          <FontAwesome5 name="user-circle" style={styles.brs}/>
          <Feather name="menu" style={styles.brs}/>
            </View>
        </View>
      <View style={styles.comentshome}>
        <View style={styles.header}>
          <View>
            <FontAwesome5 name="user-circle" style={styles.avatar2}/>
          </View>
          <View  style={styles.input}>
          <TextInput
          style={styles.imput}
            placeholderTextColor='#B4ADB7'
            placeholder='Add a commet...'
            />
            <Entypo name="emoji-happy" style={styles.emoji} />
            <Ionicons name="send" style={styles.send}/>
          </View>
        </View>
        <Text style={styles.title}>87 Comments</Text>
        <View>
          <View style={styles.coments}>
            <FontAwesome5 name="user-circle" style={styles.comentAvatar}/>
            <Text style={styles.name}>David Green  •</Text>
            <Text style={styles.date}>  20 Apr. 2021</Text>
          </View>
          <Text style={styles.textHeader}>
              😀😎Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit inventore ipsum alias nostrum? Itaque deserunt aperiam esse architecto excepturi, minus reiciendis, iste eaque suscipit veniam reprehenderit a dignissimos. Et.
            </Text>
        </View>
        <View>
          <View style={styles.coments}>
            <FontAwesome5 name="user-circle" style={styles.comentAvatar}/>
            <Text style={styles.name}>Michel Ganri  •</Text>
            <Text style={styles.date}>  20 Apr. 2021</Text>
          </View>
          <Text style={styles.textHeader}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit inventore ipsum alias nostrum? ...
            </Text>
        </View>
        <View>
          <View style={styles.coments}>
            <FontAwesome5 name="user-circle" style={styles.comentAvatar}/>
            <Text style={styles.name}>Kim Dranco  •</Text>
            <Text style={styles.date}>  20 Apr. 2021</Text>
          </View>
          <Text style={styles.textHeader}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit inventore ipsum alias nostrum? ...
            </Text>
        </View>
        <View>
          <View style={styles.coments}>
            <FontAwesome5 name="user-circle" style={styles.comentAvatar}/>
            <Text style={styles.name}>Scot Donavan  •</Text>
            <Text style={styles.date}>  20 Apr. 2021</Text>
          </View>
          <Text style={styles.textHeader}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit inventore ipsum alias nostrum? Itaque deserunt ...
            </Text>
        </View>
        <View>
          <View style={styles.coments}>
            <FontAwesome5 name="user-circle" style={styles.comentAvatar}/>
            <Text style={styles.name}>David Green  •</Text>
            <Text style={styles.date}>  20 Apr. 2021</Text>
          </View>
          <Text style={styles.textHeader}>
              😀😎Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit inventore ipsum alias nostrum? Itaque deserunt aperiam esse architecto excepturi, minus reiciendis, iste eaque suscipit veniam reprehenderit a dignissimos. Et.
            </Text>
        </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
      <Foundation name="home" style={styles.footer1}/>
      <MaterialIcons name="featured-play-list" style={styles.footer1}/>
      <FontAwesome5 name="book-open" style={styles.footer1}/>
      <FontAwesome5 name="user-friends" style={styles.footer2}/>
      <Fontisto name="favorite" style={styles.footer1}/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28333F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav:{
    flexDirection:'row',
  },
  more:{
    flexDirection:'row',
    marginLeft:200,
  },
  brs:{
    padding:13,
    paddingTop:40,
    fontSize:27,
    color:'white',
  },
  header:{
    flexDirection:'row',
  },
  input: {  
    flexDirection:'row',
    marginLeft:10,
    backgroundColor: '#4B576B',
    borderRadius: 10,
    fontSize: 17,
    color: 'white',
  },
imput:{
  marginLeft:10,
  marginRight:94,
  fontSize:18,
},
emoji:{
paddingTop:10,
paddingRight:9,
paddingLeft:9,
paddingBottom:10,
marginLeft:5,
marginTop:3,
marginBottom:5,
marginRight:5,
color :'#677FFE',
fontSize:25,
borderRadius:8,
backgroundColor:'#2F3C50',
},
send:{
padding:9,
marginLeft:3,
marginTop:3,
marginBottom:3,
marginRight:3,
color :'white',
fontSize:29,
borderRadius:10,
backgroundColor:'#677FFF',
},

  comentshome:{
    marginTop: 20,
    paddingVertical: 60,
    backgroundColor:'#2F3C50',
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title:{
    marginTop:20,
    fontSize:25,
    color:'white',
  },
  textHeader:{
    color:'#A4A0AB',
    borderBottomColor:'#4D596D',
    borderBottomWidth:1,
    paddingBottom:10,
    paddingTop:10,
    paddingLeft:40,
  },

  avatar2:{
    borderColor:'#4D596D',
    color:'#677FFE',
    fontSize:30,
    paddingTop:7,
    paddingRight:3,
    paddingLeft:7,
    paddingBottom:3,
    borderWidth:2,
    borderRadius:50,
  },
  coments:{
    flexDirection:'row',
  },
  comentAvatar:{
    color:'white',
    paddingTop:10,
    fontSize:35, 
  },
  name:{
    paddingLeft:10,
    paddingTop:16,
    color:'white',
    fontSize:20,
  },
  date:{
    paddingTop:18,
    color:'#A4A0AB',
    fontSize:18,
  },
  footer:{
    flexDirection:'row',
  },
  footer1:{
    color:'#AEA8B3',
    fontSize:25,
    padding:25,
    marginEnd:10,
  },
  footer2:{
    color:'#677FFE',
    fontSize:20,
    paddingTop:25,
    borderColor:'#677FFE',
    borderTopWidth:3,
  },
});
