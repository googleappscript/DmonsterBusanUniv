import React,{useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import { GetConfig } from './Functions.js';

export default function Menu({navigation, route}) {

    navigation.setOptions({
        title : GetConfig(route.params.language,"main_title2")
    })

    return (
        <WebView
            source = {{uri : 'https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403'}}
        />
    )
}