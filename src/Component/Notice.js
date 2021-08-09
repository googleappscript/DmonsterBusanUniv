import React,{useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import { GetConfig } from './Functions.js';

export default function Notice({navigation, route}) {

    navigation.setOptions({
        title : GetConfig(route.params.language,"main_title3")
    })

    return (
        <WebView
            source = {{uri : 'https://dorm.pusan.ac.kr/dorm/bbs/list03/20000602'}}
        />
    )
}