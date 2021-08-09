import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, Linking } from 'react-native';
import { GetConfig, ButtonColor, ButtonTextColor } from './Functions.js';
import food from '../../Img/icon3.png';
import notice from '../../Img/icon2.png';
import alamCheck from '../../Img/icon6.png';
import rule from '../../Img/icon4.png';
import qna from '../../Img/icon5.png';
import logo from '../../Img/main_logo.png';
import mainBg from '../../Img/main_bg.png';

export default function main({ navigation }) {


  const [language, setLanguage] = useState('Ko');
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={mainBg} style={{ height: "100%", width: "100%" }}>
        <View style={{ height: "5%" }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 10,
              width: 55,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 2, backgroundColor: ButtonColor("Ko", language)
            }}
            onPress={() => setLanguage('Ko')}
            >
              <Text style={{ color: ButtonTextColor("Ko", language) }}>한국어</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 10,
              width: 55,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 2, backgroundColor: ButtonColor("En", language)
            }}
            onPress={() => setLanguage('En')}
            >
            <Text style={{ color: ButtonTextColor("En", language) }}>ENG</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={{
          height: "15%",
          width: "100%",
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Image source={logo} style={{ resizeMode: 'contain', width: "75%" }} />


        </View>


        <View style={{
          height: "35%",
          flexDirection: 'row',
          justifyContent: 'center'
        }}>

            <TouchableOpacity
             style={{
              backgroundColor: "white",
              width: "40%",
              margin: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
              onPress={() => navigation.navigate("Notification", { language: language })}
            >
              <Image
                source={alamCheck} 
                style={{ resizeMode: 'contain', height: 70 }}
              />
              <Text> {GetConfig(language, "main_title1")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={{
              backgroundColor: "white",
              width: "40%",
              margin: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
              onPress={() => navigation.navigate("Menu", { language: language })}
            >
              <Image
                source={food} 
                style={{ resizeMode: 'contain', height: 70 }}
              />
              <Text> {GetConfig(language, "main_title2")}</Text>
            </TouchableOpacity>

        </View>


        <View style={{
          height: "35%",
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
            <TouchableOpacity
             style={{
              backgroundColor: "white",
              width: "30%",
              margin: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
              onPress={() => navigation.navigate("Notice", { language: language })}
            >
              <Image
                source={notice} 
                style={{ resizeMode: 'contain', height: 70 }}
              />
              <Text> {GetConfig(language, "main_title3")}</Text>
            </TouchableOpacity>


            <TouchableOpacity
             style={{
              backgroundColor: "white",
              width: "30%",
              margin: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401')}
            >
              <Image
                source={rule} 
                style={{ resizeMode: 'contain', height: 70 }}
              />
              <Text> {GetConfig(language, "main_title4")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={{
              backgroundColor: "white",
              width: "30%",
              margin: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate("Inquiries", { language: language })}
            >
              <Image
                source={qna} 
                style={{ resizeMode: 'contain', height: 70 }}
              />
              <Text> {GetConfig(language, "main_title5")}</Text>
            </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  )
}
