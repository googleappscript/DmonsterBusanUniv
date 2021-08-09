import React,{useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, Linking} from 'react-native';
import {GetConfig, ButtonColor, ButtonTextColor} from './Functions.js';

export default function main ({navigation}) {


  const [language, setLanguage] = useState('Ko');
  return (
    <View style = {Styles.container}>
      <ImageBackground
        source = {require('../../Img/main_bg.png')}
        style = {{width : '100%', height : '100%' }}
      >
      <View style = {Styles.header}>
        <TouchableOpacity
          style = {[Styles.language_Button, {backgroundColor : ButtonColor("Ko",language)}]}
          onPress = {() => setLanguage('Ko')}
        >
          <Text style = {{color : ButtonTextColor("Ko",language)}}>한국어</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {[Styles.language_Button, {backgroundColor : ButtonColor("En",language)}]}
          onPress = {() => setLanguage('En')}
          >
          <Text style = {{color : ButtonTextColor("En",language)}}>ENG</Text>
        </TouchableOpacity>
      </View>
      <View  style = {Styles.title}>
        <Image
          source = {require('../../Img/main_logo.png')}
          style = {{resizeMode : "contain" , width : '75%'}}
        />
      </View>
      <View style = {Styles.section}>
        <TouchableOpacity
          style = {Styles.nav_Button1}
          onPress = {() => navigation.navigate("Notification", { language : language})}
        >
          <Image
            source = {require('../../Img/icon1.png')}
            style = {{resizeMode : 'contain', height : 70}}
          />
          <Text> {GetConfig(language,"main_title1")}</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style = {Styles.nav_Button1}
          onPress = {() => navigation.navigate('Menu', { language : language})}
        >
          <Image
            source = {require('../../Img/icon3.png')}
            style = {{resizeMode : 'contain', height : 70}}
          />
          <Text> {GetConfig(language,"main_title2")}</Text>
        </TouchableOpacity>
      </View>

      <View style = {Styles.section}>
        <TouchableOpacity
          style = {Styles.nav_Button2}
          onPress = {() => navigation.navigate('Notice', { language : language})}
        >
          <Image
            source = {require('../../Img/icon2.png')}
            style = {{resizeMode : 'contain', height : 70}}
          />
          <Text> {GetConfig(language,"main_title3")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {Styles.nav_Button2}
          onPress = {() => Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401')}
        >
          <Image
            source = {require('../../Img/icon4.png')}
            style = {{resizeMode : 'contain', height : 70}}
          />
          <Text> {GetConfig(language,"main_title4")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {Styles.nav_Button2}
          onPress = {() => navigation.navigate('Inquiries', { language : language} )}
        >
          <Image
            source = {require('../../Img/icon5.png')}
            style = {{resizeMode : 'contain', height : 70}}
          />
          <Text> {GetConfig(language,"main_title5")}</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
}

const Styles = StyleSheet.create({
  container : {
    flex : 1,

  },
  header : {
    flexDirection : 'row',
    alignItems : 'flex-end',
    width : '100%',
    height : '5%',
    right : 0,
    justifyContent : 'flex-end'
  },
  language_Button : {
    borderRadius : 10,
    borderColor : "white",
    width : 65 ,
    height : 30,
    marginTop : 15,
    marginRight : 10,
    borderWidth : 1,
    alignItems : 'center',
    justifyContent : 'center',

  },
  title : {
    height : '28%',
    width : '100%',
    alignItems : 'center',
    justifyContent : 'center',
  },
  section : {
    flexDirection : 'row',
    justifyContent : 'center'
  },
  nav_Button1 : {
    width : 186,
    height : 186,
    backgroundColor : 'white',
    margin : 7,
    borderRadius : 10,
    alignItems : 'center',
    justifyContent : 'center'
  },
  nav_Button2 : {
    width : 119,
    height : 186,
    backgroundColor : 'white',
    margin : 7,
    borderRadius : 10,
    alignItems : 'center',
    justifyContent : 'center'
  },
})