import React,{useState, useEffect} from 'react';
import { Button, View, Text ,Switch,Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetConfig } from './Functions.js';

function Inquiries({ navigation, route}) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    navigation.setOptions({
        title : GetConfig(route.params.language,"main_title5")
    })

  return (
    <View>
    <View style ={{flexDirection : 'column',justifyContent : 'space-between',margin : 15,}}>
    <Text style={{fontSize : 18, fontWeight: 'bold'}}>{GetConfig(route.params.language,"sub_page5_t1")}</Text>
    <Text style={{fontSize : 12, margin:10}}>{GetConfig(route.params.language,"sub_page5_t1_t1")}</Text>
    <Text style={{fontSize : 12, margin:10}}>{GetConfig(route.params.language,"sub_page5_t1_t2")}</Text>
    <Text style={{fontSize : 18, fontWeight: 'bold',marginTop:15,marginBottom:4}}>{GetConfig(route.params.language,"sub_page4_t1")}</Text>
    <View style={{margin:10}}>
    <Button
          title={GetConfig(route.params.language,"sub_page4_b1")}
           onPress = {() => Linking.openURL('https://dorm.pusan.ac.kr/ ')}
    />
    </View>

<Text  style={{marginLeft:15,marginRight:10}}>{GetConfig(route.params.language,"sub_page4_b1_t")}</Text>
    <View style={{margin:10}}>
        <Button
      title={GetConfig(route.params.language,"sub_page4_b2")}
     onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/ ')}
    />
    </View>


    <Text  style={{marginLeft:15,marginRight:10}}>{GetConfig(route.params.language,"sub_page4_b2_t")}</Text>
    <View style={{margin:10}}>
        <Button
      title={GetConfig(route.params.language,"sub_page4_b3")}
      onPress={() => Linking.openURL('tel:$051-510-7827')}
    />
    </View>
<Text  style={{marginLeft:15,marginRight:10}}>{GetConfig(route.params.language,"sub_page4_b3_t")}</Text>
    </View>



    </View>
  );
}
export default Inquiries;
