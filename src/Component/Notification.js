import React,{useState, useEffect} from 'react';
import { Button, View, Text ,Switch} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { GetConfig } from './Functions.js';
import {ExpandableListView} from 'react-native-expandable-listview';

const CONTENT = [
  {
    id: '12',
    categoryName: 'title 1',
    subCategory: [
      {
        id: '1',
        name:
          "content                                                                                                                ",
      }
    ],
  },
  {
    id: '95',
    categoryName: 'title 2',
    subCategory: [{id: '1', name: 'content'}],
  },
  {
    id: '94',
    categoryName: 'title 3',
    subCategory: [{id: '1', name: 'content'}],
  },
  {
    id: '93',
    categoryName: 'title 4',
    subCategory: [{id: '1', name: 'content'}],
  },
  {
    id: '92',
    categoryName: 'title 5',
    subCategory: [{id: '1', name: 'content'}],
  },
  {
    id: '96',
    categoryName: 'title 6',
    subCategory: [{id: '1', name: 'content'}],
  },
];

function Notification({ navigation, route}) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    navigation.setOptions({
      headerTitle: () => <View style={{flexDirection : 'column',flex:1}}><View style={{     alignItems : 'center'}}><Text>{GetConfig(route.params.language,"main_title1")}</Text></View></View>,
      //headerTitle: () => <View style={{alignItems:"center",flex:1}}><Text>asdfasd</Text></View>,
      title : GetConfig(route.params.language,"main_title1")
    })

  return (
    <View>
    <View style ={{flexDirection : 'row',justifyContent : 'space-between',margin : 15,}}>
    <Text>{GetConfig(route.params.language,"sub_page1_t1")}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#47ffa9" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
    </View>
    <View style ={{flexDirection : 'row',justifyContent : 'space-between',margin : 15,}}>
    <Text>{GetConfig(route.params.language,"sub_page1_t2")}</Text>
    </View>

    <View style ={{flexDirection : 'row',justifyContent : 'space-between',margin : 15,}}>
    <ExpandableListView
        itemContainerStyle={{backgroundColor : 'transparent'}}
        innerItemContainerStyle={{backgroundColor : 'white'}}
        data={CONTENT} // required
      />
    </View>

    </View>
  );
}
export default Notification;
